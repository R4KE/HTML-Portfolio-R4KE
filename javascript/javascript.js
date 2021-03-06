/* openen en sluiten van menu (width in px) */

function openNav() {
    document.getElementById("Zijkant").style.width = "200px";
}

function closeNav() {
    document.getElementById("Zijkant").style.width = "0";
}

/* smooth scroll naar beneden (dankje jochem :D ) */

function scrollTo(to, duration) {
    if (document.body.scrollTop == to) return;
    var diff = to - document.body.scrollTop;
    var scrollStep = Math.PI / (duration / 10);
    var count = 0, currPos;
    start = window.pageYOffset;
    scrollInterval = setInterval(function(){
        if (document.body.scrollTop != to) {
            count = count + 1;
            currPos = start + diff * (0.5 - 0.5 * Math.cos(count * scrollStep));
            document.body.scrollTop = currPos;
            console.log("scrolling");
        }
        else { clearInterval(scrollInterval); }
    },10);
}

function test(elID)
{
    var dest = document.getElementById(elID);
    scrollTo(dest.offsetTop, 500);
}
