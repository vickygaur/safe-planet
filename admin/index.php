<?php
require_once __DIR__ . '/auth.php';
require_once __DIR__ . '/../api/db.php';
require_admin();

$db = get_db();

// Status update
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['lead_id'], $_POST['status'])) {
    $id = (int)$_POST['lead_id'];
    $status = $_POST['status'];
    if (in_array($status, ['new', 'contacted', 'closed'], true)) {
        $stmt = $db->prepare('UPDATE leads SET status = :status WHERE id = :id');
        $stmt->execute([':status' => $status, ':id' => $id]);
    }
    header('Location: index.php?' . http_build_query(array_filter([
        'q' => $_GET['q'] ?? null,
        'status' => $_GET['status'] ?? null,
    ])));
    exit;
}

$q = trim($_GET['q'] ?? '');
$statusFilter = $_GET['status'] ?? '';

$sql = 'SELECT * FROM leads WHERE 1=1';
$params = [];

if ($q !== '') {
    $sql .= ' AND (name LIKE :q OR email LIKE :q OR phone LIKE :q OR product LIKE :q)';
    $params[':q'] = '%' . $q . '%';
}
if (in_array($statusFilter, ['new', 'contacted', 'closed'], true)) {
    $sql .= ' AND status = :status';
    $params[':status'] = $statusFilter;
}

$sql .= ' ORDER BY created_at DESC LIMIT 500';
$stmt = $db->prepare($sql);
$stmt->execute($params);
$leads = $stmt->fetchAll();

$counts = $db->query("
    SELECT
      COUNT(*) AS total,
      SUM(status = 'new') AS new_count,
      SUM(status = 'contacted') AS contacted_count,
      SUM(status = 'closed') AS closed_count
    FROM leads
")->fetch();
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Leads — Safe Planet Admin</title>
  <link rel="stylesheet" href="assets/admin.css" />
</head>
<body>
  <header class="topbar">
    <div class="topbar-brand">
      <span class="logo-mark">SP</span>
      <div>
        <strong>Safe Planet</strong>
        <span>Leads only</span>
      </div>
    </div>
    <a class="btn-ghost" href="logout.php">Sign out</a>
  </header>

  <main class="container">
    <section class="stats">
      <article><span>Total</span><strong><?= (int)$counts['total'] ?></strong></article>
      <article><span>New</span><strong><?= (int)$counts['new_count'] ?></strong></article>
      <article><span>Contacted</span><strong><?= (int)$counts['contacted_count'] ?></strong></article>
      <article><span>Closed</span><strong><?= (int)$counts['closed_count'] ?></strong></article>
    </section>

    <form class="filters" method="get">
      <input type="search" name="q" placeholder="Search name, email, phone…" value="<?= htmlspecialchars($q) ?>" />
      <select name="status">
        <option value="">All statuses</option>
        <option value="new" <?= $statusFilter === 'new' ? 'selected' : '' ?>>New</option>
        <option value="contacted" <?= $statusFilter === 'contacted' ? 'selected' : '' ?>>Contacted</option>
        <option value="closed" <?= $statusFilter === 'closed' ? 'selected' : '' ?>>Closed</option>
      </select>
      <button type="submit">Filter</button>
    </form>

    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>Date</th>
            <th>Name</th>
            <th>Contact</th>
            <th>Product</th>
            <th>Message</th>
            <th>Source</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <?php if (!$leads): ?>
            <tr><td colspan="8" class="empty">No leads yet. Enquiries from the website will appear here.</td></tr>
          <?php endif; ?>
          <?php foreach ($leads as $index => $lead): ?>
            <tr class="status-<?= htmlspecialchars($lead['status']) ?>">
              <td><?= $index + 1 ?></td>
              <td><?= htmlspecialchars(date('d M Y', strtotime($lead['created_at']))) ?></td>
              <td><?= htmlspecialchars($lead['name']) ?></td>
              <td>
                <a href="mailto:<?= htmlspecialchars($lead['email']) ?>"><?= htmlspecialchars($lead['email']) ?></a><br />
                <a href="tel:<?= htmlspecialchars($lead['phone']) ?>"><?= htmlspecialchars($lead['phone']) ?></a>
              </td>
              <td><span class="pill"><?= htmlspecialchars($lead['product']) ?></span></td>
              <td class="msg"><?= htmlspecialchars($lead['message'] ?? '—') ?></td>
              <td><?= htmlspecialchars($lead['source_page'] ?? '—') ?></td>
              <td>
                <form method="post" class="status-form">
                  <input type="hidden" name="lead_id" value="<?= (int)$lead['id'] ?>" />
                  <select name="status" onchange="this.form.submit()">
                    <option value="new" <?= $lead['status'] === 'new' ? 'selected' : '' ?>>New</option>
                    <option value="contacted" <?= $lead['status'] === 'contacted' ? 'selected' : '' ?>>Contacted</option>
                    <option value="closed" <?= $lead['status'] === 'closed' ? 'selected' : '' ?>>Closed</option>
                  </select>
                </form>
              </td>
            </tr>
          <?php endforeach; ?>
        </tbody>
      </table>
    </div>
  </main>
</body>
</html>