<?php
$distIndex = __DIR__ . '/dist/index.html';

if (!is_file($distIndex)) {
    http_response_code(503);
    header('Content-Type: text/html; charset=utf-8');
    echo '<!DOCTYPE html><html><body style="font-family:system-ui;padding:40px;background:#f5f9fc;color:#142433">';
    echo '<h1>Safe Planet</h1><p>Frontend build missing. Run <code>npm run build</code>.</p>';
    echo '<p><a href="admin/" style="color:#0e7c6b">Open admin</a></p></body></html>';
    exit;
}

// Detect install path: /safe-planet/ locally, / on AWS domain root
$scriptDir = str_replace('\\', '/', dirname($_SERVER['SCRIPT_NAME'] ?? '/'));
$basePath = rtrim($scriptDir, '/');
if ($basePath === '' || $basePath === '.' || $basePath === '/') {
    $basePath = '/';
} else {
    $basePath .= '/';
}

$html = file_get_contents($distIndex);
$html = str_replace(' crossorigin', '', $html);

// Rewrite root-absolute asset URLs for subdirectory installs
if ($basePath !== '/') {
    $html = preg_replace('#\b(href|src)="/(?!/)#', '$1="' . $basePath, $html);
}

// Inject base path for React Router + API calls
$inject = '<script>window.__BASE_PATH__=' . json_encode($basePath) . ';</script>';
$html = str_replace('<head>', '<head>' . $inject, $html);

header('Content-Type: text/html; charset=utf-8');
header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');
header('Pragma: no-cache');
echo $html;
