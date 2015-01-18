window.addEventListener("devicemotion", function(evt){

    //加速度 x,y,z
    var acc = evt.acceleration;
    //傾き x,y,z
    var gravity = evt.accelerationIncludingGravity;

    //回転角 alpha:z, beta:x, gamma:y 
    var a = evt.rotationRate.alpha;
    var b = evt.rotationRate.beta;
    var g = evt.rotationRate.gamma;

    var txt  = "x:"+acc.x+"<br>";
        txt += "y:"+acc.y+"<br>";
        txt += "z:"+acc.z+"<br>";

        txt += "傾きx:"+gravity.x+"<br>";
        txt += "傾きy:"+gravity.y+"<br>";
        txt += "傾きz:"+gravity.z+"<br>";

        txt += "alpha(z):"+a+"<br>";
        txt += "beta(x):"+b+"<br>";
        txt += "gamma(y):"+g+"<br>";

    console.log(txt);
    document.getElementById('balloon').innerHTML = txt;
  //document.getElementById("balloon").style;
}, true);
