function checked(actividad) {	
	const opciones = {};
    var lbId;
	if (actividad === undefined){
		actividad = localStorage.getItem('act')
	}else{
		localStorage.setItem('act',actividad);			
	}	

console.log(actividad);
    if (actividad == 1) {
        opciones.opcion = "CAMA";
        lbId = "lblopcion";
    } else if (actividad == 2) {
        opciones.opcion2 = "CHIMENEA";
        lbId = "lblopcion2";
    } else if (actividad == 3) {
        opciones.opcion1 = "FLOR";
        lbId = "lblopcion1";
    } else if (actividad == 4) {
        opciones.nombre1 = "MOSCA";
        lbId = "lblnombre1";		
    } else if (actividad == 5) {
        opciones.nombre1 = "CARACOL";
        lbId = "lblnombre1";
    } else if (actividad == 6) {
        opciones.nombre1 = "TORTUGA";
        lbId = "lblnombre1";
    } else if (actividad == 7) {
        opciones.nombre1 = "PATO";
        lbId = "lblnombre1";
    } else if (actividad == 8) {
        opciones.opcion1 = "M";
        lbId = "lblopcion1";
    } else if (actividad == 9) {
        opciones.opcion1 = "T";
        lbId = "lblopcion1";
    } else if (actividad == 10) {
        opciones.opcion1 = "C";
        lbId = "lblopcion1";
    } else if (actividad == 11) {
        opciones.opcion1 = "PATO";
        opciones.opcion2 = "CARACOL";
        opciones.opcion3 = "MOSCA";
        opciones.opcion4 = "SAPITO";
        opciones.opcion5 = "CANGREJO";
        opciones.opcion6 = "TORTUGA";
        lbId = "lblopcion1";
    } else if (actividad == 16) {
        opciones.animal6 = "SAPITO";
        lbId = "lblopcion1";
    } else if (actividad == 17) {
        opciones.animal6 = "CUANDO LLUEVE";
        lbId = "lblopcion1";
    } else if (actividad == 18) {
        opciones.animal6 = "ESCUCHAR";
        lbId = "lblopcion1";
    } else if (actividad == 19) {
        opciones.animal6 = "SE ESCONDE";
        lbId = "lblopcion1"
    } else if (actividad == 20) {
        opciones.animal6 = "GLO GLO GLO";
        lbId = "lblopcion1"
    }
    var sonido = true;

    var inputs = document.getElementsByTagName("input");

    Array.from(inputs).forEach(function(element) {

        //me quedo con el valor de la opoción correspondiente.
        let valor = opciones[element.id];

        //cheque si el valor de la opción es igual al valor ingresado
        let aux = element.value.trim().toUpperCase();
        //let palabra = aux.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
		let palabra = aux.normalize("NFD").replace(/[\u0300-\u036f\.?:;!¡,]/g, "");
        console.log(valor);
        console.log(palabra);
        if (palabra == valor) {
            let label = document.getElementById(lbId);			
            label.classList.remove("danger");
            label.classList.remove("info");
            label.classList.add("success");
            label.innerHTML = "¡Muy bien!";			
			document.getElementById("btncheck").focus();
			document.getElementById('btncheck').classList.add("next");
			changeButton('btncheck',1);
			if(actividad == 20){
				document.getElementById('div1').style.display = 'none';				
				document.getElementById('div2').setAttribute("class","poema-respuesta");
				document.getElementById('div3').style.display = 'none';	
				document.getElementById('glo').setAttribute('disabled', '');	
			}

        } else if (palabra != "") {					
            let label = document.getElementById(lbId);		
            if (label != null) {
                label.classList.remove("success");
                label.classList.remove("info");
                label.classList.add("danger");
                //label.innerHTML = "Intenta otra vez";
				label.innerHTML = "";
                sonido = false;	
				label;
				document.getElementById('btncheck').classList.remove("next");
				document.getElementById('btncheck').classList.add("reset");
				changeButton('btncheck',2);
            }
			
        } else {
            let label = document.getElementById(lbId);		
            if (label != null) {
                console.log(label);
                label.classList.remove("success");
                label.classList.remove("danger");
                label.classList.add("info");
                label.innerHTML = "¡Sin hacer!";
				document.getElementById('btncheck').classList.remove("next");
				document.getElementById('btncheck').classList.remove("reset");
            }
        }

    });
    if (sonido) {
        getSound("correct");
    } else {
        getSound("error");
    }
}

function check_radios(actividad) {

    const opciones = {};
    var sonido = true;
    var isChecked = false;
    var lbId;
	
	if (actividad === undefined){
		actividad = localStorage.getItem('act')
	}else{
		localStorage.setItem('act',actividad);			
	}	
	
    if (actividad == 11) {
        opciones.opcion = "PATO";
    } else if (actividad == 12) {
        opciones.opcion = "SAPITO";
    } else if (actividad == 13) {
        opciones.opcion = "TORTUGA";
	} else if (actividad == 14) {
        opciones.opcion = "CANGREJO";
    } else if (actividad == 15) {
        opciones.opcion = "MOSCA";
    } else if (actividad == 999) {
        opciones.opcion = "RANA";
    } else if (actividad == 999) {
        opciones.opcion = "CARACOL";
   
    }

    var inputs = document.getElementsByTagName("input");


    Array.from(inputs).forEach(function(element) {

        if (element.type == "radio") {
            if (element.checked == true) {
                isChecked = true;

                if (element.value == opciones.opcion) {
                    let label = document.getElementById("lblopcion");
                    label.classList.remove("danger");
                    label.classList.remove("info");
                    label.classList.add("success");
                    label.innerHTML = "¡Muy bien!";
					document.getElementById("btncheck").focus();
					changeButton('btncheck',1);
                } else {
                    let label = document.getElementById("lblopcion");
                    label.classList.add("danger");
                    label.classList.remove("success");
                    label.classList.remove("info");
                    label.classList.add("info");
                    //label.innerHTML = "Intenta otra vez";
				    label.innerHTML = "";
					changeButton('btncheck',2);
                    sonido = false
                }
            }
        }
        if (isChecked == false) {
            let label = document.getElementById("lblopcion");
            label.classList.remove("success");
            label.classList.remove("danger");
            label.classList.add("info");
            label.innerHTML = "¡Sin hacer!";
        }
    });
    if (sonido) {
        getSound("correct");
    } else {
        getSound("error");
    }


}

function checked_opciones(actividad) {

    const opciones = {};
    var sonido = true;
    var isChecked = false;
    var lbId;
	var count = 0;
    if (actividad == 11) {
        opciones.opcion1 = "PATO";
        opciones.opcion2 = "CARACOL";
        opciones.opcion3 = "MOSCA";
        opciones.opcion4 = "SAPITO";
        opciones.opcion5 = "CANGREJO";
        opciones.opcion6 = "TORTUGA";
    }

    var inputs = document.getElementsByTagName("input");    
    Array.from(inputs).forEach(function(element) {      
        let label = document.getElementById("lbl" + element.id);
        label.classList.remove("danger");
        label.classList.remove("info");
        label.classList.remove("success");

        //cheque si el valor de la opción es igual al valor ingresado
        let aux = element.value.trim().toUpperCase();
        let palabra = aux.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        let existe = existeValor(actividad, element);
        if (existe == false) {
            sonido = false;			
        }else{
			if (element.value.trim() != ""){
				count += 1;
			}			
		}
    });
    if (sonido) {
        getSound("correct");
		if (count == 6){			
			changeButton('btncheck',1);
		}
    } else {
        getSound("error");
    }

}

function existeValor(actividad, element) {
    const opciones = {};
    var retorno = true;
    if (actividad == 11) {
        opciones.opcion1 = "PATO";
        opciones.opcion2 = "CARACOL";
        opciones.opcion3 = "MOSCA";
        opciones.opcion4 = "SAPITO";
        opciones.opcion5 = "CANGREJO";
        opciones.opcion6 = "TORTUGA";
    }
    let aux = element.value.trim().toUpperCase();
  //  let palabra = aux.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
	let palabra = aux.normalize("NFD").replace(/[\u0300-\u036f\.?:;!¡,]/g, "");
    for (var i = 0 in opciones) {
        if (palabra == opciones[i]) {
            let label = document.getElementById("lbl" + element.id);
            label.classList.remove("danger");
            label.classList.remove("info");
            label.classList.add("success");
            label.innerHTML = "¡Muy bien!";
            return true;
        } else if (palabra != "") {
            let label = document.getElementById("lbl" + element.id);
            if (label != null) {
                label.classList.remove("success");
                label.classList.remove("info");
                label.classList.add("danger");
                label.innerHTML = "Intenta otra vez";
                retorno = false;
            }
        } else {
            let label = document.getElementById("lbl" + element.id);
            label.classList.remove("success");
            label.classList.remove("danger");
            label.classList.add("info");
            label.innerHTML = "¡Sin hacer!";
        }
    }
    return retorno;
}

function showImage(actividad, element) {
    const opciones = {};
    var label;
    var sonido = false;
    var correcto = false;
    if (actividad == 19) {
        opciones.opcion1 = "SAPO";
        opciones.opcion2 = "CANGREJO"
    }

    for (var i = 0 in opciones) {

        if (element.innerHTML == opciones[i]) {
            let imagen = document.getElementById("img" + element.id);
            imagen.classList.remove("hide");
            sonido = true;
            correcto = true;
            label = document.getElementById("lblResult");
            label.classList.remove("danger");
            label.classList.remove("info");
            label.classList.add("success");
            label.innerHTML = "¡Muy bien!";
            break;
        }
    }

    if (correcto == false) {
        let countImg = document.getElementsByClassName("hide").length;
        if (countImg != 0) {
            label = document.getElementById("lblResult");
            label.classList.remove("success");
            label.classList.remove("info");
            label.classList.add("danger");
            label.innerHTML = "Intenta otra vez";
        }

    }
    if (sonido) {
        getSound("correct");
    } else {
        getSound("error");
    }
}

function limpiarCampos(){	
	
	let selected = document.getElementsByTagName("input");
	
	Array.from(selected).forEach(function(element) {		
		console.log(element.type);
		 if (element.type == "radio") {			
			
            if (element.checked == true) {
			
				element.checked = false;
			}
		 }else if (element.type == "text"){
			 
			 element.value = "";
			 
		 }
	});	
	
	let actividad = localStorage.getItem('act');
	if (actividad >= 11 && actividad <= 15){
		document.getElementById('btncheck').onclick = function() {check_radios()};		
		document.getElementById('btncheck').innerHTML = "Chequear";
		document.getElementById('btncheck').style.backgroundColor='#2E61F6'	
	}else{
		document.getElementById('btncheck').onclick = function() {checked()};		
		document.getElementById('btncheck').innerHTML = "Chequear";
		document.getElementById('btncheck').style.backgroundColor='#2E61F6'	
	}
		document.getElementById('btncheck').classList.remove("reset");
		document.getElementById('btncheck').classList.remove("next");
		

}

function setValue(input,silaba){
	
		let palabra = document.getElementById(input).value;
		palabra = palabra + silaba;
		document.getElementById(input).value = palabra;
	
}


function getSound(type) {
    var beat;
    if (type == "correct") {
        beat = new Audio('../sonidos/correct-ding.mp3');
    } else {
        beat = new Audio('../sonidos/incorrecto.mp3');
    }

    beat.play();
}

/*parametros: 1 = id del boton checked, 
				    2 = opcion 1 igual correcto, 2 igual incorrecto
					3 = comportamiento 1 igual no limpia input, 2 igual limpia input
*/
function changeButton(button, opcion){	

	document.getElementById('btncheck').classList.remove("next");
	document.getElementById('btncheck').classList.remove("reset");
	if(opcion == 1){
		let btn = document.getElementById(button).onclick = function() {clickSiguiente()};	
		document.getElementById(button).innerHTML = "Siguiente";
		document.getElementById(button).style.backgroundColor='#00A88A'	
		document.getElementById('btncheck').classList.add("next");		
	}else if(opcion == 2){
		
			document.getElementById(button).innerHTML = "Intenta otra vez";	
			document.getElementById(button).style.backgroundColor='#aa2c24'		
			let btn = document.getElementById(button).onclick = function() {limpiarCampos()};				
			document.getElementById('btncheck').classList.add("reset");		
	}
	
}

function clickSiguiente(){
	 let ele = document.getElementById("Siguiente");
	 if (ele != null){
		 document.getElementById("Siguiente").click();	 
	 }	
}

function check_button(actividad,ele,lbl){
	localStorage.setItem('act',actividad);		
	
		document.getElementById('btncheck').classList.remove("next");
		document.getElementById('btncheck').classList.remove("reset");
		document.getElementById('btncheck').onclick = function() {checked()};		
		document.getElementById('btncheck').innerHTML = "Chequear";
		document.getElementById('btncheck').style.backgroundColor='#2E61F6'	
		document.getElementById(lbl).innerHTML = "";
}

function check_uncheck_radios(actividad,ele,lbl){
	localStorage.setItem('act',actividad);	
	const opciones = {};
	
    if (actividad == 12) {
        opciones.opcion = "PERRO";	
    } else if (actividad == 13) {
        opciones.opcion = "MARIPOSA";		
    } else if (actividad == 14) {
        opciones.opcion = "ALMOHADON";  
    }	

	
		if (ele.getAttribute('ischecked') === "false"){	
			ele.checked = true;
			ele.setAttribute('ischecked', "true") ;		
			
		}else if(ele.getAttribute('ischecked') === "true"){		
			ele.checked = false;
			ele.setAttribute('ischecked', 'false') ;			
		}	
	
	
	//cada vez que selecciona o desselecciona una opcion le pongo el btn en chequear
		document.getElementById('btncheck').onclick = function() {check_radios()};		
		document.getElementById('btncheck').innerHTML = "Chequear";
		document.getElementById('btncheck').style.backgroundColor='#2E61F6'	
		document.getElementById('btncheck').classList.remove("next");
		document.getElementById('btncheck').classList.remove("reset");			
		document.getElementById(lbl).innerHTML = "";

}

function selectText(ele,id){
	input = document.getElementById(id).value =  ele.innerText;
    
		//cada vez que selecciona o desselecciona una opcion le pongo el btn en chequear		
		let text = document.getElementById('btncheck').innerText;
		if(!text.includes("Chequear")){
			actividad = localStorage.getItem('act')
			document.getElementById('btncheck').onclick = function() {checked(actividad)};		
			document.getElementById('btncheck').innerHTML = "Chequear";
			document.getElementById('btncheck').style.backgroundColor='#2E61F6'	
			document.getElementById('btncheck').classList.remove("next");
			document.getElementById('btncheck').classList.remove("reset");	
		}	
}