<?php
//$obj = json_decode($json);
    if ($_POST['eda']>=18) {

      $r = array([
        "msg"=>"entra",
        "nom"=>"jhon",
        "pas"=>"333",
      ],[
        "nom"=>"jhon",
        "pas"=>"333"
        ]);
    }else {
      $r = array("msg"=>"no entra","msg3"=>"no entra3");
    }
    echo json_encode($r);

 ?>
