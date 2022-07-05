
var time = 4;// Time do Video Que Sera Criado o Canvas
var thumbs = document.querySelectorAll('.miniatura a'); // Pega a Lista
var links = ["videos/pato.mp4","videos/video1.mp4","videos/video2.mp4","videos/video3.mp4"];

//Gerar thumb 
links.forEach(function(links,index) {
        var video = document.createElement("video");// Cria uma variavel com html de video,
        video.preload = "auto";
        video.src = links;   

        var c = document.createElement("canvas");
        c.width = 160;
        c.height = 90;


        video.addEventListener('loadeddata', function() {
            thumbs[index].innerHTML = "";
            video.currentTime = time;
        }, false);
    
        video.addEventListener('seeked', function() {
            var ctx = c.getContext("2d");
            ctx.drawImage(video,0, 0, 160, 90); 
            thumbs[index].appendChild(c);
        }, false);
});



$(document).ready(function() {
    $('#lista li a').click(function(){
        var id = $(this).attr('id');

        if (id=="v1"){
            $("#video").html('<video src="videos/pato.mp4" autoplay controls>');
        }
        if (id=="v2"){
            $("#video").html('<video src="videos/video1.mp4" autoplay controls>');
        }
        if (id=="v3"){
            $("#video").html('<video src="videos/video2.mp4" autoplay controls>');
        }
        if (id=="v4"){
            $("#video").html('<video src="videos/video3.mp4" autoplay controls>');
        }
    });
});


//Jequery Para Trazer Videos Ao Frame

/*var queryvideos = new Object();
queryvideos.v1 = "videos/video1.mp4";
queryvideos.v2 = "videos/video2.mp4";
queryvideos.v3 = "videos/video3.mp4";*/