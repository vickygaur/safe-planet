<?php
/**
 * Safe Planet shared configuration
 * Copy this file to config.php and update values for your environment.
 */

define('DB_HOST', '127.0.0.1');
define('DB_NAME', 'safe_planet');
define('DB_USER', 'root');
define('DB_PASS', '');
define('DB_CHARSET', 'utf8mb4');

// Admin credentials — change these in production
define('ADMIN_USER', 'admin');
define('ADMIN_PASS', 'change-me');

define('CORS_ORIGIN', '*');

if (session_status() === PHP_SESSION_NONE) {
    session_start();
}
