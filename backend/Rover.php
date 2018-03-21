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
    /**
     * Base endpoint for requests
     * @var string
     */
    private $endpoint = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?';

    /**
     * Returns a formatted endpoint
     * @param string $camera
     * @param string $page
     * @return string
     */
    private function formatEndpoint(string $camera, string $page): string {
        $endpoint = $this->endpoint .'sol=1000&page='. $page  . '&api_key='. ROVER_TOKEN;
        return $endpoint;
    }

    /**
     * Fetches json response from NASA
     * @param string $camera
     * @param string $page
     * @return bool|string
     */
    public function getPictures(string $camera, string $page): string {
        $endpoint = $this->formatEndpoint($camera, $page);
        $response = file_get_contents($endpoint);
        return $response;
    }
}