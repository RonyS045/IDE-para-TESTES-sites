<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $message = htmlspecialchars($_POST["message"]);

    // Aqui você pode adicionar a lógica de enviar um email, salvar no banco de dados etc.
    // Exemplo de enviar email:
    $to = "email@example.com";
    $subject = "Nova mensagem de contato";
    $body = "Nome: $name\nEmail: $email\nMensagem:\n$message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "Mensagem enviada com sucesso!";
    } else {
        echo "Erro ao enviar mensagem.";
    }
}
?>
