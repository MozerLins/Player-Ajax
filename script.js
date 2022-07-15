var time = 4;// Time do Video Que Sera Criado o Canvas
var thumbs = document.querySelectorAll('.miniatura a'); // Pega a Lista
var links = ["videos/pato.mp4","videos/video1.mp4","videos/video2.mp4","videos/video3.mp4"];// Parametros Passados  Pelo PHP

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

// Função para carregar Video
$(document).ready(function() {
    $('#lista li a').click(function(){
        var idpick = $(this).attr('id'); 
         
        var arraysid = $('#lista li a');
        arraysid = Array.from(arraysid);
    
        arraysid.forEach(function (arraysid,index) {
            if (idpick == arraysid.id){
                $("#video").html('<video src='+links[index]+' autoplay controls>');
            }
        });    
    });
});  

$(document).ready(function() {
    $(".form-control").keyup(function() {
      var n = $(".form-control").val().toLowerCase(); //convert value to lowercase for case-insensitive comparison
      $(".miniatura a").filter( function(index){
         var $this = $(this);
         var value = $this.attr( "title" ).toLowerCase(); //convert attribute value to lowercase
        $this.parent().toggleClass( "hidden", !value.includes( n ));
      })
     });
});