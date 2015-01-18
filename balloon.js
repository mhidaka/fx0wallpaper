window.addEventListener("devicemotion", function(evt){

  var xg = evt.accelerationIncludingGravity.x; // 横方向の傾斜
  var yg = evt.accelerationIncludingGravity.y; // 縦方向の傾斜
  var zg = evt.accelerationIncludingGravity.z; // 上下方向の傾斜
  var angle={};
  angle.y = Math.floor(Math.atan2(yg,zg)/Math.PI * 180);
  angle.x = Math.floor(Math.atan2(xg,zg)/Math.PI * 180);
  angle.z = Math.floor(Math.atan2(yg,xg)/Math.PI * 180);
  if(angle.x < 0){
    angle.x += 360;
  }
  if(angle.y < 0){
    angle.y += 360;
  }
  if(angle.z < 0){
    angle.z += 360;
  }
  document.getElementById("balloon").style.webkitTransform = 'rotate('+angle.z+'deg)'; 