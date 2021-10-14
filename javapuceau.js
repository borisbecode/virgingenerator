



var button = document.getElementById("bouton")

button.addEventListener("click",function(){

    const name = document.getElementById("uname").value;
    const ami = document.getElementById("nombre").value;

    const sentence = 'HAHAHA'+ name + "tu es le plus puceau de ta bande de " + ami + " meilleur ami"; 



            responsiveVoice.speak(sentence, "French Female");


     document.getElementById("pic").innerHTML =    "<img src='https://image.noelshack.com/fichiers/2021/07/1/1613400733-puceau-moi-serieusement-haha.png'>"  



})




