<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get and validate form data
    $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars(trim($_POST['message']));

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die("Invalid email format.");
    }

    // Your email address
    $to = "kolodych@hotmail.com";
    $subject = "Kolodych.com - New Message from Ask me anything?";

    // Email content
    $email_content = "Email: $email\n\n";
    $email_content .= "Message:\n$message\n";

    // Email headers
    $headers = "From: no-reply@kolodych.com\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Send the email
    if (mail($to, $subject, $email_content, $headers)) {
        header("Location: https://kolodych.com?success=1");
        exit;
    } else {
        header("Location: https://kolodych.com?error=1");
        exit;
    }
}
?>
