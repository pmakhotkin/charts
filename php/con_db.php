<?php
$host = 'localhost'; // адрес сервера
$database1 = 'outbound';
$database2 = 'inbound';// имя базы данных
$user = 'vlad'; // имя пользователя
$password = '1'; // пароль

$link = mysqli_connect($host, $user, $password, $database1)
or die("Ошибка подключения к outbound DB" . mysqli_error($link));
mysqli_query ($link,"set_client='utf8'");
mysqli_query ($link,"set character_set_results='utf8'");
mysqli_query ($link,"set collation_connection='utf8_general_ci'");
mysqli_query ($link,"SET NAMES utf8");

// Запрос данных из outbound_cbm

$req_out_cbm = 'SELECT `Volume` FROM outbound.outbound_cbm WHERE otbound_cbm_id IN (1,2)  ORDER BY `outbound_cbm`.`otbound_cbm_id`';
$result_1 = mysqli_query($link, $req_out_cbm) or die("Ошибка получения данных из таблицы outbound_cbm" . mysqli_error($link));

// Запрос данных из outbound_truck

$req_out_tr = 'SELECT `TTL` FROM outbound.outbound_truck WHERE outbound_truck_id IN (1,2)  ORDER BY `outbound_truck`.`outbound_truck_id`';
$result_2 = mysqli_query($link, $req_out_tr) or die("Ошибка получения данных из таблицы outbound_truck" . mysqli_error($link));

// Запрос данных из outbound_sds&c.p

$req_out_sds_cp = 'SELECT `TTL` FROM outbound.`outbound_sds&c.p` WHERE `outbound_sds&c.p_id` IN (1,2)  ORDER BY `outbound_sds&c.p`.`outbound_sds&c.p_id`';
$result_3 = mysqli_query($link, $req_out_sds_cp) or die("Ошибка получения данных из таблицы outbound_sds&c.p" . mysqli_error($link));

// Запрос данных из vbc

$req_vbc = 'SELECT `CBM` FROM outbound.`vbc` WHERE `No` IN (1,2,3,4,5,6,7)  ORDER BY `outbound`.vbc.No';
$result_4 = mysqli_query($link, $req_vbc) or die("Ошибка получения данных из таблицы vbc" . mysqli_error($link));

// Запрос данных из vbp

$req_vbp = 'SELECT `CBM` FROM outbound.`vbp` WHERE vbp_id IN (1,2,3,4,5,6,7)  ORDER BY `outbound`.vbp.vbp_id';
$result_5 = mysqli_query($link, $req_vbp) or die("Ошибка получения данных из таблицы vbp" . mysqli_error($link));

// Запрос данных из vbcs

$req_vbcs = 'SELECT `CBM` FROM outbound.`vbcs` WHERE vbcs_id IN (1,2,3,4,5,6,7)  ORDER BY `outbound`.vbcs.vbcs_id';
$result_6 = mysqli_query($link, $req_vbcs) or die("Ошибка получения данных из таблицы vbcs" . mysqli_error($link));

// Запрос данных из outbound_sds&c.p

$req_ldexp = 'SELECT `TRUCK` FROM outbound.`outbound_ld&exp` WHERE `outbound_ld&exp`.`outbound_ld&exp_id` IN (1,2)  ORDER BY `outbound`.`outbound_ld&exp`.`outbound_ld&exp_id`';
$result_7 = mysqli_query($link, $req_ldexp) or die("Ошибка получения данных из таблицы outbound_ld&exp" . mysqli_error($link));


/*Запросы из inbound */
$link = mysqli_connect($host, $user, $password, $database2)
or die("Ошибка подключения к inbound DB" . mysqli_error($link));

// Запрос данных из ibound_cbm

$req_inb_cbm = 'SELECT `TTL` FROM inbound.`inbound_cbm` WHERE `inbound_cbm`.ibound_cbm_id IN (1,2)  ORDER BY `inbound`.`inbound_cbm`.`ibound_cbm_id`';
$result_8 = mysqli_query($link, $req_inb_cbm) or die("Ошибка получения данных из таблицы inbound_cbm" . mysqli_error($link));

// Запрос данных из ibound_truck

$req_inb_cbm = 'SELECT `TTL` FROM inbound.`inb_truck` WHERE `inb_truck`.inb_truck_id IN (1,2)  ORDER BY `inbound`.`inb_truck`.`inb_truck_id`';
$result_9 = mysqli_query($link, $req_inb_cbm) or die("Ошибка получения данных из таблицы inb_truck" . mysqli_error($link));

// Запрос данных из inbp

$req_inbp = 'SELECT `CBM` FROM inbound.`inbp` WHERE `inbp`.inbp_id IN (1,2,3,4,5,6,7)  ORDER BY `inbound`.`inbp`.`inbp_id`';
$result_10 = mysqli_query($link, $req_inbp) or die("Ошибка получения данных из таблицы inbp" . mysqli_error($link));

// Запрос данных из inbpq

$req_inbpq = 'SELECT `QTY` FROM inbound.`inbpq` WHERE `inbpq`.inbpq_id IN (1,2,3,4,5,6,7)  ORDER BY `inbound`.`inbpq`.`inbpq_id`';
$result_11 = mysqli_query($link, $req_inbpq) or die("Ошибка получения данных из таблицы inbp" . mysqli_error($link));
