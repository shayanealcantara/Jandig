/*
window.mobileAndTabletcheck = function() {
    var check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
};


function takePicture() {


    const scene = document.getElementsByTagName("canvas")[0];
    var ctx = scene.getContext("2d");
    pictureURI = scene.toDataURL("image/png");

    if(window.mobileAndTabletcheck()) {
        let image = new Image();
        image.src = pictureURI;
        flipImage(scene, scene.width, scene.height);
        return
    }

    let link = document.getElementById("picture-link")
    link.href = pictureURI
    link.download = getPhotoFileName('png')
    link.click()
}

function flipImage(image, width, height){
  var myCanvas=document.createElement("canvas");
  var myCanvasContext=myCanvas.getContext("2d");
  let link = document.getElementById("picture-link");


  var imgWidth=width;
  var imgHeight=height;
  
  myCanvas.width= imgWidth;
  myCanvas.height=imgWidth;
  myCanvasContext.drawImage(image,0,0);
  myCanvasContext.clearRect(0,0,myCanvas.width,myCanvas.height);
  myCanvasContext.save();
  myCanvasContext.translate(myCanvas.width/2,myCanvas.height/2);
  myCanvasContext.rotate(-90*Math.PI/180);
  myCanvasContext.drawImage(image,-width/2,-width/2);
  myCanvasContext.restore();

  var imageData=myCanvasContext.getImageData(0,0, width, height);
  myCanvas.width= imgHeight;

  myCanvasContext.putImageData(imageData,0,0,0,0, imageData.width, imageData.height);
  link.href = myCanvas.toDataURL("image/png");
  link.download = getPhotoFileName('png');
  link.click();
  myCanvasContext.restore();
}



function getPhotoFileName(extension) {
    const date = new Date();
    const day = formatSmallNumber(date.getDate());
    const month = formatSmallNumber(date.getMonth() + 1); // Months are counted from 0-11 here.
    const year = date.getFullYear();
    const hour = formatSmallNumber(date.getHours());
    const minutes = formatSmallNumber(date.getMinutes());
    const seconds = formatSmallNumber(date.getSeconds());
    const milli = date.getMilliseconds();
    return year + month + day + "_" + hour + minutes + seconds + milli + '.' + extension
}

function formatSmallNumber(number) {
    return (number < 10) ? "0" + number : number
}
*/

function isDesktop() {
    return !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent))
}

function takePicture() {


    const scene = document.getElementsByTagName("canvas")[0];
    var ctx = scene.getContext("2d");
    pictureURI = scene.toDataURL("image/png");

    if(!isDesktop()) {
        let image = new Image();
        image.src = pictureURI;
        flipImage(image);
        return
    }

    let link = document.getElementById("picture-link")
    link.href = pictureURI
    link.download = getPhotoFileName('png')
    link.click()
}

function flipImage(image){
    console.log('flipou a imagem')
  var myCanvas=document.createElement("canvas");
  var myCanvasContext=myCanvas.getContext("2d");

    var imgWidth=image.width;
    var imgHeight=image.height;
    myCanvas.width= imgWidth;
    myCanvas.height=imgWidth;
    myCanvasContext.drawImage(image,0,0);
    myCanvasContext.clearRect(0,0,myCanvas.width,myCanvas.height);
    myCanvasContext.save();
    myCanvasContext.translate(myCanvas.width/2,myCanvas.height/2);
    myCanvasContext.rotate(-90*Math.PI/180);
    myCanvasContext.drawImage(image,-image.width/2,-image.width/2);
    myCanvasContext.restore();
    var imageData=myCanvasContext.getImageData(0,0, imgHeight, imgWidth);
    myCanvas.width= imgHeight;

    myCanvasContext.putImageData(imageData,0,0,0,0, imageData.width, imageData.height);
    let link = document.getElementById("picture-link");
    link.href = myCanvas.toDataURL("image/png");
    link.download = getPhotoFileName('png');
    link.click();
    myCanvasContext.restore();
}



function getPhotoFileName(extension) {
    const date = new Date();
    const day = formatSmallNumber(date.getDate());
    const month = formatSmallNumber(date.getMonth() + 1); // Months are counted from 0-11 here.
    const year = date.getFullYear();
    const hour = formatSmallNumber(date.getHours());
    const minutes = formatSmallNumber(date.getMinutes());
    const seconds = formatSmallNumber(date.getSeconds());
    const milli = date.getMilliseconds();
    return year + month + day + "_" + hour + minutes + seconds + milli + '.' + extension
}

function formatSmallNumber(number) {
    return (number < 10) ? "0" + number : number
}