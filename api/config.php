<?php
$host='localhost';
$username='root';
$pass='';
$db='Todo';
$conn= mysqli_connect($host,$username,$pass,$db);
if(!$conn){
    echo "Error". mysqli_connect_error();
}

?>