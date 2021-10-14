



var button = document.getElementById("bouton")

button.addEventListener("click",function(){

    const name = document.getElementById("uname").value;
    const ami = document.getElementById("nombre").value;

    const sentence = 'HAHAHA'+ name + "tu es le plus puceau de ta bande de " + ami + " meilleur ami"; 



responsiveVoice.speak(sentence, "French Female");



})

