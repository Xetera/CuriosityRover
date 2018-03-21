<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
include_once "Rover.php";

$api = new Rover();


if (isset($_GET['camera'])){
    exit($api->getPictures($_GET['camera']));
}
