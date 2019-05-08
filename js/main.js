$(function(){
  listar();

  // $("input").keyup(function(e) {
  //   let serc = $(this).val();
  //   console.log(serc);
  // })
  $(".deletecli").on("click", function() {
    console.log("h");
    alert("hla")
  })
  $("#btn").on("click", function(){
     let dato = $("#form1").serialize();
    // console.log(dato);
    var text = $(this).text();
    if (text==='Enviar') {
      console.log(text);
      guardar(dato);
    }else if (text==='Modificar'){
      var d = $("input[name='nombre']").attr("id")
      // console.log(dato+"&id="+d);
      editar(dato+"&id="+d);
      $("#btn").text("Enviar");
      $("#btn").attr("class","btn btn-primary btn-block");
    }
  })

  // $("#form1").submit(function(e) {//cuando se pulsa un boton submit en un form
  //   e.preventDefault();
  //   console.log("e");
  // })
});

$(document).on("click", ".deletecli", function  () {
  var id = $(this).attr("id");
  if (confirm("Se eliminará un cliente \n ¿Continuar?")) {
    eliminar(id);
  }
})
$(document).on("click", ".editcli", function  () {
  var id = $(this).attr("id2")
  var doc = $(this).attr("documento")
  var nom = $(this).attr("nombre")

  $("input[name='cc']").val(doc);
  $("input[name='nombre']").val(nom);
  $("input[name='nombre']").attr("id",id);
  $("#btn").text("Modificar");
  $("#btn").attr("class","btn btn-warning btn-block");

})

function listar() {
  $.post('op.php', (res)=> {
    const dat = JSON.parse(res);
    let temp = '';
    dat.forEach(dat=>{
      temp+= `<tr>
        <td>${dat.documento}</td>
        <td>${dat.nombre}</td>
        <td>
          <button type="button" id="${dat.id_cliente}" class="btn btn-danger deletecli" name="button">
            <i class="fas fa-trash-alt"></i>
          </button>
          <button type="button" id2="${dat.id_cliente}" documento="${dat.documento}" nombre="${dat.nombre}" class="btn btn-warning editcli" name="button">
            <i class="fas fa-pen-alt"></i>
          </button>
        </td>
      </tr>`;
    })
    $("#tr").html(temp)
  });
}

function guardar(dato) {
    $.post('save.php',dato, function(res) {
      console.log(res);
      alert(res)
      listar();
    } )

}

function eliminar(id) {
  $.post('delete.php',{id}, function(res) {
    listar();
    alert(res)
  })
}

function editar(dato) {
  $.post('edit.php', dato, (res)=>{
    console.log(res);
    alert(res)
    listar();
  })
}
