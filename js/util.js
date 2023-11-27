

document.onkeydown = (e) => { 
  e = e || window.event;
 
  if (e.keyCode === 13) {
    let ele = document.getElementById("btncheck");
	if (ele != null){
		 document.getElementById("btncheck").click();	
		 //se retorna false porque sino toma el evento por defecto del enter que es refresh de la página.
		 return false;
	}
  } else if (e.keyCode === 37) {
	 let foco =	document.activeElement;		
	 let ele = document.getElementById("Anterior");
	 if (ele != null && foco.type != "text"){
		 document.getElementById("Anterior").click()
	 }	
  } else if (e.keyCode === 39) {
	 let foco =	document.activeElement;		
	 let ele = document.getElementById("Siguiente");
	 	 if (ele != null && foco.type != "text"){
		 document.getElementById("Siguiente").click();	 
	 }		    
  }
}

