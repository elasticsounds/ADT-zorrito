// JavaScript to toggle the menu and update aria-expanded attribute
/*
listaAccesible('#menuButton', '#menu')


function listaAccesible(id_menuButton, id_menu) {
  const menuButton = document.querySelector(id_menuButton);
  const menu = document.querySelector(id_menu);
  if (menuButton && menu) {
    menuButton.addEventListener('mouseover', handleAriaExpanded);
    menuButton.addEventListener('mouseleave', handleAriaExpanded);
  
    function handleAriaExpanded() {
      const expanded = menuButton.getAttribute('aria-expanded') === 'true' || false;
      menuButton.setAttribute('aria-expanded', !expanded);
      menu.hidden = expanded;
    }
  
    menuButton.addEventListener('keydown', function(event) {
      const key = event.key;
  
      switch (key) {
        case 'Enter':
        case ' ':
          event.preventDefault();
          const expanded = menuButton.getAttribute('aria-expanded') === 'true' || false;
          menuButton.setAttribute('aria-expanded', !expanded);
          menu.hidden = expanded;
          break;
  
        case 'Escape':
          if (!menu.hidden) {
            menuButton.setAttribute('aria-expanded', false);
            menu.hidden = true;
          }
          break;
  
        case 'ArrowDown':
          event.preventDefault();
          if (menu.hidden) {
            menuButton.setAttribute('aria-expanded', true);
            menu.hidden = false;
            menu.querySelector('a').focus();
          } else {
            const next = menu.querySelector('a:focus + li a');
            if (next) {
              next.focus();
            } else {
              menu.querySelector('a').focus();
            }
          }
          break;
  
        case 'ArrowUp':
          event.preventDefault();
          menu.removeAttribute("hidden", "");
          menu.style.display = "block";
          if (!menu.hidden) {
            const item = menu.querySelector('li a');
            
            item.focus();
            
          }
          break;
  
        default:
          break;
      }
    });
  }
}
*/



/*
function mostrarMenu() {		
		 document.getElementById("menu").style.display = 'block';   
		 let mostrar =  document.getElementById("menuButton").getAttribute('aria-expanded');
		 document.getElementById("menuButton").setAttribute('aria-expanded', true);
		 
		    const expanded = menuButton.getAttribute('aria-expanded') === 'true' || false;
      document.getElementById("menuButton").setAttribute('aria-expanded', !expanded);
      document.getElementById("menu").hidden = expanded;
}
	
function ocultarMenu() {		
document.getElementById("menu").style.display = 'none';   

}
*/

// lee los <li>
var listItems = document.querySelectorAll(".dropup-content li");
// Set up a counter to keep track of which <li> is selected
var currentLI = 0;
// Initialize first li as the selected (focused) one:
listItems[currentLI].classList.add("drop-focus");

document.getElementById("menuButton").addEventListener('mouseover', handleAriaExpanded);
document.getElementById("menuButton").addEventListener('mouseleave', setButton);
document.getElementById("menu").addEventListener('mouseleave', setButton);
document.getElementById("menu").addEventListener('mouseover', setExpand);

function handleAriaExpanded() {
    let expanded =   document.getElementById("menuButton").getAttribute('aria-expanded');	 
	 if(expanded === 'false'){
		   //está oculto: lo muestro
		    document.getElementById("menu").style.display = "";
			document.getElementById("menuButton").setAttribute('aria-expanded', 'true');
	  }else{
		  //está visible: lo ocutlo
		   document.getElementById("menu").style.display = "none";
		   document.getElementById("menuButton").setAttribute('aria-expanded', 'false');
	  }
  
 }
	
function setButton(){
	let expanded =   document.getElementById("menuButton").getAttribute('aria-expanded');	
	//se controla que si navega con flechas y se hace un mouseleave con el cursor cierre el menú y setee el expanded
	if(expanded==='false'){
		document.getElementById("menu").style.display = "none";
	}else{
		document.getElementById("menu").style.display = "";
	}		
	   document.getElementById("menuButton").setAttribute('aria-expanded', 'false');	  
}

function setExpand(){
	document.getElementById("menuButton").setAttribute('aria-expanded', 'true');
}


document.addEventListener("keydown", function(event){	  

  var menu = document.getElementById("menu");
  
  switch(event.keyCode){
	  
    case 38: // Up arrow    
		  event.preventDefault();
		  document.getElementById("menuButton").setAttribute('aria-expanded', 'true');
	      menu.removeAttribute("hidden", "");
          menu.style.display = "block";
          if (!menu.hidden) {
            const item = menu.querySelector('li a');            
            item.focus();            
          }
          
      // Remove the highlighting from the previous element
      listItems[currentLI].classList.remove("drop-indice");      
      currentLI = currentLI > 0 ? --currentLI : 0;     // Decrease the counter      
      listItems[currentLI].classList.add("drop-indice");   // Highlight the new element
	  listItems[currentLI].focus();  
      break;
	  
    case 40: // Down arrow
	 event.preventDefault();
	 document.getElementById("menuButton").setAttribute('aria-expanded', 'true');
      // Remove the highlighting from the previous element
      listItems[currentLI].classList.remove("drop-indice");      
      currentLI = currentLI < listItems.length-1 ? ++currentLI : listItems.length-1; // Increase counter 
      listItems[currentLI].classList.add("drop-indice");       // Highlight the new element
	  listItems[currentLI].focus();
      break;    
	  
	 case 13: //enter
	 
	     let expanded =   document.getElementById("menuButton").getAttribute('aria-expanded');	 
			if(expanded === 'true'){   
			    event.preventDefault();
				listItems[currentLI].focus();  
				let id = listItems[currentLI].children[0].id;
				document.getElementById(id).click();
			}      
	    break;
		
	 case 27: 
	   event.preventDefault();
	   handleAriaExpanded();	  
	   break;
	 
     default:
     break;  
  } 
});
