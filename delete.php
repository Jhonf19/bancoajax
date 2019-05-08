<?php
include 'db.php';
$id = $_POST['id'];
$query = "DELETE FROM clientes WHERE id_cliente=$id";
$result = mysqli_query($conn, $query);
if ($result) {
  echo "Se elimino un usuario";
}else {
  echo "No se pudo eliminar";
}
 ?>
