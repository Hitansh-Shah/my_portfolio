
window.onload = function() {
    const textHeight = window.matchMedia('(max-width: 620px)').matches? 12: 25
    var options = {
        textColour: 'rgb(255, 111, 0)',
        activeCursor: 'default',
        minBrightness: 0.2,
        noSelect: true,
        wheelZoom: false,
        textHeight: textHeight,
        maxSpeed: 0.1
    };

    // try {
    //     TagCanvas.Start('myCanvas', '', options);
    // } catch(e) {
    //     console.log(e)
    //     document.getElementById('myCanvasContainer').style.display = 'none';
    // }
    let count = 0;
    while(true) {
        if(count <=2) {
            count++;
            try {
                console.log("Working?")
                TagCanvas.Start('myCanvas', '', options);
                break
            } catch(e) {
                console.log(e)
            }
        } else {
            document.getElementById('myCanvasContainer').style.display = 'none';
            break
        }
    }
}
