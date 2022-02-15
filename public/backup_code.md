```javascript
// main
    const view_width = window.screen.width; //document.body.offsetWidth\
    const view_height = document.getElementById("root").clientHeight;
    const progress = {
        width: scrollMV/view_height*100 + '%',
        transition: 0.05 + 's'
    }

    <div className= section_progress} style={progress}></div>

    <div>{scrollMV}/{view_height}</div>

```