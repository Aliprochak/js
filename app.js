/*
 -OPARETORS:
     -Arithemtics,
     +,-,*,%,/,++,--,
     let a = 30;
     let b = 20;
     let c = a+b;
     console.log(c);
     -Assigment ,
     =,=+,
     let a = 40;
     let c = a % 2;
     console.log(c)
     -Coparison, 
     == , === ,!=,!===;<,>,
     let a=10;
     let c= a % 2
     if(c==0){
        console.log("this is an even number!");
     }
     else{
        ("this is an odd number!");
     }
     -Logical,
     &&,//,!;
     let a =80;
     if(a >=80 && a<=100){
        console.log("+A");
     }
     eles{
        ("please enter the valid number")
     }
    */

     let light = document.querySelector('.light');
     let on = document.querySelector('.on');
     let off = document.querySelector('.off');
    

     on.addEventListener('click',function(){
        light.src=`https://www.w3schools.com/js/pic_bulbon.gif `
        
     });
     


     off.addEventListener('click',function(){
        light.src=`https://www.w3schools.com/js/pic_bulboff.gif`
     })
    



