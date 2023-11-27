//funcion para activar/desactivar video
function myFunction() {		
    var x = document.getElementById("video");
    var ico_video = document.getElementById("ico_video");
	var video = document.getElementsByTagName('video');
     if (x.style.display === "none") {
        x.style.display = "block";
        ico_video.src = "../images/iconVideosB_on.svg" 		
		console.log("myfunction");
		console.log(video);	
		localStorage.setItem('videoOverHighlightEnabled', true);
		video[0].play();
		desactivarAudio();	


    } else {
		localStorage.setItem('videoOverHighlightEnabled', false);
        x.style.display = "none";
        ico_video.src = "../images/iconVideosB.svg" 
		video[0].pause();		
		video[0].currentTime = 0;
    }

}

function desactivarAudio(){	   	
		var audio = document.getElementById("audioplayer");		
		audio.pause();
		audio.currentTime = 0;
		localStorage.setItem('voiceOverHighlightEnabled', false);
        $("#audio_control").hide();
        $("#audio").hide();
		$("#toggleVoiceOverHighlightImg").attr("src", "../images/voiceOver_off.svg");	
        $("#btn_juntos").removeClass("btn_juntos");	
}

function audio() {
     toggleVoiceOverHighlight();   

}

//muestra controles del audio
function audio_control() {
    var x = document.getElementById("audio");
    
    if (x.style.display === "none") {
        x.style.display = "block";
   
    } else {
        x.style.display = "none";
      
    }
}
