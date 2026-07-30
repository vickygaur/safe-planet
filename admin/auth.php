<?php
require_once __DIR__ . '/../api/config.php';

function admin_logged_in(): bool
{
    return !empty($_SESSION['admin_logged_in']);
}

function require_admin(): void
{
    if (!admin_logged_in()) {
        header('Location: login.php');
        exit;
    }
}

function attempt_login(string $user, string $pass): bool
{
    if ($user === ADMIN_USER && hash_equals(ADMIN_PASS, $pass)) {
        $_SESSION['admin_logged_in'] = true;
        $_SESSION['admin_user'] = $user;
        return true;
    }
    return false;
}
