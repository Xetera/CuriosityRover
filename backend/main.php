<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
include_once "Rover.php";

$api = new Rover();

$ALL_HEADERS = getallheaders();
if (!isset($ALL_HEADERS['Camera'])) die('Camera not found');
else if (!isset($ALL_HEADERS['Page'])) die('Page not found');

$camera = $ALL_HEADERS['Camera'];
$page = $ALL_HEADERS['Page'];
echo $api->getPictures($camera, $page);

