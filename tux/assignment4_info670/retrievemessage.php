<?php
// retrieveMessages.php

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  header('Access-Control-Allow-Origin: http://localhost:8081');
  header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
  header('Access-Control-Allow-Headers: Content-Type');
  exit(0);
}

header('Access-Control-Allow-Origin: http://localhost:8081');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

$recipient = $_GET['recipient'];

// Read the messages from the pre-created file
$filePath = "messages.txt";
$messages = [];

// Check if the file exists
if (file_exists($filePath)) {
    // Read the message data from the file
    $messageData = file_get_contents($filePath);

    // Split the message data into individual messages
    $messageLines = explode("\n", $messageData);

    // Process each message line
    foreach ($messageLines as $messageLine) {
        if (!empty($messageLine)) {
            // Split the message line into sender, recipient, and message
            list($sender, $storedRecipient, $message) = explode("|", $messageLine);

            // Check if the recipient matches the stored recipient
            if ($storedRecipient === $recipient) {
                $messages[] = [
                    'sender' => $sender,
                    'message' => $message,
                ];
            }
        }
    }
}

// Return the messages as a JSON response
header('Content-Type: application/json');
echo json_encode($messages);
?>