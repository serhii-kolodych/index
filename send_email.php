<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Your email address
    $to = "<!-- YOUR_EMAIL_GOES_HERE -->";

    // Subject of the email
    $subject = "Kolodych.com - New Message from Ask me anything?";

    // Email content
    $email_content = "Email: $email\n\n";
    $email_content .= "Message:\n$message\n";

    // Email headers
    $headers = "From: $email";

    // Send the email
    if (mail($to, $subject, $email_content, $headers)) {
        echo "<html><body>";
        echo "<h3>Thank you! Your message has been sent.</h3>";
        echo "<p>You will be redirected shortly...</p>";
        echo '<meta http-equiv="refresh" content="3;url=https://kolodych.com">';
        echo "</body></html>";
    } else {
        echo "<html><body>";
        echo "<h3>Oops! Something went wrong, and we couldn't send your message.</h3>";
        echo "<p>You will be redirected shortly...</p>";
        echo '<meta http-equiv="refresh" content="3;url=https://kolodych.com">';
        echo "</body></html>";
    }
}
?>
