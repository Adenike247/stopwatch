var hr=0;
var min=0;
var sec=0;
var count=0;


var temp=false;

// startbtn 
function start(){
   temp=true;
   stopwatch();
   document.getElementById('start').style.display="none";
   document.getElementById('pause').style.display="block";

}
// stopbtn
function stop(){
    temp=false;
    document.getElementById('pause').style.display="none";
    document.getElementById('start').style.display="block";
}
// reserbtn
function reset(){
    temp=false;
     hr=0;
     min=0;
     sec=0;
     count=0;



    
    //  i want to show 00 as previous value on body by resetbtn
    // its work like refresh button

     document.getElementById('count').innerHTML=count;
        document.getElementById('sec').innerHTML=sec;
        document.getElementById('min').innerHTML=min;
        document.getElementById('hr').innerHTML=hr;
        document.getElementById('pause').style.display="none";
        document.getElementById('start').style.display="block";
}

// main stopwatch fuction

function stopwatch(){
    if (temp==true){
        count=count+1;


     // when count on 100 then second start change and count will be start again from 0
        if (count==100) {

           sec=sec+1;
           count=0; 
        }

     // when second on 60 the minute start change and seconds will be start again from 0

     if (sec==6) {  
        min=min+1;
        sec=0; 
     }
     // when minute on 60 then hours start change and seconds & minute  will be start again from 0
     if (min==60) {
        hr=hr+1;
        sec=0; 
        min=0;


     }



    }
     // here i want to show just like that 00:01:03 i.e start change with 0

// add extra string "0" with running tiome on stopwatch
      var hrstr=hr;
      var minstr=min;
      var secstr=sec;
      var countstr=count;

    //   add string "0" when hr is smaller than 0 i.e. 03 hr
      if(hr<10){
        hrstr="0"+hrstr;
      }

    // add string "0"when min is smaller than 0 i.e. 03 min
     
     if(min<10){
        minstr="0"+minstr;
      }
        
    // add string "0"when sec is smaller than 0 i.e. 03 sec
     
     if(sec<10){
        secstr="0"+secstr;
      }

     // add string "0"when sec is smaller than 0 i.e. 03 sec
     
     if(count<10){
        countstr="0"+countstr;
      }
// i want to show just like format on running time
// i.e 01hr:03min:04sec starting string is 0
//  not with single 0 i.e 1hr 2min 3sec



     // to print hr min sec on body
        document.getElementById('count').innerHTML=countstr;
        document.getElementById('sec').innerHTML=secstr;
        document.getElementById('min').innerHTML=minstr;
        document.getElementById('hr').innerHTML=hrstr;

        setTimeout("stopwatch()",10);


}

document.getElementById('dark').style.display="none";

document.querySelector('.belt').onclick = () =>{
    let themeButtons = document.querySelectorAll('.theme-buttons');

    themeButtons.forEach(color =>{
        color.addEventListener('click', () =>{
        let dataColor = color.getAttribute('data-color');
        document.querySelectorAll('.theme-buttons').style.setProperty('#000',dataColor)
        });
    });
}

