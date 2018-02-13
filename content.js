showHide();

function showHide() {
    var el = document.getElementsByClassName("athing");
    for(var x = 0; x < el.length; x++){
        var e = el[x].getElementsByClassName('storylink')[0];
        console.log(e.href);
    };
}