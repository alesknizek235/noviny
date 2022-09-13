function spatneHeslo(input){
    var time = 0;
    console.log(input);

    for(var i = 0; i < input.length; i++){
        if(input.charAt(i) != " "){
            time += 50;
            (function(i){
                setTimeout(function(){document.getElementById("text").innerHTML += input.charAt(i);}, time);
            })(i);
            
        }else if(input.charAt(i) == " "){
            time += 400;
            (function(i){
                setTimeout(function(){document.getElementById("text").innerHTML = "";}, time);
            })(i);
            
        }
    }
    time += 400;
    document.getElementById("text").innerHTML = "";
    (function(i){setTimeout(function(){window.location.replace("mainpage");}, time);})(i);
}