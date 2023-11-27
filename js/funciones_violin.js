function checked(actividad) {	
    const opciones = {};
    var lbId;
	if (actividad === undefined){
		actividad = localStorage.getItem('act')
	}else{
		localStorage.setItem('act',actividad);			
	}	
    if (actividad == 999) {
		
        opciones.opcion = "VIOLIN";
        lbId = "lblopcion";
    } else if (actividad == 2) {
        opciones.opcion = "EL GUITARRERO";	
        lbId = "lblopcion";			
    } else if (actividad == 3) {
        opciones.opcion = "EL TERITO REAL";
        lbId = "lblopcion";		
    } else if (actividad == 4) {
        opciones.opcion = "LA CHICHARRA";
        lbId = "lblopcion";		
    } else if (actividad == 5) {
        opciones.opcion = "EL GRILLO";
        lbId = "lblopcion";	
    } else if (actividad == 6) {
        opciones.nombre1 = "GRILLO";
        lbId = "lblopcion";
    } else if (actividad == 7) {
        opciones.nombre1 = "CARDENAL";
        lbId = "lblopcion";
    } else if (actividad == 8) {
        opciones.nombre1 = "GUITARRERO";
        lbId = "lblopcion";  
    } else if (actividad == 9) {
        opciones.opcion1 = "TE";
        lbId = "lblopcion";
    } else if (actividad == 10) {
        opciones.opcion1 = "RA";
        lbId = "lblopcion";
    } else if (actividad == 11) {
        opciones.opcion1 = "CHI";
        lbId = "lblopcion";
		
		
		
    } else if (actividad == 23) {
        opciones.animal6 = "ESCUCHAR";
        lbId = "lblopcion1"
    } else if (actividad == 24) {
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
			changeButton('btncheck',1);
			
        } else if (palabra != "") {
            let label = document.getElementById(lbId);
            if (label != null) {
                label.classList.remove("success");
                label.classList.remove("info");
                label.classList.add("danger");
                //label.innerHTML = "Intenta otra vez";
				label.innerHTML = "";
                sonido = false;			
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
	
	if (actividad == 15) {
        opciones.opcion = "PIANO";
    } else if (actividad == 16) {
        opciones.opcion = "PANDERETA";
    } else if (actividad == 17) {
        opciones.opcion = "MARACA";  
    }

    var inputs = document.getElementsByTagName("input");


    Array.from(inputs).forEach(function(element) {

        if (element.type == "radio") {
            if (element.checked == true) {
                isChecked = true;

				console.log(element.value);
				console.log(opciones.opcion);
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
    var lbl = "lbl";
	var count = 0;
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
	var lbl;
	var lista;
    if (actividad == 18) {
		lbl = "lbl";       
		lista = {grillo : 'GRILLO',cardenal : 'CARDENAL',terito_real : 'TERITO REAL',guitarrero : 'GUITARRERO',chicharra : 'CHICHARRA',ranita : 'RANITA',};
    }
    let aux = element.value.trim().toUpperCase();
    let palabra = aux.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
	
	for (var key in lista) {	 
	  if (key === element.id){
		    console.log(element);
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

function showImage(actividad, element) {
    const opciones = {};
    var label;
	var img = "";
    var sonido = false;
    var correcto = false;
	document.getElementById('btncheck').setAttribute("hidden","hidden");
    if (actividad == 12) {
        opciones.opcion1 = "VIOLIN";
		img = "imgviolin";
    }else if (actividad == 13){
		opciones.opcion1 = "ARANA";
		img = "imgarania";
	 }else if (actividad == 14){
		opciones.opcion1 = "CARACOL";
		img = "imgcaracol";
	}

    for (var i = 0 in opciones) {
		
		let palabra = element.innerText.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

        if (palabra == opciones[i]) {
            let imagen = document.getElementById(img);
            imagen.classList.remove("hide");
            sonido = true;
            correcto = true;
            label = document.getElementById("lblResult");
            label.classList.remove("danger");
            label.classList.remove("info");
            label.classList.add("success");
            label.innerHTML = "¡Muy bien!";
			mostrarSiguiente(1);
            break;
        }
    }

    if (correcto == false) {
       // let countImg = document.getElementsByClassName("hide").length;
      //  if (countImg != 0) {
			let imagen = document.getElementById(img);
            imagen.classList.add("hide");
            label = document.getElementById("lblResult");
            label.classList.remove("success");
            label.classList.remove("info");
            label.classList.add("danger");
            label.innerHTML = "Intenta otra vez";
       // }

    }
    if (sonido) {
        getSound("correct");
    } else {
        getSound("error");
    }
}

function checkValues(actividad,element){
	const opciones = {};
	var existe = false;
    var lbId;
	var sonido = false;
	localStorage.setItem('act',actividad);		
	document.getElementById('btncheck').setAttribute("hidden","hidden");
	 
    if (actividad == 1) {
		lbId = "lbl" + element.id;
          opciones.opcion1 = "PIANO";
          opciones.opcion2 = "TAMBOR";
		  opciones.opcion3 = "GUITARRA";     
	}
	
	let palabra = element.innerText.normalize("NFD").replace(/[\u0300-\u036f]/g, "");	
	for (var i = 0 in opciones) {		
		if (palabra == opciones[i]) {
			label = document.getElementById(lbId);
			label.classList.remove("danger");
			label.classList.remove("info");
			label.classList.add("success");
			label.innerHTML = "¡Muy bien!";
			sonido = true;
			existe = true;
			if (actividad == 1){
				mostrarSiguiente(3);
			}			
		}
		
	}
	
	if(!existe){		
		label = document.getElementById(lbId);	
		label.innerHTML = "";	
		label.classList.remove("success");
		label.classList.remove("info");
		label.classList.add("danger");
		label.innerHTML = "Intenta otra vez";		
		 sonido = false;		
		 changeButton('btncheck',2);
		document.getElementById('btncheck').removeAttribute("hidden");
	}
	
	if (sonido) {
        getSound("correct");
    } else {
        getSound("error");
    }
}

function mostrarSiguiente(tot){
	var labels = document.getElementsByClassName('labelResult');
	var count = 0;
	var error = 0;		
	Array.from(labels).forEach(function(element){
		console.log("count");
		if (element.innerHTML === "Intenta otra vez"){
			element.innerHTML = "";
			error += 1;
			console.log("ocultar");
		
		}else if (element.innerHTML === "¡Muy bien!")
			count += 1;
			console.log("count");
			console.log(count);
	});
	
	if(count == tot){
		//mostar btn siguiente.
		console.log("ok");
		changeButton('btncheck',1);
		document.getElementById('btncheck').removeAttribute("hidden");
	}
}

function compareList(actividad){	
	var retorno = true;
	var sonido = true;
    var lbId;
	var optSel = 0;
	var optTot;
	var cant= 0;
	
	console.log("act 1 " + actividad);
	
	if (actividad === undefined){
		actividad = localStorage.getItem('act')
	}else{
		localStorage.setItem('act',actividad);			
	}		
	
	console.log("act " + actividad);
    if (actividad == 19) {
		
       var opciones =  ["GRILLO", "MOSCA"];		
        lbId = "lblopcion";
		optTot = 2
    } else if (actividad == 20) {
       var opciones =  ["ZORRO", "PERRO"];
        lbId = "lblopcion";		
	    optTot = 2		
    } else if (actividad == 21) {
       var opciones =  ["PATO", "CARDENAL"];
        lbId = "lblopcion";		
	    optTot = 2		
	} else if (actividad == 22) {
       var opciones =  ["PEJERREY", "BAGRE"];
        lbId = "lblopcion";		
	    optTot = 2	
    } 
	
	
	let selected = document.getElementsByTagName("input");
	console.log(selected);
	Array.from(selected).forEach(function(element) {
		 if (element.type == "radio") {			
            if (element.checked == true) {
				 optSel += 1;
				let aux = !(opciones.includes(element.value)) ;
				if(aux == true){
					retorno =  false;				
					document.querySelector("label[for='"+element.id+"']").style.color = "red ";					
				}else{
					cant += 1;
					document.querySelector("label[for='"+element.id+"']").style.color = "black";
				}					
			}
			
		 }
	});
	
	//aca
	if(optSel == optTot && retorno){
		  let label = document.getElementById("lblopcion");
          label.classList.remove("danger");
          label.classList.remove("info");
          label.classList.add("success");
          label.innerHTML = "¡Muy bien!";
		  document.getElementById('btncheck').classList.add("next");
		  document.getElementById("btncheck").focus();
		  changeButton('btncheck',1);
	}else if (optSel != 0){
		  let label = document.getElementById("lblopcion");
          label.classList.add("danger");
          label.classList.remove("success");
          label.classList.remove("info");
          label.classList.add("info");
           //label.innerHTML = "Intenta otra vez";
		  label.innerHTML = "";
          sonido = false
		  document.getElementById('btncheck').classList.remove("next");
		  document.getElementById('btncheck').classList.add("reset");
		  changeButton('btncheck',2);
		  
	}else{
		 let label = document.getElementById("lblopcion");
         label.classList.remove("success");
         label.classList.remove("danger");
         label.classList.add("info");
         label.innerHTML = "¡Sin hacer!";
		document.getElementById('btncheck').classList.remove("next");
		document.getElementById('btncheck').classList.remove("reset");
	}
	if (sonido) {
        getSound("correct");
    } else {
        getSound("error");
    }
	
	//control para mostar mensaje Falta encontrar un animal
    if (cant == 1){
		console.log(cant);
		  let label = document.getElementById("lblopcion");
          label.classList.add("danger");
          label.classList.remove("success");
          label.classList.remove("info");        
          label.innerHTML = "Falta encotrar un animal";	
	}
	
}

//metodo encargado de check uncheck y control de cantidad checked
function check_uncheck_radios(actividad,ele,cant_opt){
	localStorage.setItem('act',actividad);	
	
	 if (actividad == 19) {		
       var opciones =  ["GRILLO", "MOSCA"];	    
    } else if (actividad == 20) {		
       var opciones =  ["ZORRO", "PERRO"];    
    } else if (actividad == 21) {
       var opciones =  ["PATO", "CARDENAL"];     
	} else if (actividad == 22) {
       var opciones =  ["PEJERREY", "BAGRE"];      
    } 
	
	let count = radios_count();	
	if (count <= cant_opt){
	
		if (ele.getAttribute('ischecked') === "false"){	
			ele.checked = true;
			ele.setAttribute('ischecked', "true") ;	
			
		let aux = !(opciones.includes(ele.value)) ;	
			
		}else if(ele.getAttribute('ischecked') === "true"){		
			ele.checked = false;
			ele.setAttribute('ischecked', 'false') ;
			document.querySelector("label[for='"+ele.id+"']").style.color = "black";					
		}	
	}else{
		ele.checked = false;		
	}
	
	//cada vez que selecciona o desselecciona una opcion le pongo el btn en chequear
		document.getElementById('btncheck').onclick = function() {compareList()};		
		document.getElementById('btncheck').innerHTML = "Chequear";
		document.getElementById('btncheck').style.backgroundColor='#2E61F6'	
		document.getElementById('btncheck').classList.remove("next");
		document.getElementById('btncheck').classList.remove("reset");	
}

function radios_count(){
	let count =  0;
	let selected = document.getElementsByTagName("input");	
	
	Array.from(selected).forEach(function(element) {
		 if (element.type == "radio") {			
            if (element.checked == true) {
				 count += 1;								
			}			
		 }
	});
	
	return count;	
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
	if (actividad >= 15 && actividad <= 17){		
		document.getElementById('btncheck').onclick = function() {check_radios()};		
		document.getElementById('btncheck').innerHTML = "Chequear";
		document.getElementById('btncheck').style.backgroundColor='#2E61F6'	
	}else if (actividad >= 19 && actividad <= 22){
		document.getElementById('btncheck').onclick = function() {compareList()};		
		document.getElementById('btncheck').innerHTML = "Chequear";
		document.getElementById('btncheck').style.backgroundColor='#2E61F6'	
		
		//es el caso de los radio button: lo que hago es poner texto en negro por funcionalidad Intentar nuevamente
		let selected = document.getElementsByTagName("input");
		console.log(selected);
		Array.from(selected).forEach(function(element) {
		 if (element.type == "radio") {		  
			document.querySelector("label[for='"+element.id+"']").style.color = "black";		
			 }
		});

	}else{
		document.getElementById('btncheck').onclick = function() {checked()};		
		document.getElementById('btncheck').innerHTML = "Chequear";
		document.getElementById('btncheck').style.backgroundColor='#2E61F6'	
	}
		document.getElementById('btncheck').classList.remove("reset");
		document.getElementById('btncheck').classList.remove("next");
		let list = document.getElementsByClassName('labelResult');
		
		Array.from(list).forEach(function(element) {
			console.log("label " + element.innerHTML);
			element.innerHTML = ""
		});
	if (actividad == 1){
		console.log("estoy en 12");
		document.getElementById('btncheck').setAttribute("hidden","hidden");
	}

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

//similar a la anterior solo que tiene la unica funcionalidad de cambiar el estado del radio
function check_uncheck_radio(actividad,ele){
	localStorage.setItem('act',actividad);	
	const opciones = {};
	
	if (actividad == 15) {
        opciones.opcion = "PIANO";
    } else if (actividad == 16) {
        opciones.opcion = "PANDERETA";
    } else if (actividad == 17) {
        opciones.opcion = "MARACA";  
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