$(function(){

  $("#btn").on("click", function(){
    var data = $("#form1").serialize();
    console.log(data);
    $.ajax({
          url : "op.php",
          data : data,
          type : "post",
          dataType: "json",
          beforeSend: function() {
            console.log("respuesta");
          },
          success : function(respuesta) {
            // var x = JSON.stringify(respuesta)

            for (var i = 0; i < respuesta.length; i++) {
            console.log(respuesta[i].precio)
            $("#div").append(respuesta[i].numero+'<br>')
            }
            console.log(respuesta.length)
          },
    	    error: function() {
            console.log("No se ha podido obtener la información");
          }
    })

  });

});
