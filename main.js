window.onload = function(){
    //createHead();
}

function createHead(){
    for(var i = 0; i < 51; i ++){
       $("#head").append("<img src='grand-canyon-jump.jpg'/>");
    }
    $("#head img").css({
            "width" : "55px",
            "height" : "50px"
            }
        );
}
