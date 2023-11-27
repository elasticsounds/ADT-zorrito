function checked(actividad) {	
    const opciones = {};
    var lbId;
	if (actividad === undefined){
		actividad = localStorage.getItem('act')
	}else{
		localStorage.setItem('act',actividad);			
	}	
    if (actividad == 1) {
		
        opciones.opcion = "ABEJAS";
        lbId = "lblopcion";
    } else if (actividad == 2) {
        opciones.opcion = "PATOS";	
        lbId = "lblopcion";			
    } else if (actividad == 3) {
        opciones.opcion = "HORMIGAS";
        lbId = "lblopcion";		
    } else if (actividad == 8) {
        opciones.opcion = "¡CÓMO COMIERON LOS TRES!";
        lbId = "lblopcion";		
    } else if (actividad == 15) {
        opciones.opcion = "TRES";
        lbId = "lblopcion";		
    } else if (actividad == 16) {
        opciones.opcion = "MUNDO";
        lbId = "lblopcion";		
    } else if (actividad == 17) {
        opciones.opcion = "HORMIGUERO";
        lbId = "lblopcion";		
    } else if (actividad == 18) {
        opciones.opcion = "PATOS";
        lbId = "lblopcion";		
    } else if (actividad == 19) {
        opciones.opcion = "ABEJAS";
        lbId = "lblopcion";		
    } else if (actividad == 20) {
        opciones.opcion = "ENCANTADO";
        lbId = "lblopcion";		
    } else if (actividad == 21) {
        opciones.opcion = "DIFÍCILES";
        lbId = "lblopcion";		
    } else if (actividad == 22) {
        opciones.opcion = "PERDIERON";
        lbId = "lblopcion";		
    } else if (actividad == 23) {
        opciones.opcion = "CASÓ";
        lbId = "lblopcion";		
    } 
	
    var sonido = true;

    var inputs = document.getElementsByTagName("input");

    Array.from(inputs).forEach(function(element) {

        //me quedo con el valor de la opoción correspondiente.
        let valor = opciones[element.id];

        //cheque si el valor de la opción es igual al valor ingresado
        let aux = element.value.trim().toUpperCase();
        let palabra = aux.replace(/\./g, '');
		palabra = palabra.replace(/,/g, '');

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
			if(actividad == 23){				
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
	
	if (actividad == 4) {
        opciones.opcion = "CASTILLO";
    } else if (actividad == 5) {
        opciones.opcion = "LLAVE";
    } else if (actividad == 6) {
        opciones.opcion = "HORMIGUERO";  
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
		
		let palabra = element.innerHTML.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

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
	
    if (actividad == 1) {
		lbId = "lbl" + element.id;
          opciones.opcion1 = "PIANO";
          opciones.opcion2 = "TAMBOR";
		  opciones.opcion3 = "GUITARRA";
        
    }else if(actividad == 12){
		lbId = "lbl" + element.id;
          opciones.opcion1 = "VIOLIN";
	}
	
	let palabra = element.innerHTML.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
	for (var i = 0 in opciones) {		
		if (palabra == opciones[i]) {
			label = document.getElementById(lbId);
			label.classList.remove("danger");
			label.classList.remove("info");
			label.classList.add("success");
			label.innerHTML = "¡Muy bien!";
			sonido = true;
			existe = true;
		}
		
	}
	
	if(!existe){		
		label = document.getElementById(lbId);
         label.classList.remove("success");
         label.classList.remove("info");
         label.classList.add("danger");
         label.innerHTML = "Intenta otra vez";
		 sonido = false;
		
	}
	
	if (sonido) {
        getSound("correct");
    } else {
        getSound("error");
    }
}

function compareList(actividad){	
	var retorno = true;
	var sonido = true;
    var lbId;
	var optSel = 0;
	var optTot;
	var cant= 0;	
	
	if (actividad === undefined){
		actividad = localStorage.getItem('act')
	}else{
		localStorage.setItem('act',actividad);			
	}		
	
	console.log("act " + actividad);
    if (actividad == 7) {
		
      var opciones =  ["VALIENTE", "DEFIENDE A LOS ANIMALES", "BUEN HERMANO", "OBEDIENTE","INTELIGENTE", "MUY ASTUTO"];			
        lbId = "lblopcion";
		optTot = 6
    } else if (actividad == 999) {
       var opciones =  ["ZORRO", "PERRO"];
        lbId = "lblopcion";		
	    optTot = 2		
    } else if (actividad == 999) {
       var opciones =  ["PATO", "CARDENAL"];
        lbId = "lblopcion";		
	    optTot = 2		
	} else if (actividad == 999) {
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
				 console.log("element.value " +element.value);
				 console.log("opciones " + opciones);
				let aux = !(opciones.includes(element.value.trim().toUpperCase())) ;
				if(aux == true){
					console.log("no encuentra " +element.value);
					document.querySelector("label[for='"+element.id+"']").style.color = "red ";	
					retorno =  false;					
				}else{
					cant += 1;
					document.querySelector("label[for='"+element.id+"']").style.color = "black";	
				}					
			}
			
		 }
	});
	
	console.log("opciones selec " + optSel);	
	
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
	console.log("actividad " +actividad);
	 if (actividad == 7) {		
       var opciones =  ["VALIENTE", "DEFIENDE A LOS ANIMALES", "BUEN HERMANO", "OBEDIENTE","INTELIGENTE", "MUY ASTUTO"];			    
    } else if (actividad == 999) {		
       var opciones =  ["ZORRO", "PERRO"];    
    } else if (actividad == 999) {
       var opciones =  ["PATO", "CARDENAL"];     
	} else if (actividad == 999) {
       var opciones =  ["PEJERREY", "BAGRE"];      
    } 
	
	console.log(opciones);
	let count = radios_count();	
	if (count <= cant_opt){
	
		if (ele.getAttribute('ischecked') === "false"){	
			ele.checked = true;
			ele.setAttribute('ischecked', "true") ;	
				
		let aux = !(opciones.includes(ele.value.trim().toUpperCase()));		
			
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
	
	
		document.getElementById('btncheck').onclick = function() {checked()};		
		document.getElementById('btncheck').innerHTML = "Chequear";
		document.getElementById('btncheck').style.backgroundColor='#2E61F6'	
		document.getElementById('btncheck').classList.remove("reset");
		document.getElementById('btncheck').classList.remove("next");
		let list = document.getElementsByClassName('labelResult');
		
		Array.from(list).forEach(function(element) {		
			element.innerHTML = ""
		});
		
		
	
	let actividad = localStorage.getItem('act');
	if (actividad == 7){
		document.getElementById('btncheck').onclick = function() {compareList()};		
			Array.from(selected).forEach(function(element) {
		 if (element.type == "radio") {		  
			document.querySelector("label[for='"+element.id+"']").style.color = "black";		
			 }
		});
		
	}
	if (actividad >= 9 && actividad <= 14){		
		
		let selected = document.getElementsByClassName("btnselect");
		console.log("opctiones selecionadas " + selected);
	
		if (actividad == 9){
		var opciones =  ["PESCADO AL HORNO", "POLLO ASADO", "TOMATES RELLENOS", "SOPA DE LETRAS","TORTA DE CHOCOLATE", "HELADO DE MENTA"];	
		}
		else if (actividad == 10){
		var opciones =  ["BANANA", "UVA", "DURAZNO"];	
		}
		else if (actividad == 11){
		var opciones =  ["LECHUGA", "ESPINACA", "PEPINO"];	
		}
		else if (actividad == 12){
		var opciones =  ["YOGUR", "MANTECA", "QUESO"];		
		}
		else if (actividad == 13){
		var opciones =  ["CERDO", "PESCADO", "POLLO"];		
		}
		else if (actividad == 14){
		var opciones =  ["MAÍZ", "AVENA", "ARROZ"];		
		}
		var aux;
		Array.from(selected).forEach(function(element) {
			
			 console.log(element.innerHTML);
			if (element.getAttribute('isselected') === 'true'){
				 aux = !(opciones.includes(element.innerText.toUpperCase())) ;
					if(aux == true){

							element.classList.remove("button_selected");
							element.classList.remove("button_no_ok");
							element.setAttribute('isselected',false);						
					}										
			}				
		    
		});
		
		document.getElementById('btncheck').onclick = function() {checkOptionSelected()};		
		document.getElementById('btncheck').innerHTML = "Chequear";
		document.getElementById('btncheck').style.backgroundColor='#2E61F6'	
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

function check_button(actividad,ele){
	localStorage.setItem('act',actividad);	
	
	//if (ele.value.trim() == "" || ele.value.trim().length == 1){		
		document.getElementById('btncheck').classList.remove("next");
		document.getElementById('btncheck').classList.remove("reset");
		document.getElementById('btncheck').onclick = function() {checked()};		
		document.getElementById('btncheck').innerHTML = "Chequear";
		document.getElementById('btncheck').style.backgroundColor='#2E61F6'	
	//}
	
	/*
	if (actividad >= 9 && actividad <= 9){
		document.getElementById('btncheck').onclick = function() {checkOptionSelected()};	
	}
*/
}

//similar a la anterior solo que tiene la unica funcionalidad de cambiar el estado del radio
function check_uncheck_radio(actividad,ele){
	localStorage.setItem('act',actividad);	
	
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

function selectOption(actividad,ele){	

	var optTot = 0;;
	var count = 1
	if (actividad === undefined){
			actividad = localStorage.getItem('act')
	}else{
			localStorage.setItem('act',actividad);			
	}		
	console.log(ele.getAttribute('isselected'));
	console.log("act " + actividad);
	if (actividad == 9){
		optTot = 6;		
	}else if(actividad == 10){
		optTot= 3;
	}else if (actividad == 11){		
		optTot= 3;
	}else if (actividad == 12){		
		optTot= 3;
	}else if (actividad == 13){		
		optTot= 3;
	}else if (actividad == 14){		
		optTot= 3;
	}
	let selected = document.getElementsByClassName("btnselect");
		Array.from(selected).forEach(function(element) {
			
			  console.log(element.getAttribute('isselected') );
			if (element.getAttribute('isselected') === 'true'){
				count += 1;							
			}			
		    
		});
		
		if (count <= optTot){
			ele.classList.add('button_selected');
			ele.setAttribute('isselected', true);						
		}
	
}

function checkOptionSelected(actividad){
		var retorno = true;
	var sonido = true;
    var lbId;
	var optSel = 0;
	var optTot;
	var cant= 0;	
	if (actividad === undefined){
			actividad = localStorage.getItem('act')
	}else{
			localStorage.setItem('act',actividad);			
	}			
	
	if (actividad == 9){
		var opciones =  ["PESCADO AL HORNO", "POLLO ASADO", "TOMATES RELLENOS", "SOPA DE LETRAS","TORTA DE CHOCOLATE", "HELADO DE MENTA"];
		optTot = 6;
	}else if(actividad == 10){
		var opciones =  ["BANANA", "UVA", "DURAZNO"];	
		optTot= 3;
	}else if (actividad == 11){
		var opciones =  ["ESPINACA", "LECHUGA", "PEPINO"];	
		optTot= 3;
	}else if (actividad == 12){
		var opciones =  ["YOGUR", "MANTECA", "QUESO"];	
		optTot= 3;
	}
	else if (actividad == 13){
		var opciones =  ["CERDO", "PESCADO", "POLLO"];	
		optTot= 3;
	}
	else if (actividad == 14){
		var opciones =  ["MAÍZ", "AVENA", "ARROZ"];			
		optTot= 3;
	}
	
	let selected = document.getElementsByClassName("btnselect");
	console.log(selected);
	
	Array.from(selected).forEach(function(element) {
		 if (element.type == "button") {			
			let ele = element.getAttribute('isselected'); 
			console.log(ele);	
            if (ele === 'true') {
				
				 optSel += 1;
				 console.log("opcione select.value " +element.innerText);				
				let aux = !(opciones.includes(element.innerText.toUpperCase())) ;
			
				if(aux == true){
					console.log("no encuentra " +element.innerText);
					element.classList.remove('button_selected');
					element.classList.add('button_no_ok');
					retorno =  false;					
				}else{
						element.classList.remove('button_selected');
						element.classList.add('button_ok');
						element.removeAttribute('onclick');
					console.log("opcione correcta " + element.innerText.toUpperCase());
					cant += 1;
				}					
			}
			
		 }
	});
	
	console.log("opciones selec " + optSel);	
	console.log("total opciones " + optTot);
	
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
	
}
