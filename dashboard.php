<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel='stylesheet' href='css/admin.css'>
    <link rel="stylesheet" href="assets/css/fontawesome.css">
    <link rel="stylesheet" href="assets/css/brands.css">
    <link rel="stylesheet" href="assets/css/solid.css">
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels@2.0.0"></script>
    <title>CyberQuiz - Resultados</title>
</head>
<?php
    include 'credenciais.php';
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        echo "<header id='headere'>Erro na ligação à base de dados</header>";
        die("Connection failed: " . $conn->connect_error);
    } else {
        echo "<header id='headerc'>Ligação à base de dados efetuada com sucesso</header>";
    }

    function mostrarBD($conn) {
        $sql = "SELECT  ID_UTILIZADOR, PRIMEIRO_NOME, ULTIMO_NOME, EMAIL, TEMPO, SUGESTAO, RESULTADO_FINAL FROM utilizadores";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            // output data of each row
            echo "<table>";
            echo "<thead><tr><th rowspan=2>ID</th><th rowspan=2>Nome</th><th rowspan=2>Email</th><th rowspan=2>Tempo</th><th rowspan=2>Sugestão</th><th rowspan=2>Resultado Final</th><th colspan=10>Desafios</th></tr><tr><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th><th>10</th></tr></thead>";
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
                echo "</td><td>" . $row["SUGESTAO"] . "</td><td class='center'>" . $row["RESULTADO_FINAL"] . "</td>";
                $sql2 = "SELECT  	ID_UTILIZADOR_NIVEL, VALOR_NIVEL, ID_UTILIZADOR FROM utilizadores_niveis WHERE ID_UTILIZADOR=" . $row["ID_UTILIZADOR"];
                $result2 = $conn->query($sql2);
                if ($result2->num_rows > 0) {
                    while($row2 = $result2->fetch_assoc()) {
                        if ($row2["VALOR_NIVEL"] == 1) {
                            echo "<td class='center'><i class='fa-solid fa-check'></i></td>";
                        } else if ($row2["VALOR_NIVEL"] == 0) {
                            echo "<td class='center'><i class='fa-solid fa-xmark'></i></td>";
                        } else {
                            echo "<td class='center'>N/A</td>";
                        }
                        //echo "<td>" . $row2["VALOR_NIVEL"] . "</td>";
                    }
                }
                echo "</tr>";
            }
            echo "</table>";
        } else {
            echo "0 results";
        }
    }
    $quant = 0;
    function contarParticipantes($conn) {
        $sql = "SELECT COUNT(*) AS TOTAL FROM UTILIZADORES";
        $result = $conn->query($sql);
        $total = $result->fetch_assoc();
        $quant = $total['TOTAL'];
        echo $quant;
    }

    function contarMediaTempo($conn) {
        $sql = "SELECT AVG(TEMPO) AS TOTAL FROM UTILIZADORES";
        $result = $conn->query($sql);
        $total = $result->fetch_assoc();
        $time = round($total['TOTAL']/1000);
        
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
    }

?>
<body>
<h2>CyberQuiz - Participantes</h2>
<div id="warning" onclick="location.reload();">Atualize a página</div>
<div id ="charts">
    <div>
        <canvas id="taxaGeral"></canvas>
    </div>
    <div>
        <canvas id="taxaNivel"></canvas>
    </div>
</div>
<div id="contagens">
    <div>
        <p>PARTICIPANTES<br><br></p>
        <?php
        contarParticipantes($conn); ?>
    </div><div>
        <p>MÉDIA DE TEMPO<br><br></p>
        <?php contarMediaTempo($conn);
        ?>
    </div>
</div>

<div id="table">
    <?php mostrarBD($conn);?>
</div>

<script>

window.onresize = function () {
    document.getElementById('warning').style.display = 'block';
}

const ctx = document.getElementById('taxaNivel');
const ctx2 = document.getElementById('taxaGeral');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Nivel 1 - Password', 'Nivel 2 - Pesquisa', 'Nivel 3 - SMS', 'Nivel 4 - Login Rede Social', 'Nivel 5 - Email Finanças', 'Nivel 6 - Whatsapp', 'Nivel 7 - Geomic', 'Nivel 8 - UAC', 'Nivel 9 - Wi-Fi', 'Nivel 10 - Email Natalina'],
        datasets: [{
                label: '% de aprovação',
                data: [
                <?php $sql = "SELECT AVG(VALOR_NIVEL) AS TOTAL FROM utilizadores_niveis WHERE NUM_NIVEL=1";$result = $conn->query($sql);$total = $result->fetch_assoc();echo $total['TOTAL']?>*100,
                <?php $sql = "SELECT AVG(VALOR_NIVEL) AS TOTAL FROM utilizadores_niveis WHERE NUM_NIVEL=2";$result = $conn->query($sql);$total = $result->fetch_assoc();echo $total['TOTAL']?>*100,
                <?php $sql = "SELECT AVG(VALOR_NIVEL) AS TOTAL FROM utilizadores_niveis WHERE NUM_NIVEL=3";$result = $conn->query($sql);$total = $result->fetch_assoc();echo $total['TOTAL']?>*100,
                <?php $sql = "SELECT AVG(VALOR_NIVEL) AS TOTAL FROM utilizadores_niveis WHERE NUM_NIVEL=4";$result = $conn->query($sql);$total = $result->fetch_assoc();echo $total['TOTAL']?>*100,
                <?php $sql = "SELECT AVG(VALOR_NIVEL) AS TOTAL FROM utilizadores_niveis WHERE NUM_NIVEL=5";$result = $conn->query($sql);$total = $result->fetch_assoc();echo $total['TOTAL']?>*100,
                <?php $sql = "SELECT AVG(VALOR_NIVEL) AS TOTAL FROM utilizadores_niveis WHERE NUM_NIVEL=6";$result = $conn->query($sql);$total = $result->fetch_assoc();echo $total['TOTAL']?>*100,
                <?php $sql = "SELECT AVG(VALOR_NIVEL) AS TOTAL FROM utilizadores_niveis WHERE NUM_NIVEL=7";$result = $conn->query($sql);$total = $result->fetch_assoc();echo $total['TOTAL']?>*100,
                <?php $sql = "SELECT AVG(VALOR_NIVEL) AS TOTAL FROM utilizadores_niveis WHERE NUM_NIVEL=8";$result = $conn->query($sql);$total = $result->fetch_assoc();echo $total['TOTAL']?>*100,
                <?php $sql = "SELECT AVG(VALOR_NIVEL) AS TOTAL FROM utilizadores_niveis WHERE NUM_NIVEL=9";$result = $conn->query($sql);$total = $result->fetch_assoc();echo $total['TOTAL']?>*100,
                <?php $sql = "SELECT AVG(VALOR_NIVEL) AS TOTAL FROM utilizadores_niveis WHERE NUM_NIVEL=10";$result = $conn->query($sql);$total = $result->fetch_assoc();echo $total['TOTAL']?>*100,
            ],
            backgroundColor: ['#CD5C5Cbf', '#ADD8E6bf', '#98FB98bf', '#4682B4bf', '#0f3866bf', '#c0c0c0bf', '#696969bf', '#87CEEBbf', '#94e8bfbf', '#FFD700bf'],
            barPercentage: 1
        }]
    },
    options: {
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: 'Taxa de Aprovação por Nível',
                font: {
                    size: 24
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
            }
        }
    }
});

new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['Muito Mau', 'Mau', 'Bom', 'Muito Bom', 'Excelente'],
        datasets: [{
                label: '# de aprovação',
                data: [
                <?php $sql = "SELECT COUNT(RESULTADO_FINAL) AS TOTAL FROM UTILIZADORES WHERE RESULTADO_FINAL=1 OR RESULTADO_FINAL=2";$result = $conn->query($sql);$total = $result->fetch_assoc();echo $total['TOTAL']?>,
                <?php $sql = "SELECT COUNT(RESULTADO_FINAL) AS TOTAL FROM UTILIZADORES WHERE RESULTADO_FINAL=3 OR RESULTADO_FINAL=4";$result = $conn->query($sql);$total = $result->fetch_assoc();echo $total['TOTAL']?>,
                <?php $sql = "SELECT COUNT(RESULTADO_FINAL) AS TOTAL FROM UTILIZADORES WHERE RESULTADO_FINAL=5 OR RESULTADO_FINAL=6";$result = $conn->query($sql);$total = $result->fetch_assoc();echo $total['TOTAL']?>,
                <?php $sql = "SELECT COUNT(RESULTADO_FINAL) AS TOTAL FROM UTILIZADORES WHERE RESULTADO_FINAL=7 OR RESULTADO_FINAL=8";$result = $conn->query($sql);$total = $result->fetch_assoc();echo $total['TOTAL']?>,
                <?php $sql = "SELECT COUNT(RESULTADO_FINAL) AS TOTAL FROM UTILIZADORES WHERE RESULTADO_FINAL=9 OR RESULTADO_FINAL=10";$result = $conn->query($sql);$total = $result->fetch_assoc();echo $total['TOTAL']?>,
            ],
            backgroundColor: ['#FF0000bf','#FFA500bf','#FFFF00bf','#90EE90bf','#008000bf']
        }]
    },
    options: {
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: 'Taxa de Aprovação Geral',
                font: {
                    size: 24
                }
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
<footer>
    <img src="assets/img/transmontana.png" alt="Globalvia">
</footer>
</body>
</html>