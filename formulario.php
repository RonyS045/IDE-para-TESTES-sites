<?php
// Configurações de email
$to = "ronys.sap@gmail.com"; // Substitua pelo seu email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= "From: noreply@seudominio.com" . "\r\n";

// Recebe os dados do formulário
$name = $_POST['name'] ?? '';
$email = $_POST['email'] ?? '';
$message = $_POST['message'] ?? '';

// Validação básica
if (empty($name) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode(['error' => 'Todos os campos são obrigatórios']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Email inválido']);
    exit;
}

// Prepara o corpo do email
$subject = "Nova mensagem de contato de $name";
$body = "
<html>
<head>
    <title>Nova mensagem de contato</title>
</head>
<body>
    <h2>Nova mensagem de contato recebida</h2>
    <p><strong>Nome:</strong> $name</p>
    <p><strong>Email:</strong> $email</p>
    <p><strong>Mensagem:</strong></p>
    <p>$message</p>
</body>
</html>
";

// Envia o email
try {
    if (mail($to, $subject, $body, $headers)) {
        http_response_code(200);
        echo json_encode(['success' => true, 'message' => 'Mensagem enviada com sucesso']);
    } else {
        throw new Exception('Erro ao enviar email');
    }
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Erro ao processar sua mensagem']);
}
?>