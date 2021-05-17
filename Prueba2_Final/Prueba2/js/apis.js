
//FUNCIONES DE LOS WS
//FUNCION DE INDICADORES
function datos(){
	$.getJSON('https://api.libreapi.cl/economy/indicators', function(result){      
		var datos = result; 
		$("#lbl_indicador").text("Indicadores Economicos : Dolar: $"+Math.round(datos.data.dolar)+" - Euro: $"+Math.round(datos.data.euro)+" - UF: $"+Math.round(datos.data.uf));
	  });
  
//FUNCION DE CLIMAS
	  $.getJSON('https://api.libreapi.cl/weather/stations?name=Pudahuel%20Santiago', function(result){      
		var temp = result; 
		$("#lbl_clima").text("Temperatura Actual: "+Math.round(temp.data[0].temperature)+"°");
	  });
  
  };