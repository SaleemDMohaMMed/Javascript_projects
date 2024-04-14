// access the element  ('let' or 'const'or 'var')
//accessed the display timer using dom
let Display=document.querySelector('.Displaytimer')

//initialize value to zero
let [hours,minutes,seconds,milliseconds]=[0,0,0,0]
let int=null


//Start
//let start=document.getElementById('.')
document.getElementById('Startbtn').addEventListener('click',()=>{
    if(int!==null){
        clearInterval(int)
    }
        int=setInterval(Displaytimer)
})

//stop
document.getElementById('Stopbtn').addEventListener('click',()=>{
    clearInterval(int)

})



//reset
document.getElementById('Resetbtn').addEventListener('click',()=>{
    clearInterval(int)
    let [hours,minutes,seconds,milliseconds]=[0,0,0,0]
    Display.innerHTML=`00:00:00:00`

})


//display timer function
function Displaytimer(){
    milliseconds++
    if(milliseconds==1000){
        milliseconds=0
        seconds++
        if(seconds==60){
            seconds=0
            minutes++
            if(minutes==60){
                minutes=0
                hours++
            }
        }
    }
    let h=hours<10? '0' +hours:hours
    let m=minutes<10? '0' +minutes:minutes
    let s=seconds<10? '0' +seconds:seconds
    let ms=milliseconds<10? '00' +milliseconds:milliseconds <100? '0' +milliseconds:milliseconds
    Display.innerHTML=`${h}:${m}:${s}:${ms}`

}


