//your JS code here. If required.
const timer=document.getElementById("timer")
setInterval(()=>{
    const currTime=new Date()
    timer.innerText=(currTime.toLocaleDateString())+", "+(currTime.toLocaleTimeString())
},1000)