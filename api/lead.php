<?php
require_once __DIR__ . '/db.php';

header('Content-Type: application/json; charset=utf-8');

if (isset($_SERVER['HTTP_ORIGIN'])) {
    header('Access-Control-Allow-Origin: ' . (CORS_ORIGIN === '*' ? $_SERVER['HTTP_ORIGIN'] : CORS_ORIGIN));
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type, Authorization');
}

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    json_response(['success' => false, 'error' => 'Method not allowed'], 405);
}

$data = read_json_body();

$name = trim((string)($data['name'] ?? ''));
$email = trim((string)($data['email'] ?? ''));
$phone = trim((string)($data['phone'] ?? ''));
$product = trim((string)($data['product'] ?? ''));
$message = trim((string)($data['message'] ?? ''));
$sourcePage = trim((string)($data['source_page'] ?? 'website'));

$allowedProducts = ['Aircon', 'Hot Water Heat Pump', 'Solar Batteries'];

$errors = [];
if ($name === '' || mb_strlen($name) < 2) {
    $errors['name'] = 'Please enter your name.';
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors['email'] = 'Please enter a valid email.';
}
if ($phone === '' || mb_strlen(preg_replace('/\D+/', '', $phone)) < 8) {
    $errors['phone'] = 'Please enter a valid phone number.';
}
if (!in_array($product, $allowedProducts, true)) {
    $errors['product'] = 'Please select a product.';
}
if (mb_strlen($message) > 2000) {
    $errors['message'] = 'Message is too long.';
}

if ($errors) {
    json_response(['success' => false, 'errors' => $errors], 422);
}

try {
    $db = get_db();
    $stmt = $db->prepare('
        INSERT INTO leads (name, email, phone, product, message, source_page, ip_address, user_agent)
        VALUES (:name, :email, :phone, :product, :message, :source_page, :ip, :ua)
    ');
    $stmt->execute([
        ':name' => $name,
        ':email' => $email,
        ':phone' => $phone,
        ':product' => $product,
        ':message' => $message !== '' ? $message : null,
        ':source_page' => $sourcePage,
        ':ip' => $_SERVER['REMOTE_ADDR'] ?? null,
        ':ua' => isset($_SERVER['HTTP_USER_AGENT']) ? substr($_SERVER['HTTP_USER_AGENT'], 0, 255) : null,
    ]);

    json_response([
        'success' => true,
        'message' => 'Thanks! Our team will be in touch shortly.',
        'id' => (int)$db->lastInsertId(),
    ], 201);
} catch (Throwable $e) {
    json_response(['success' => false, 'error' => 'Unable to save your enquiry. Please try again.'], 500);
}
