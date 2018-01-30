document.getElementById("id_business_version").innerHTML = "Business version = 2018.01.10.0";

//-------------------------------------

var constraints = {audio: true, video: { facingMode: "environment" }};

navigator.mediaDevices.getUserMedia(constraints)
.then(on_cam)
.catch(on_error);

var video = document.getElementById("id_video");
video.addEventListener("touchstart", on_touch_video);
video.addEventListener("mousedown", on_touch_video);

//-------------------------------------
function on_cam(stream)
{
	video.srcObject = stream;
}
//-------------------------------------
function on_error(e)
{
	alert("Error: cannot connect to camera!");
}
//-------------------------------------
function on_touch_video(e)
{
	var canvas = document.getElementById("id_img");
	var ctx = canvas.getContext("2d");
	ctx.drawImage(video, 0, 0);
}
//-------------------------------------