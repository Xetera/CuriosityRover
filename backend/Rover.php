<?php
/**
 * Created by PhpStorm.
 * Date: 3/20/2018
 * Time: 11:18 AM
 */
header("Access-Control-Allow-Origin: http://localhost:4200");
include "config.php";

abstract class Cameras {
    const FHAZ    = 0;
    const RHAZ    = 1;
    const MAST    = 2;
    const CHEMCAM = 3;
    const MAHLI   = 4;
    const MARDI   = 5;
    const NAVCAM  = 6;
    const PANCAM  = 7;
    const MINITES = 8;
}
class Rover {
    private $pictures;
    private $endpoint = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=';

    private function formatEndpoint($camera){
        return $this->endpoint . $camera . ROVER_TOKEN;
    }

    private function fetchPictureURL($object){
        //return $object.
    }

    public function getPictures($camera){
        $endpoint = $this->formatEndpoint($camera);
        $response = file_get_contents($endpoint);
        return $response;
    }
}