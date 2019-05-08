<?php
include('db.php');
// echo "<pre>";
// print_r($_POST);
// echo "</pre>";
$documento = $_POST['cc'];
$nombre = $_POST['nombre'];
$query = "INSERT INTO clientes VALUES(NULL,'$documento', '$nombre' )";
$result = mysqli_query($conn, $query);
if ($result) {
  echo "Registro exitoso!!";
}else {
  echo "Error!!";
}
 ?>
