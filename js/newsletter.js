var height = $(window).height() *.85;
var width = $(window).width() *.75;
var newsletter = ("#newsletter");

window.addEventListener('resize', function(e){
    var size = resize(newsletter);
    $(newsletter).turn('size', size.width,size.height);
});

$(newsletter).turn({
    width:width,
    height: height,
    autoCenter: true
});

function resize(el){
    el.style.width = '';
    el.style.height = '';

    var width = el.clientWidth,
        height = Math.round(width / this.ratio),
        padded = Math.round(document.body.clientHeight *.9);

    if(height > padded){
        height = padded;
        width = Math.round(height * this.ratio);
    }
}

$("#prevBtn").click(function(){
    $("#newsletter").turn("previous");
});

$("#nextBtn").click(function () {
    $("#newsletter").turn("next");
});
