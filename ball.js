//Set global variable that would contain the position, velocity and the html element "ball"
//aqua red ball
var ball = document.getElementById("ball");
var velocity = 25;
var positionX = 0;
var positionY = 0;
var reverse = false;
var reverseY =  false;

var backdrop = document.getElementById("backdrop")
var bounce = document.getElementById("bounce")
//Big Magenta 
var ball2 = document.getElementById("ball2");
var velocity2 = 15;
var positionX2 = 0;
var positionY2 = 0;
var reverse2 = true;
var reverseY2 =  true;
//white ball
var ball3 = document.getElementById("ball3");
var velocity3 = 27;
var positionX3 = 0;
var positionY3 = 0;
var reverse3 = false;
var reverseY3 =  false;
//yellow ball
var ball4 = document.getElementById("ball4");
var velocity4 = 40;
var positionX4 = 0;
var positionY4 = 0;
var reverse4 = false;
var reverseY4 =  false;

//write a function that can change the position of the html element "ball"
function moveBall() {
  // two fixed x-axis coordinates (you will use these variable in step 3)
    var Xmin = 0;
    // var Xmax = document.body.clientWidth - velocity;
    var Xmax = 1200;
    var Ymin = 0;
    var Ymax = 500; //document.body.clientHeight - velocity;

//console.log(positionY, Ymax);
    //BALL 1
    if(reverse == true) {
        positionX -= velocity;
        // console.log(reverse + " this should be true");
        if (positionX <= Xmin) reverse = false;
        ball.style.left = positionX + 'px';
        ball.style.background = 'blue';
        backdrop.style.background = 'yellowgreen';
        bounce.style.color = 'magenta';
        
    } else  {
        // console.log(reverse + "this is else and should be false");
        positionX += velocity;
     
        if (positionX >= (Xmax - 70)) reverse = true;
        ball.style.left = positionX + 'px';
        ball.style.background = 'orange';
        backdrop.style.background = 'rebeccapurple';
        bounce.style.color = 'yellow';
    }

    if(reverseY == true) {
        positionY -= velocity;
        if (positionY <= (Ymin )) reverseY = false;
        ball.style.top = positionY + 'px';
        ball.style.background = '#ff1493';
        backdrop.style.background = 'black';
        bounce.style.color = 'white';
    } else  {
        positionY += velocity;
        if (positionY >= (Ymax - 50)) reverseY = true;
        ball.style.top = positionY + 'px';
        ball.style.background = 'aqua';
        backdrop.style.background = '#bf00ff';
        bounce.style.color = 'black';
    }
/*****************************************BALL 2********************************************************* */
    //BALL 2 big magenta 
    if(reverse2== true) {
        positionX2 -= velocity2;
        if (positionX2 <= (Xmin ) ) reverse2 = false;
        ball2.style.left = positionX2 + 'px';
        ball2.style.background = 'lime'; 
    } else  {
    positionX2 += velocity2;
    if (positionX2 >= (Xmax - 50)) reverse2 = true;
    ball2.style.left = positionX2 + 'px';
    ball2.style.background = 'magenta';
    }
    
    if(reverseY2 == true) {
        positionY2 -= velocity2;
        if (positionY2 <= (Ymin)) reverseY2 = false;
        ball2.style.top = positionY2 + 'px';
        ball2.style.background = 'lime';
    } else  {
        positionY2 += velocity2;
        if (positionY2 >= (Ymax - 50)) reverseY2 = true;
        ball2.style.top = positionY2 + 'px';
        ball2.style.background = 'magenta';
}
/*****************************************BALL 3********************************************************* */
    //BALL 3 WHITE
    if(reverse3== true) {
        positionX3 -= velocity3;
        if (positionX3 <= Xmin + 50) reverse3 = false;
        ball3.style.left = positionX3 + 'px';
        
    } else  {
        positionX3 += velocity3;
        if (positionX3 >= Xmax - 50) reverse3 = true;
        ball3.style.left = positionX3 + 'px';
    }
    
    if(reverseY3 == true) {
        positionY3 -= velocity3;
        if (positionY3 <= Ymin + 50) reverseY3 = false;
        ball3.style.top = positionY3 + 'px';
    } else  {
        positionY3 += velocity3;
        if (positionY3 >= Ymax - 200) reverseY3 = true;
        ball3.style.top = positionY3 + 'px';
    }
/*****************************************BALL 4********************************************************* */
    //BALL 4  YELLOW
    if(reverse4 == true) {
        positionX4 -= velocity4;
        if (positionX4 <= (Xmin )) reverse4 = false;
        ball4.style.left = positionX4 + 'px';
        ball4.style.background = 'yellow';
      } else  {
        positionX4 += velocity4;
        if (positionX4 >= (Xmax - 100)) reverse4 = true;
        ball4.style.left = positionX4 + 'px';
        // ball4.style.background = 'orange';
      }
    
     if(reverseY4 == true) {
        positionY4 -= velocity4;
        if (positionY4 <= (Ymin ) ) reverseY4 = false;
        ball4.style.top = positionY4 + 'px';
        ball4.style.background = 'yellow';
      } else  {
        positionY4 += velocity4;
        if (positionY4 >= (Ymax - 150)) reverseY4 = true;
        ball4.style.top = positionY4 + 'px';
        // ball4.style.background = 'orange';
      }

}
// This call the moveBall function every 100ms
setInterval(moveBall, 100);
