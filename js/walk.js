const sprite = document.getElementById("spriteWalk")

var topConst = 45
var leftConst = 29.5

var topS = 45
var leftS = 27.5

var turn1Pecentage = 15
var turn2Pecentage = 25


var topstring = top+"vw"
console.log(topstring)
sprite.style.width = "7vw"
sprite.style.position = "absolute"
sprite.style.zIndex = "10"
sprite.style.top = topS + "vw"
sprite.style.left = leftS + "vw"

var scrollpercentOriginal = 0;

window.addEventListener('scroll', () => {
    scrollPercent = getScrollPercent()
    var scollDiff = scrollPercent - scrollpercentOriginal

    console.log(scollDiff)

    scrollpercentOriginal=scrollPercent

    if(scrollPercent < turn1Pecentage){
        topS = 2.5*getScrollPercent() + topConst
        sprite.src = "images/spriteFront.png"
        sprite.style.left = "27.5vw"
        sprite.style.top = topS + "vw"
    }
    if(scrollPercent > turn1Pecentage && scrollPercent < turn2Pecentage){
        leftS = 4*(getScrollPercent()-turn1Pecentage)+leftConst
        sprite.src = "images/spriteRight.png"
        sprite.style.left = leftS + "vw"
    }
  
})

  function getScrollPercent() {
    var h = document.documentElement, 
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';
    return (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
}