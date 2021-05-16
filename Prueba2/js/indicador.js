function fn_consultar() {
    var name ="Pudahuel Santiago"
    $.getJSON('https://api.libreapi.cl/weather/stations?name='+name, function(data) {
        var respuesta = data;
        $("#lista_Climas").empty();
       
            $("#lista_climas").append("<li>" + respuesta.temperature.valor
            + "</li>");
        
    });
}