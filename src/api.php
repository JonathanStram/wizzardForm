<?php 
    header ('Access-ControlAllow-Origin: http://localhost:3000');
    $con=mysqli_connect('localhost', 'admin', 'admin', 'wizzard');

    if (isset($_REQUEST['name'])) {
        $qr=mysqli_query($con, "select * from users where name like '%".$_REQUEST['name']."%'");
    } else {
        $qr=mysqli_query($con, "select * from users");
    }

    $array = array();

    while ($row = mysqli_fetch_assoc($qy)){
        array_push($array, $row);
    }

    //print_r($array)
    echo json_encode($array);