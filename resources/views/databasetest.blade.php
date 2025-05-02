<?php use Illuminate\Support\Facades\DB; ?>
<!DOCTYPE html>
<html>
<head>
    <title>Database Connection Test</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; }
        .status { padding: 10px; margin: 10px 0; border-radius: 4px; }
        .success { background-color: #dff0d8; color: #3c763d; }
        .error { background-color: #f2dede; color: #a94442; }
    </style>
</head>
<body>
    <h1>Database Connection Test</h1>

    <?php
    try {
        // Test database connection
       if (DB::connection()->getPdo()) {
            echo '<div class="status success">';
            echo 'Database is connected to '.DB::connection()->getDatabaseName();
            echo '</div>';
       }
        

    } catch (\Exception $e) {
        echo '<div class="status error">';
        echo 'Database connection failed: ' . $e->getMessage();
        echo '</div>';
    }
    ?>
</body>
</html>