function imagefun() {
    var Image_Id = document.getElementById('getImage');
    if (Image_Id.src.match("assets/images/crab.png")) {
        Image_Id.src = "assets/images/seahorse.png";
        Image_Id.src = "assets/images/fish.png";
        Image_Id.src = "assets/images/octopus.png";
    }
    else {
        Image_Id.src = "assets/images/crab.png";
    }
}          
