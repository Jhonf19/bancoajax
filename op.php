<?php
include('db.php');
//$obj = json_decode($json);
    if ($_POST['eda']>=18) {

      // $r = array(
      //   "msg"=>"entra",
      //   "nom"=>"jhon",
      //   "pas"=>"333"
      // );

      $query = "SELECT * FROM habitaciones";
       $w = mysqli_query($conn, $query);
       $r = mysqli_fetch_all($w,MYSQLI_ASSOC);
    }else {
      $r = ["msg"=>"no entra","msg3"=>"no entra3"];
    }
    echo json_encode($r);

 ?>
