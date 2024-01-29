<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "cyberquiz";
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";

$nomeP = $_POST['nomeP'];
$nomeS = $_POST['nomeS'];
$email = $_POST['email'];
$tempo = $_POST['tempo'];
$sugestao = $_POST['sugestao'];
$pontos = $_POST['pontos'];
/*
$nivel1 = $_POST['nivel1'];
$nivel2 = $_POST['nivel2'];
$nivel3 = $_POST['nivel3'];
$nivel4 = $_POST['nivel4'];
$nivel5 = $_POST['nivel5'];
$nivel6 = $_POST['nivel6'];
$nivel7 = $_POST['nivel7'];
$nivel8 = $_POST['nivel8'];
$nivel9 = $_POST['nivel9'];
$nivel10 = $_POST['nivel10'];
*/

$niveis = array($_POST['nivel1'],$_POST['nivel2'],$_POST['nivel3'],$_POST['nivel4'],$_POST['nivel5'],$_POST['nivel6'],$_POST['nivel7'],$_POST['nivel8'],$_POST['nivel9'],$_POST['nivel10']);

$sql = "INSERT INTO utilizadores (PRIMEIRO_NOME, ULTIMO_NOME, EMAIL, TEMPO, SUGESTAO, RESULTADO_FINAL) VALUES ('$nomeP', '$nomeS', '$email', '$tempo', '$sugestao', '$pontos')";
if ($conn->query($sql) === TRUE ) {
    echo "Sucesso";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$lastid = $conn->insert_id;
$i = 1;
foreach ($niveis as $n) {
    $sql = "INSERT INTO utilizadores_nivel (NUM_NIVEL, VALOR_NIVEL, ID_UTILIZADOR) VALUES ('$i', '$n', '$lastid')";
    $i++;
    $conn->query($sql);
}


$conn->close();
header('Location: final.html');
die();
?>