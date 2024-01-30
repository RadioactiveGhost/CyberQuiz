<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel='stylesheet' href='css/admin.css'>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels@2.2.0"></script>
    <title>CyberQuiz - Resultados</title>
</head>
<body>

<?php
include 'credenciais.php';
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    echo "<header id='header' class='header' style='background: red !important'>error</header>";
    die("Connection failed: " . $conn->connect_error);
} else {
    echo "<header id='header' class='header' style='background: green !important; color: green !important'>success</header>";
    echo "<h2>CyberQuiz - Participantes</h2>";
    contarParticipantes($conn);
    contarMediaTempo($conn);
    mostrarBD($conn);
}

function mostrarBD($conn) {
    $sql = "SELECT  ID_UTILIZADOR, PRIMEIRO_NOME, ULTIMO_NOME, EMAIL, TEMPO, SUGESTAO, RESULTADO_FINAL FROM utilizadores";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // output data of each row
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
}

function contarParticipantes($conn) {
    $sql = "SELECT COUNT(*) AS TOTAL FROM UTILIZADORES";
    $result = $conn->query($sql);
    $total = $result->fetch_assoc();
    echo "<h3>Número total de Participantes: ". $total['TOTAL'] . "</h3>";
}

function contarMediaTempo($conn) {
    $sql = "SELECT AVG(TEMPO) AS TOTAL FROM UTILIZADORES";
    $result = $conn->query($sql);
    $total = $result->fetch_assoc();
    $time = round($total['TOTAL']/1000);
    echo "<h3>Tempo médio por quiz: ";
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
    echo "</h3>";
}
//$conn->close();

?> 

<div style="max-width:70%;margin:auto;">
    <canvas id="myChart"></canvas>
</div>

<script>
const ctx = document.getElementById('myChart');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Nivel 1 - Pesquisa', 'Nivel 2 - Password', 'Nivel 3 - SMS', 'Nivel 4 - Login Rede Social', 'Nivel 5 - Email Finanças', 'Nivel 6 - Whatsapp', 'Nivel 7 - Geomic', 'Nivel 8 - UAC', 'Nivel 9 - Wi-Fi', 'Nivel 10 - Email Natalina'],
        datasets: [{
            label: '#% de aprovação',
            data: [
                <?php $sql = "SELECT AVG(VALOR_NIVEL) AS TOTAL FROM UTILIZADORES_NIVEL WHERE NUM_NIVEL=1";$result = $conn->query($sql);$total = $result->fetch_assoc();echo $total['TOTAL']?>*100,
                <?php $sql = "SELECT AVG(VALOR_NIVEL) AS TOTAL FROM UTILIZADORES_NIVEL WHERE NUM_NIVEL=2";$result = $conn->query($sql);$total = $result->fetch_assoc();echo $total['TOTAL']?>*100,
                <?php $sql = "SELECT AVG(VALOR_NIVEL) AS TOTAL FROM UTILIZADORES_NIVEL WHERE NUM_NIVEL=3";$result = $conn->query($sql);$total = $result->fetch_assoc();echo $total['TOTAL']?>*100,
                <?php $sql = "SELECT AVG(VALOR_NIVEL) AS TOTAL FROM UTILIZADORES_NIVEL WHERE NUM_NIVEL=4";$result = $conn->query($sql);$total = $result->fetch_assoc();echo $total['TOTAL']?>*100,
                <?php $sql = "SELECT AVG(VALOR_NIVEL) AS TOTAL FROM UTILIZADORES_NIVEL WHERE NUM_NIVEL=5";$result = $conn->query($sql);$total = $result->fetch_assoc();echo $total['TOTAL']?>*100,
                <?php $sql = "SELECT AVG(VALOR_NIVEL) AS TOTAL FROM UTILIZADORES_NIVEL WHERE NUM_NIVEL=6";$result = $conn->query($sql);$total = $result->fetch_assoc();echo $total['TOTAL']?>*100,
                <?php $sql = "SELECT AVG(VALOR_NIVEL) AS TOTAL FROM UTILIZADORES_NIVEL WHERE NUM_NIVEL=7";$result = $conn->query($sql);$total = $result->fetch_assoc();echo $total['TOTAL']?>*100,
                <?php $sql = "SELECT AVG(VALOR_NIVEL) AS TOTAL FROM UTILIZADORES_NIVEL WHERE NUM_NIVEL=8";$result = $conn->query($sql);$total = $result->fetch_assoc();echo $total['TOTAL']?>*100,
                <?php $sql = "SELECT AVG(VALOR_NIVEL) AS TOTAL FROM UTILIZADORES_NIVEL WHERE NUM_NIVEL=9";$result = $conn->query($sql);$total = $result->fetch_assoc();echo $total['TOTAL']?>*100,
                <?php $sql = "SELECT AVG(VALOR_NIVEL) AS TOTAL FROM UTILIZADORES_NIVEL WHERE NUM_NIVEL=10";$result = $conn->query($sql);$total = $result->fetch_assoc();echo $total['TOTAL']?>*100,
            ],
        borderWidth: 1
        }]
    },
    options: {
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Taxa de Aprovação por Nível'
            }
        },
        scales: {
            y: {
                beginAtZero: true,
            }
        }
    }
});
</script>

</body>
</html>