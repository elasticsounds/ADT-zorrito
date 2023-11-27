let voiceOverHighlightEnabled = localStorage.getItem('voiceOverHighlightEnabled') || true;
if (voiceOverHighlightEnabled === "true" ){
    voiceOverHighlightEnabled = true;
    $("#audio_control").show();
}

if (voiceOverHighlightEnabled === "false" ){
    voiceOverHighlightEnabled = false;
    $("#audio_control").hide();
}

//function para activar/desactivar audio
function toggleVoiceOverHighlight() {
    voiceOverHighlightEnabled = !voiceOverHighlightEnabled;
  	console.log(voiceOverHighlightEnabled);
    localStorage.setItem('voiceOverHighlightEnabled', voiceOverHighlightEnabled);
    $("#toggleVoiceOverHighlightImg").attr("src", voiceOverHighlightEnabled ? "images/voiceOver_on.svg" : "images/voiceOver_off.svg");
    $("#audio_control").show();
    $("#btn_juntos").addClass("btn_juntos");
   
    if (!voiceOverHighlightEnabled){
        $('span').removeClass('highlight');
        $("#audio_control").hide();
        $("#audio").hide();
        $("#btn_juntos").removeClass("btn_juntos");
       
    }
	var audio = document.getElementById("audioplayer");
	console.log(voiceOverHighlightEnabled);
	if (voiceOverHighlightEnabled === true){
		  audio.play();
		  desactivarVideo();
	}else{
		  audio.pause();		
		  audio.currentTime = 0;
	}	
      
}

function desactivarVideo(){
	    var videoOverHighlightEnabled = localStorage.getItem('videoOverHighlightEnabled') 	
			console.log("estado video");
			console.log(videoOverHighlightEnabled);
		if(videoOverHighlightEnabled === "true"){	
			localStorage.setItem('videoOverHighlightEnabled', false);
			var x = document.getElementById("video");					
			x.style.display = "none";
			ico_video.src = "../images/iconVideosB.svg" ;
			var video = document.getElementsByTagName('video');
			video[0].pause();	
			video[0].currentTime = 0;
		}
}

async function parseSmil(smil) {
    let xmlDoc = await jQuery.get('multimedia/' + smil);
    let parTags = xmlDoc.getElementsByTagName("par");
    let partObjects = [];

    function toTime(timeString) {
        let a = timeString.split(':');
        let seconds = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]);
        return seconds;
    }

    for (let i = 0; i < parTags.length; i++) {
        let parTag = parTags[i];
        let textTag = parTag.getElementsByTagName("text")[0];
        let audioTag = parTag.getElementsByTagName("audio")[0];
        let partObject = {
            parHtmlId: textTag.getAttribute("src").split("#")[1],
            partBegin: toTime(audioTag.getAttribute("clipBegin")),
            partEnd: toTime(audioTag.getAttribute("clipEnd"))
        }
        partObjects.push(partObject);
    }
    return partObjects;
}

function findCurrentPar(partObjects, time) {
    for (let i = 0; i < partObjects.length; i++) {
        let partObject = partObjects[i];
        if (partObject.partBegin < time && partObject.partEnd > time) {
            return partObject;
        }
    }
}

function highlightSentence(sentenceId) {
    if (voiceOverHighlightEnabled) {
        $('span').removeClass('highlight');
        $('#' + sentenceId).addClass('highlight');
    }
}


window.onload = () => {
    $("#toggleVoiceOverHighlightImg").attr("src", voiceOverHighlightEnabled ? "images/voiceOver_on.svg" : "images/voiceOver_off.svg");
    $("#audio_control").css("display", voiceOverHighlightEnabled ? "block" : "none");  
    $("#btn_juntos").attr("class", voiceOverHighlightEnabled ? "btn_juntos" : "");  
    parseSmil("spe" + pageId + ".smil").then((partObjects) => {
        let player = document.getElementById('audioplayer');
        player.addEventListener("timeupdate", function () {
            var currentTime = player.currentTime;
            let currentPar = findCurrentPar(partObjects, currentTime);
            if (currentPar) {
                highlightSentence(currentPar.parHtmlId);
            }
        });
        player.addEventListener("pause", function () {
            highlightSentence("finished");
        });
    });
	console.log("upload");
    
	console.log(voiceOverHighlightEnabled);
	var audio = document.getElementById("audioplayer");
	
	if(voiceOverHighlightEnabled === true){
		  audio.play();
	}else{
		  audio.pause();	
	}
	
	var videoOverHighlightEnabled = localStorage.getItem('videoOverHighlightEnabled') 	
	if(videoOverHighlightEnabled === "true"){		
		myFunction() ;		
	}
	
}