<?php
include('db.php');
// //$obj = json_decode($json);
//     if ($_POST['eda']>=18) {
//
//       // $r = array(
//       //   "msg"=>"entra",
//       //   "nom"=>"jhon",
//       //   "pas"=>"333"
//       // );
//
      $query = "SELECT * FROM clientes";
       $w = mysqli_query($conn, $query);
       $r = mysqli_fetch_all($w,MYSQLI_ASSOC);
       echo json_encode($r);
       // $json = array();
       // while ($row = mysqli_fetch_array($w)) {
       //   $json[] = array(
       //     'id_cliente' => $row['id_cliente'],
       //     'documento' => $row['documento'],
       //     'nombre' => $row['nombre']
       //   );
       // }
    // }else {
    //   $r = ["msg"=>"no entra","msg3"=>"no entra3"];
    // }
// echo "string";

 ?>
