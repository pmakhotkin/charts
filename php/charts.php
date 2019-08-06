<?php
require_once 'con_db.php';

// Массив чисел для outbound_cbm

$vol = array();
while ($row = mysqli_fetch_row($result_1)) {
    $vol[] = $row;
}
$out_cbm_arr = json_encode($vol);

// Массив чисел для outbound_truck

$vol2 = array();
while ($row = mysqli_fetch_row($result_2)) {
    $vol2[] = $row;
}
$out_truck_arr = json_encode($vol2);

// Массив чисел для outbound_sds&c.p

$vol3 = array();
while ($row = mysqli_fetch_row($result_3)) {
    $vol3[] = $row;
}
$out_sds_cp = json_encode($vol3);


// Массив чисел для outbound_vbc

$vol4 = array();
while ($row = mysqli_fetch_row($result_4)) {
    $vol4[] = $row;
}
$out_vbc = json_encode($vol4);


// Массив чисел для outbound_vbp

$vol5 = array();
while ($row = mysqli_fetch_row($result_5)) {
    $vol5[] = $row;
}
$out_vbp = json_encode($vol5);

// Массив чисел для outbound_vbcs

$vol6 = array();
while ($row = mysqli_fetch_row($result_6)) {
    $vol6[] = $row;
}
$out_vbcs = json_encode($vol6);

// Массив чисел для outbound_ld&exp

$vol7 = array();
while ($row = mysqli_fetch_row($result_7)) {
    $vol7[] = $row;
}
$out_ldexp = json_encode($vol7);

/*Массивы из inbound*/

// Массив чисел из inbound_cbm

$vol8 = array();
while ($row = mysqli_fetch_row($result_8)) {
    $vol8[] = $row;
}
$inb_cbm = json_encode($vol8);

// Массив чисел из inbound_truck

$vol9 = array();
while ($row = mysqli_fetch_row($result_9)) {
    $vol9[] = $row;
}
$inb_truck = json_encode($vol9);

// Массив чисел из inbp

$vol10 = array();
while ($row = mysqli_fetch_row($result_10)) {
    $vol10[] = $row;
}
$inbp = json_encode($vol10);

// Массив чисел из inbpq

$vol11 = array();
while ($row = mysqli_fetch_row($result_11)) {
    $vol11[] = $row;
}
$inbpq = json_encode($vol11);
