function change() {
    if (document.getElementById("box").className === "box_OFF") {
        document.getElementById("box").className = 'box_ON'
        document.getElementById("light").src = 'lightbulb_ON.svg'
        
    } else {
        document.getElementById("box").className = 'box_OFF'
        document.getElementById("light").src = 'lightbulb_OFF.svg'
        }
}