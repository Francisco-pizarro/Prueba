//Jquery validate

$("#basic-form").validate({
	rules: {
		txt_nombre: {
			required: true,
			minlength: 2
		},
		txt_apellidos: {
			required: true,
			minlength: 2
	    },
		txt_email: {
			required: true,
			email: true
		},
		txt_rut: {
			required: true
		},
		txt_direccion: {
			required: true,
			minlength: 10
		},
		txt_contrasena: {
			required: true,
			minlength: 8
		},
		txt_confirmar: {
			required: true,
			minlength: 8
			
		}
	},
	messages: {
		txt_nombre: {
			required: "El campo Nombre no puede estar vacio.",
			minlength: "El campo Nombre debe tener al menos 2 caractéres."
		
		}, txt_apellidos: {
			required: "El campo Apellido no puede estar vacio.",
			minlength: "El Apellido debe tener al menos 2 caractéres."
		
		
		}, txt_email: {
			required: "El campo email no puede estar vacio.",
		
		}, txt_rut: {
			required: "El campo rut no puede estar vacio.",

		}, txt_direccion: {
			required: "El campo direccion no puede estar vacio.",
			minlength: "El campo direccion debe tener al menos 10 caractéres."

		}, txt_contrasena: {
			required: "El campo contraseña no puede estar vacio.",
			minlength: "El campo contraseña debe tener al menos 8 caractéres."
		
		}, txt_confirmar: {
			required: "El campo repita contraseña no puede estar vacio.",
			minlength: "El campo repita contraseña debe tener al menos 8 caractéres."
		}
	}
});


$('#basic-form').submit(function (e) {
	e.preventDefault();
	var valorRut = $('#txt_rut');

	$.ajax({
		type: 'GET',
		url: 'https://api.libreapi.cl/rut/validate?rut=' + valorRut.val(),
		success: function (data) {
			var respuesta = data;
			console.log(data);
			if (data.data.valid) {
			valorRut.val(data.data.rut);
			} else {
				console.log("no esta bien el rut");
				$("#mensaje2").append('<li>Rut incorrecto</li>').visible;
				
			}
		},
		error: function () {
			console.log("error en la llamada al servicio");
			
		}
	});
});
//Funcion Boton enviar
$("#btn_enviar").click(function(){
	validacontrasena();
	
});
//validar contraseña
function validacontrasena(){
	var contrasena = $("#txt_contrasena").val();
	var confirmar = $("#txt_confirmar").val();
	var validador = true;
	var cuenta = $('#input-selected option:selected').text();

	$("#mensaje1").empty();
	$("#mensaje2").empty();
	
	if(contrasena !== confirmar ){
		validador = false;
		$("#mensajes").append('<li> Las contraseñas deben coincidir</li>');
	} 
	if(cuenta == "--Seleccione--"){
		validador = false;
		
		$("#mensaje1").append('<li>Debe seleccionar un tipo de cuenta</li>');
		
	}
	
	else {
		$("#mensajes").empty();
		$("#mensaje1").empty();
		}
	if(validador){
		alert('USUARIO REGISTRADO CORRECTAMENTE')
	} 
};


