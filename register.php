<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "cyberquiz";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";

$nomeP = $_POST['nomeP'];
$nomeS = $_POST['nomeS'];
$email = $_POST['email'];

$sql = "INSERT INTO utilizadores (PRIMEIRO_NOME, ULTIMO_NOME, EMAIL, TEMPO, SUGESTAO, RESULTADO_FINAL) VALUES ('$nomeP', '$nomeS', '$email', 0, 'Teste', 0)";
if ($conn->query($sql) === TRUE ) {
    $lastid = $conn->insert_id;
    setcookie("lastid", $lastid, time() + 86400, "/");
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
echo "";
$conn->close();
header('Location: fin.html');
die();
?>