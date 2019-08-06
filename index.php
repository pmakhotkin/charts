<!doctype html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>INBOUND/OUTBOUND DASHBOARD</title>
    <link rel="stylesheet" href="css/bootstrap.css">
    <link rel="stylesheet" href="css/main.css">
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <?php
    require_once './php/con_db.php';
    require_once './php/charts.php'
    ?>
</head>
<body>
<script>
    let data_out_cbm = JSON.parse('<?php echo $out_cbm_arr;?>');
    let data_out_truck = JSON.parse('<?php echo $out_truck_arr;?>');
    let data_out_sds_cp = JSON.parse('<?php echo $out_sds_cp?>');
    let data_out_truck_sds_cp = [];
    let arrsum = data_out_truck_sds_cp.concat(data_out_truck, data_out_sds_cp);
    let data_vbc = JSON.parse('<?php echo $out_vbc?>');
    let data_vbp = JSON.parse('<?php echo $out_vbp?>');
    let data_vbcs = JSON.parse('<?php echo $out_vbcs?>');
    let data_ldexp = JSON.parse('<?php echo $out_ldexp?>');
    let data_inb_cbm = JSON.parse('<?php echo $inb_cbm?>');
    let data_inb_tr = JSON.parse('<?php echo $inb_truck?>');
    let data_inbp = JSON.parse('<?php echo $inbp?>');
    let data_inbpq = JSON.parse('<?php echo $inbpq?>');
</script>
<nav class="navbar navbar-dark logo">
    <a class="navbar-brand">
        <img src="img/logo-ss-sds.png" width="300" height="200" alt="">
    </a>
    <h2 class="title">INBOUND/OUTBOUND DASHBOARD</h2>
</nav>
<div class="row">
    <div class="col-md-6 p-3">
        <h2 class="text-sm-center header">Daily Outbound</h2>
        <h3 class="text-sm-center part-header">OUTBOUND (CE)</h3>
        <div class="row">
            <div class="col-md-6">
                <h4 class="text-sm-center chart-header">Volume (CBM)</h4>
                <canvas class="charts" id="v_cbm"></canvas>
            </div>
            <div class="col-md-6">
                <h4 class="text-sm-center chart-header">Volume (TRUCK)</h4>
                <canvas class="charts" id="v_truck"></canvas>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 p-3">
                <h4 class="text-sm-center chart-header-type2">Volume by city (CBM)</h4>
                <canvas class="charts" id="vbct_cbm"></canvas>
            </div>
            <div class="col-md-6 p-3">
                <h4 class="text-sm-center chart-header-type2">Volume by product (CBM)</h4>
                <canvas class="charts" id="vbp_cbm"></canvas>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <h4 class="text-sm-center chart-header-type3">Volume by customer (CBM)</h4>
                <canvas class="charts" id="vbc_cbm"></canvas>
            </div>
            <div class="col-md-6">
                <h4 class="text-sm-center chart-header-type3">Volume by product (TRUCK)</h4>
                <canvas class="charts" id="vbp_truck"></canvas>
            </div>
        </div>
    </div>
    <div class="col-md-6 p-3">
        <h2 class="text-sm-center header">Daily Inbound</h2>
        <h3 class="text-sm-center part-header">INBOUND</h3>

        <div class="row">
            <div class="col-md-6">
                <h4 class="text-sm-center chart-header">Volume (CBM)</h4>
                <canvas class="charts" id="vol_cbm"></canvas>
            </div>
            <div class="col-md-6">
                <h4 class="text-sm-center chart-header">Volume (TRUCK)</h4>
                <canvas class="charts" id="vol_truck"></canvas>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 p-3">
                <h4 class="text-sm-center chart-header-type2">Volume by product (CBM)</h4>
                <canvas class="charts" id="vbct_cbm2"></canvas>
            </div>
            <div class="col-md-6 p-3">
                <h4 class="text-sm-center chart-header-type2">Volume by product (QTY)</h4>
                <canvas class="charts" id="vbpr_cbm"></canvas>
            </div>
        </div>
    </div>
</div>
</body>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.js"></script>
<script src="js/charts.js"></script>
</html>