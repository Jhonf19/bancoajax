$(function(){

  $("#btn").on("click", function(){
    var data = $("#form1").serialize();

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
            console.log(respuesta.length);
            $("h2").text(respuesta.msg)
            for (var i = 0; i < respuesta.length; i++) {
            console.log(respuesta[i])
            }
          },
    	    error: function() {
            console.log("No se ha podido obtener la información");
          }
    })

  });

});
