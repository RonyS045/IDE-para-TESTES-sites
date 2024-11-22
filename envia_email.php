<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $mensagem = $_POST['mensagem'];

    $para = 'ronys.sap@gmai.com';
    $assunto = 'Nova mensagem do formulário de contato';
    $corpo = "Nome: $nome\nEmail: $email\n\nMensagem:\n$mensagem";

    $headers = "From: $email";

    if (mail($para, $assunto, $corpo, $headers)) {
        echo "Email enviado com sucesso!";
    } else {
        echo "Falha no envio do email.";
    }
} else {
    echo "Método de requisição inválido.";
}
?>
