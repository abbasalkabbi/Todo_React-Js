<?php
//include filles
require_once 'config.php';
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);
if ($_POST){
    $id=$_POST['id'];
    $delete=mysqli_query($conn,"DELETE FROM list WHERE id=$id");
    if($delete){
        echo "Delete";
    }
}

?>