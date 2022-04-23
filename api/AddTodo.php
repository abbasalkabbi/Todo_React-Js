<?php
//include filles
require_once 'config.php';
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);
if ($_POST){
    $context=$_POST['context'];
    $insert_todo=mysqli_query($conn,"INSERT INTO list (context,status) VALUES ('$context',0)");
    if($insert_todo){
        echo json_encode(['status'=>true,'message'=>'ok']);
    }

}

?>