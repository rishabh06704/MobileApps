<?php
// sendMessage.php

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header('Access-Control-Allow-Origin: http://localhost:8081');
    header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type');
    exit(0);
}

header('Access-Control-Allow-Origin: http://localhost:8081');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Parse the incoming request data
$data = json_decode(file_get_contents('php://input'), true);

$sender = $data['sender'];
$recipient = $data['recipient'];
$message = $data['message'];

// Store the message data on the file system or in a database
$filePath = "messages.txt";
$messageData = "$sender|$recipient|$message\n";

// Append the message data to the file
file_put_contents($filePath, $messageData, FILE_APPEND);

// Return a success response
$response = ['success' => true];
header('Content-Type: application/json');
echo json_encode($response);
?>