<?php 
header ('Access-ControlAllow-Origin: http://localhost:3000');
header ('Access-ControlAllow-Origin: GET, POST, OPTIONS, PUT, DELETE');
header ('Access-ControlAllow-Origin: Content-Type, Access-Control-Allow-Headers, X-Requested-With');

$con = mysqli_connect('localhost', 'admin', 'admin', 'wizzard');
