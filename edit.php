<?php
include 'db.php';
// echo "<pre>";
// print_r($_POST);
// echo "</pre>";
$id = $_POST['id'];
$doc = $_POST['cc'];
$nom = $_POST['nombre'];
$query = "UPDATE clientes SET documento='$doc', nombre='$nom' WHERE id_cliente='$id'";
$result = mysqli_query($conn, $query);
if ($result) {
  echo "Modificado".$nom;
}else {
  echo "No se ha Modificado".$nom;
}
 ?>
