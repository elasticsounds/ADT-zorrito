function checked(actividad) {	
    const opciones = {};
    var lbId;
	
	if (actividad === undefined){
		actividad = localStorage.getItem('act')
	}else{
		localStorage.setItem('act',actividad);			
	}	
	
	console.log("actividad " + actividad);
	
    if (actividad == 1) {		
        opciones.opcion = "VENANCIO";
        lbId = "lblopcion";
    } else if (actividad == 2) {
        opciones.opcion = "DON FITO";	
        lbId = "lblopcion";			
    } else if (actividad == 3) {
        opciones.opcion = "DON FITO";
        lbId = "lblopcion";		
    } else if (actividad == 4) {
        opciones.opcion = "VENANCIO";
        lbId = "lblopcion";		
    } else if (actividad == 5) {
        opciones.opcion = "DON FITO";
        lbId = "lblopcion";	
    } else if (actividad == 6) {
        opciones.opcion = "VENANCIO";
        lbId = "lblopcion";
    } else if (actividad == 7) {
        opciones.opcion = "DON FITO";
        lbId = "lblopcion";
    } else if (actividad == 8) {
        opciones.opcion = "VENANCIO";
        lbId = "lblopcion";
    } else if (actividad == 9) {
        opciones.nombre1 = "SILLA";
        lbId = "lblnombre1";
    } else if (actividad == 10) {
        opciones.nombre1 = "MESA";
        lbId = "lblnombre1";
    } else if (actividad == 11) {
        opciones.nombre1 = "HELADERA";      
        lbId = "lblnombre1";		
    } else if (actividad == 22) {
        opciones.opcion1 = "DON FITO";
        lbId = "lblopcion1";
    } else if (actividad == 23) {
        opciones.opcion = "UNA SILLA";
        lbId = "lblopcion";		
    } else if (actividad == 24) {
        opciones.opcion = "DE LA HELADERA";
        lbId = "lblopcion"
    } else if (actividad == 25) {
        opciones.opcion2 = "VUELTA POR EL AIRE";
        lbId = "lblopcion"
    }else if (actividad == 26) {
        opciones.opcion2 = "CUADRAS A LA CARNICERIA";
        lbId = "lblopcion"
    }
    var sonido = true;

    var inputs = document.getElementsByTagName("input");

    Array.from(inputs).forEach(function(element) {

        //me quedo con el valor de la opoción correspondiente.
        let valor = opciones[element.id];

        //cheque si el valor de la opción es igual al valor ingresado
        let aux = element.value.trim().toUpperCase();
        let palabra = aux.normalize("NFD").replace(/[\u0300-\u036f\.?:;!¡,]/g, "");

        console.log("valor " + valor);
        console.log("palabra " + palabra);
        if (palabra == valor) {
            let label = document.getElementById(lbId);
            label.classList.remove("danger");
            label.classList.remove("info");
            label.classList.add("success");
            label.innerHTML = "¡Muy bien!";
			document.getElementById("btncheck").focus();
			document.getElementById('btncheck').classList.add("next");
			changeButton('btncheck',1);
			if(actividad == 26){
				document.getElementById('div1').style.display = 'none';				
				document.getElementById('div2').setAttribute("class","poema-respuesta");
				document.getElementById('div3').style.display = 'none';	
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
	
    if (actividad == 12) {
        opciones.opcion = "PERRO";	
    } else if (actividad == 13) {
        opciones.opcion = "MARIPOSA";		
    } else if (actividad == 14) {
        opciones.opcion = "ALMOHADON";
    } else if (actividad == 999) {
        opciones.opcion = "MOSCA";
    } else if (actividad == 999) {
        opciones.opcion = "RANA";
    } else if (actividad == 999) {
        opciones.opcion = "CARACOL";
    } else if (actividad == 999) {
        opciones.opcion = "CANGREJO";
    }

    var inputs = document.getElementsByTagName("input");


    Array.from(inputs).forEach(function(element) {

        if (element.type == "radio") {
            if (element.checked == true) {
                isChecked = true;

				console.log(opciones.opcion);
				console.log(element.value);
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

function checked_opciones(actividad,count_opt) {

    const opciones = {};
    var sonido = true;
    var isChecked = false;
    var lbl = "lbl";
    var inputs = document.getElementsByTagName("input");
    var count = 0;
    Array.from(inputs).forEach(function(element) {
        let label = document.getElementById(lbl + element.id);		
        label.classList.remove("danger");
        label.classList.remove("info");
        label.classList.remove("success");

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
		if (count == count_opt){			
			changeButton('btncheck',1);
		}
    } else {
        getSound("error");
    }

}

function existeValor(actividad, element) {
    const opciones = {};
    var retorno = true;
	var lbl;
	var lista;
    if (actividad == 15) {
		lbl = "lbl";       
		lista = {donfito : 'DON FITO',venancio : 'VENANCIO',doniaenriqueta : 'DOÑA ENRIQUETA',carnicero : 'GOROSITO EL CARNICERO'};
    }else if(actividad == 20){
		lbl = "lbl";   
		lista = {opcion1 : 'BAJITO',opcion2 : 'COMO UNA MARIPOSA'};
	}else if(actividad == 21){
		lbl = "lbl";   
		lista = {opcion1 : 'COMO UN ALMOHADÓN DESESPERADO',opcion2 : 'COMO UN PAJARITO'};																				   
	}
    let aux = element.value.trim().toUpperCase();
    let palabra = aux.replace(/\./g, '');
	palabra = palabra.replace(/,/g, '');
	
	//let palabra = aux.normalize("NFD").replace(/[\u0300-\u036f\.?:;!¡,]/g, "");
	
	for (var key in lista) {	 
	  if (key === element.id){
		    console.log(element);
			console.log(palabra);
			console.log(lista[key]);
		if (palabra == lista[key]) {			
            let label = document.getElementById(lbl + element.id);
            label.classList.remove("danger");
            label.classList.remove("info");
            label.classList.add("success");
            label.innerHTML = "¡Muy bien!";
            return true;
        } else if (palabra != "") {			
            let label = document.getElementById(lbl + element.id);
            if (label != null) {
                label.classList.remove("success");
                label.classList.remove("info");
                label.classList.add("danger");
                label.innerHTML = "Intenta otra vez";
                retorno = false;
            }
        } else {			
            let label = document.getElementById(lbl + element.id);
            label.classList.remove("success");
            label.classList.remove("danger");
            label.classList.add("info");
            label.innerHTML = "¡Sin hacer!";
        }
	  }
	  
	}	

    return retorno;
}

/*
function checked_opciones(actividad) {

    const opciones = {};
    var sonido = true;
    var isChecked = false;
    var lbl = "lbl";
    
    var inputs = document.getElementsByTagName("input");
    var cant = 0;
    Array.from(inputs).forEach(function(element) {
        cant = cant + 1;
        let label = document.getElementById(lbl + element.id);		
        label.classList.remove("danger");
        label.classList.remove("info");
        label.classList.remove("success");

        //cheque si el valor de la opción es igual al valor ingresado
        let aux = element.value.trim().toUpperCase();
        let palabra = aux.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        let existe = existeValor(actividad, element);
        if (existe == false) {
            sonido = false;
        }
    });
    if (sonido) {
        getSound("correct");
    } else {
        getSound("error");
    }

}

function existeValor(actividad, element) {
    const opciones = {};
    var retorno = true;
	var lbl;
    if (actividad == 19) {
		lbl = "lbl";
        opciones.opcion1 = "BAJITO";
        opciones.opcion2 = "COMO UNA MARIPOSA";      
    }else if(actividad == 20){
		lbl = "lbl";
        opciones.opcion1 = "COMO UN ALMOHADON DESESPERADO";
        opciones.opcion2 = "COMO UN PAJARITO";      
	}
    let aux = element.value.trim().toUpperCase();
    let palabra = aux.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    for (var i = 0 in opciones) {
        if (palabra == opciones[i]) {			
            let label = document.getElementById(lbl + element.id);
            label.classList.remove("danger");
            label.classList.remove("info");
            label.classList.add("success");
            label.innerHTML = "¡Muy bien!";
            return true;
        } else if (palabra != "") {			
            let label = document.getElementById(lbl + element.id);
            if (label != null) {
                label.classList.remove("success");
                label.classList.remove("info");
                label.classList.add("danger");
                label.innerHTML = "Intenta otra vez";
                retorno = false;
            }
        } else {			
            let label = document.getElementById(lbl + element.id);
            label.classList.remove("success");
            label.classList.remove("danger");
            label.classList.add("info");
            label.innerHTML = "¡Sin hacer!";
        }
    }
    return retorno;
}
*/
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

function checkValue(actividad,element){
	var opcion = "";
    var lbId;
	/*
	var sonido = false;
    if (actividad == 1) {
		lbId = "lbl" + element.id;
        opcion = "VIOLIN";
        
    } else if (actividad == 15) {
		lbId = "lblopcion";
		opcion = "VIOLIN";
		
	} else if (actividad == 16) {
		lbId = "lblopcion";
		opcion = "ARANA";		
	}else if (actividad == 17) {
		lbId = "lblopcion";
		opcion = "CARACOL";
		
	}
	else if (actividad == 18) {
		lbId = "lblopcion";
		opcion = "CARACOL";
		
	}
	else if (actividad == 21) {
		lbId = "lblopcion1";
		opcion = "UNA SILLA";
		
	}
	
	console.log(element.innerHTML);
	console.log(opcion);
	
	 let palabra = element.innerHTML.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
	 
	if(palabra == opcion){		
		label = document.getElementById(lbId);
        label.classList.remove("danger");
        label.classList.remove("info");
        label.classList.add("success");
        label.innerHTML = "¡Muy bien!";
		sonido = true;
	}else{		
		 label = document.getElementById(lbId);
         label.classList.remove("success");
         label.classList.remove("info");
         label.classList.add("danger");
         label.innerHTML = "Intenta otra vez";
	}
	
	if (sonido) {
        getSound("correct");
    } else {
        getSound("error");
    }
	*/
}
/*
function checkValueById(actividad){
	const opciones = {};  
	var sonido = true;
	var lbId;
	if (actividad === undefined){
		actividad = localStorage.getItem('act')
	}else{
		localStorage.setItem('act',actividad);			
	}	
	
    if (actividad == 22) {
		
			 opciones.opcion  = "DON FITO";
			  lbId = "lblopcion1";	
		else if (id == 'opcion2'){
			 opcion = "DE LA HELADERA";
		}
		else if (id == 'opcion3'){
			 opcion = "VUELTA POR EL AIRE";
		}
		else if (id == 'opcion4'){
			 opcion = "CUADRAS A LA CARNICERIA";
		}            
    } else if( actividad == 23){
		opciones.opcion  = "DE LA HELADERA";
	}
	 else if( actividad == 24){
		 opciones.opcion  = "VUELTA POR EL AIRE";
	} else if( actividad == 25){
		
	} else if( actividad == 26){
		 opciones.opcion  = "CUADRAS A LA CARNICERIA";
	}
	
	  var inputs = document.getElementsByTagName("input");	
	  
	 Array.from(inputs).forEach(function(element) {
		    //me quedo con el valor de la opoción correspondiente.
        let valor = opciones[element.id];
        //cheque si el valor de la opción es igual al valor ingresado
        let aux = element.value.trim().toUpperCase();
        let palabra = aux.normalize("NFD").replace(/[\u0300-\u036f\.?:;!¡,]/g, "");
	if(palabra == valor){		
		label = document.getElementById(lbId);
        label.classList.remove("danger");
        label.classList.remove("info");
        label.classList.add("success");
        label.innerHTML = "¡Muy bien!";	
		document.getElementById("btncheck").focus();
		changeButton('btncheck',1);
	}else if(palabra != ""){		
		 label = document.getElementById(lbId);
         label.classList.remove("success");
         label.classList.remove("info");
         label.classList.add("danger");
         //label.innerHTML = "Intenta otra vez";
		label.innerHTML = "";
        sonido = false;			
	    changeButton('btncheck',2);
	}else{
		 label = document.getElementById(lbId);
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
*/
function compareList(actividad){	
	var retorno = true;
	var sonido = true;
	var optSel = 0;
	var optTot;
	
	if (actividad === undefined){
		actividad = localStorage.getItem('act')
	}else{
		localStorage.setItem('act',actividad);			
	}	
	console.log("act " +actividad);
    if (actividad == 16) {		
       var opciones =  ["ASADO", "CHORIZO"];		     
		optTot = 2
    } else if (actividad == 17) {
       var opciones =  ["PAN", "GALLETA"];   	
	    optTot = 2		
    } else if (actividad == 18) {
       var opciones =  ["CURITAS", "ALGODÓN"];
	   optTot = 2	
	} else if (actividad == 19) {
       var opciones =  ["PELOTA", "ROMPECABEZAS"];    	
	    optTot = 2	
    } else if (actividad == 999) {
       var opciones =  ["BAJITO", "COMO UNA MARIPOSA"];   		
	    optTot = 2	
    } 
	
	
	let selected = document.getElementsByTagName("input");
	console.log(selected);
	Array.from(selected).forEach(function(element) {
		 if (element.type == "text") {			 
			if(element.value.trim() != ""){
				optSel += 1;
			}
				
				let p = element.value.trim().toUpperCase();		
				let aux = !(opciones.includes(p));
				if(p != ""){				
				
					if(aux == true){
						retorno =  false;			
						let label =  element.nextElementSibling;
						  label.classList.add("danger");
						  label.classList.remove("success");
						  label.classList.remove("info");
						  label.classList.add("info");
						label.innerHTML = "Intenta otra vez";					
					}else{
						let label =  element.nextElementSibling;
						label.classList.remove("danger");
						  label.classList.remove("info");
						  label.classList.add("success");
						label.innerHTML = "¡Muy bien!";		
					}
				}else{
					let label =  element.nextElementSibling;
					 label.classList.remove("success");
					 label.classList.remove("danger");
					 label.classList.add("info");
					 label.innerHTML = "¡Sin hacer!";
				}
		 }
	});
	
	console.log("optselect " +optSel);
	if(optSel == optTot && retorno){
		  document.getElementById('btncheck').classList.add("next");
		  document.getElementById("btncheck").focus();
		  changeButton('btncheck',1);
	}else if (optSel != 0){		 	  
          sonido = false
		  document.getElementById('btncheck').classList.remove("next");
		  document.getElementById('btncheck').classList.add("reset");
		  changeButton('btncheck',2);
	}else{		
		 document.getElementById('btncheck').classList.remove("next");
		 document.getElementById('btncheck').classList.remove("reset");
	}
	console.log(optSel);
	console.log(optTot);
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

		document.getElementById('btncheck').onclick = function() {checked()};		
		document.getElementById('btncheck').innerHTML = "Chequear";
		document.getElementById('btncheck').style.backgroundColor='#2E61F6'	
		document.getElementById('btncheck').classList.remove("reset");
		document.getElementById('btncheck').classList.remove("next");
		let actividad = localStorage.getItem('act');
		if (actividad >= 12 && actividad <= 14){
			document.getElementById('btncheck').onclick = function() {check_radios()};		

		}
		if (actividad >= 16 && actividad <= 19){
			document.getElementById('btncheck').onclick = function() {compareList()};		
			var labels = document.getElementsByClassName('labelResult');
			Array.from(labels).forEach(function(element){
				element.innerHTML = "";
			});
		}
			
}

function setValue(input,silaba){
	
		let palabra = document.getElementById(input).value;
		palabra = palabra + silaba;
		document.getElementById(input).value = palabra;
	
}	
	
function myFunction(e,actividad){	
	let message = "";
	
	if (actividad == 1){
	   message = "¡ACA, VENANCIO!";	
	}
	
	let onlyLettersArray = message.split('');//.filter(char => /[a-zA-Z]/.test(char));	
	console.log(onlyLettersArray)
	console.log(e.keyCode);
	console.log(e.key);
	let letra = e.key.toUpperCase();
	  if(e.keyCode == 13){
	   console.log( e.target.value);
	  }
	 if (onlyLettersArray.includes(letra) || e.keyCode == 8){
		   console.log( e.target.value);
			console.log(e.key);
	}else{
			e.preventDefault();
		  return false;
	
	
	}
	 
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
			document.getElementById(button).style.backgroundColor='Red'		
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

function check_button(actividad,ele){
	localStorage.setItem('act',actividad);	
	console.log(ele);
	//if (ele.value.trim() == "" || ele.value.trim().length == 1){		
		document.getElementById('btncheck').classList.remove("next");
		document.getElementById('btncheck').classList.remove("reset");
		document.getElementById('btncheck').onclick = function() {checked()};		
		document.getElementById('btncheck').innerHTML = "Chequear";
		document.getElementById('btncheck').style.backgroundColor='#2E61F6';
	//}
	if (actividad >= 16 && actividad <= 19){
			document.getElementById('btncheck').onclick = function() {compareList()};		
			var labels = document.getElementsByClassName('labelResult');
			Array.from(labels).forEach(function(element){
				element.innerHTML = "";
			});
		}

}

function check_uncheck_radios(actividad,ele){
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