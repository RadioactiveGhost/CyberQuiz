<?php
include 'credenciais.php';
$conn = new mysqli($servername, $username, $password, $dbname);



echo "<!DOCTYPE html><html><head><link rel='stylesheet' href='css/admin.css'><title>AAA</title></head><body>";
// Check connection
if ($conn->connect_error) {
    echo "<header id='header' class='header' style='background: red !important'>error</header>";
    die("Connection failed: " . $conn->connect_error);
} else {
    echo "<header id='header' class='header' style='background: green !important; color: green !important'>success</header>";
    mostrarBD($conn);
}

function mostrarBD($conn) {
    $sql = "SELECT  ID_UTILIZADOR, PRIMEIRO_NOME, ULTIMO_NOME, EMAIL, TEMPO, SUGESTAO, RESULTADO_FINAL FROM utilizadores";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // output data of each row
        echo "<div><h2>Registos</h2>";
        echo "<table>";
        echo "<tr><th>ID</th><th>Nome</th><th>Email</th><th>Tempo</th><th>Sugestão</th><th>Resultado Final</th><th colspan=10>Pontos</th></tr>";
        while($row = $result->fetch_assoc()) {
            echo "<tr>";
            echo "<td>" . $row["ID_UTILIZADOR"]. "</td> <td>" . $row["PRIMEIRO_NOME"]. " " . $row["ULTIMO_NOME"]. "</td><td>" . $row["EMAIL"] . "</td><td>";
            $time = round($row["TEMPO"]/1000);
            if ( $time < 60) {
                echo $time . "s";
            } else if ($time < 3600) {
                echo floor($time/60) . "min";
                if ($time%60 > 0) {
                    echo ", " . $time%60 . "s";
                }
            } else if ($time < 216000) {
                $hour = floor($time/3600);
                $minute = ($time%3600);
                echo $hour. "h";
                if (floor($minute/60) > 0) {
                    echo ", " . floor($minute/60) . "min";
                }
                if ($minute%60 > 0) {
                    echo ", " . $minute%60 . "s";
                }
            } else {
                echo "Tempo a mais";
            }
            echo "</td><td>" . $row["SUGESTAO"] . "</td><td>" . $row["RESULTADO_FINAL"] . "</td>";
            $sql2 = "SELECT  	ID_UTILIZADOR_NIVEL, VALOR_NIVEL, ID_UTILIZADOR FROM utilizadores_nivel WHERE ID_UTILIZADOR=" . $row["ID_UTILIZADOR"];
            $result2 = $conn->query($sql2);
            if ($result2->num_rows > 0) {
                while($row2 = $result2->fetch_assoc()) {
                    echo "<td>" . $row2["VALOR_NIVEL"] . "</td>";
                }
            }
            echo "</tr>";
        }
        echo "</table>";
    } else {
        echo "0 results";
    }
    echo "</div></body></html>";
}
$conn->close();
?> 