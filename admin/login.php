<?php
require_once __DIR__ . '/auth.php';

if (admin_logged_in()) {
    header('Location: index.php');
    exit;
}

$error = '';
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $user = trim($_POST['username'] ?? '');
    $pass = (string)($_POST['password'] ?? '');
    if (attempt_login($user, $pass)) {
        header('Location: index.php');
        exit;
    }
    $error = 'Invalid username or password.';
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Admin Login — Safe Planet</title>
  <link rel="stylesheet" href="assets/admin.css" />
</head>
<body class="auth-body">
  <main class="auth-card">
    <div class="auth-brand">
      <span class="logo-mark">SP</span>
      <div>
        <h1>Safe Planet</h1>
        <p>Leads Admin</p>
      </div>
    </div>
    <?php if ($error): ?>
      <div class="alert"><?= htmlspecialchars($error) ?></div>
    <?php endif; ?>
    <form method="post" class="auth-form">
      <label>
        Username
        <input type="text" name="username" required autofocus autocomplete="username" />
      </label>
      <label>
        Password
        <input type="password" name="password" required autocomplete="current-password" />
      </label>
      <button type="submit">Sign in</button>
    </form>
  </main>
</body>
</html>
