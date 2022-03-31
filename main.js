var reconhecimento_fala = window.webkitSpeechRecognition;
var reconhecimento = new reconhecimento_fala();

function start() {
    reconhecimento.start();
    console.log("Iniciou");
}

reconhecimento.onresult = function (event) {
    console.log(event);
    var conteudo = event.results[0][0].transcript.toLowerCase;
    text.innerHTML = conteudo;
    console.log(conteudo);
    
    if (conteudo=="ok." || conteudo=="ok") {
         console.log("Tirando Selfie");
         speak();
    }
}
function speak(dado) {
    var fala = window.speechSynthesis;
    var texto = "Tirando sua selfie em 5 segundos";
    var fala_dado = new SpeechSynthesisUtterance(texto);
    fala.speak(fala_dado);
    Webcam.set({
        width: 360, 
        height: 250,
        image_format: "jpeg",
        jpeg_quality: 90
    });
    var camera = document.getElementById("camera");
    Webcam.attach('#camera');
    setTimeout(function() {
        var texto2 = "Tirando sua selfie em 10 segundos";
        img_id = "selfie1";
        tirar_selfie();
        var fala_dado = new SpeechSynthesisUtterance(texto2);
        fala.speak(fala_dado);
    }, 5000 );
    setTimeout(function() {
        var texto3 = "Tirando sua selfie em 15 segundos";
        img_id = "selfie2";
        tirar_selfie();
        var fala_dado = new SpeechSynthesisUtterance(texto3);
        fala.speak(fala_dado);
    }, 10000 );
    setTimeout(function() {
        img_id = "selfie3";
        tirar_selfie();
    }, 15000 );
}

function tirar_selfie() {
    Webcam.snap(function(dado){
        document.getElementById("resultado").innerHTML = '<img id="selfie" src="'+dado+'"/>';
    });
}