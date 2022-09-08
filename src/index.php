<?php 
    /* header("Access-Control-Allow-Origin: http://localhost:3000");   */
    header("Access-Control-Allow-Credentials:true");
    header('Content-type: application/json');  
    session_start();
    echo json_encode("hello world what's good"); 
?>