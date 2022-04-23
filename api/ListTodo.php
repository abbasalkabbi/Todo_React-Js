<?php
//include filles
require_once 'config.php';
$data=mysqli_query($conn,"SELECT * FROM list");
$list_data= mysqli_fetch_all($data,MYSQLI_ASSOC);
echo json_encode($list_data)

?>