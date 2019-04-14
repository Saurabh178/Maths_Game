var playing = false;
var score;
var count;
var rem;
var correct;

document.getElementById("start").onclick = function(){
    if(playing == true){
        location.reload();
    }
    else{
        playing = true;
        score = 0;
        document.getElementById("scorevalue").innerHTML = score;
        display1("timeleft");
        rem = 120;
        document.getElementById("timevalue").innerHTML = rem;
        hide("gameover");
        document.getElementById("start").innerHTML = "Reset Game";
        counter();
        question();
        
    }
}

for(i=1;i<5;i++){
    document.getElementById("box" + i).onclick = function(){
        if(playing == true){
            if(this.innerHTML == correct){
                score+=2;
                document.getElementById("scorevalue").innerHTML = score;
                display1("correct");
                hide("wrong");
                setTimeout(function(){
                    hide("correct");
                },1000);
                question();
                
            }
            else{
                score--; document.getElementById("scorevalue").innerHTML = score;
                display1("wrong");
                hide("correct");
                setTimeout(function(){
                    hide("wrong");
                },1000);
            }
        }
    }
}
    
function counter(){
        count = setInterval(function(){
        rem-=1;
        document.getElementById("timevalue").innerHTML = rem;
        if(rem == 0){
            clearInterval(count);
            display1("gameover");
            document.getElementById("total").innerHTML = score;
            hide("timeleft");
            hide("correct");
            hide("wrong");
            playing = false;
            document.getElementById("start").innerHTML = "Start Game";
        }
            
        },1000);

}
    
function display1(flag){
    document.getElementById(flag).style.display = "block";
}

function hide(flag){
    document.getElementById(flag).style.display = "none";   
}
    
function question(){
    var x = 1+Math.round(19*Math.random());
    var y = 1+Math.round(9*Math.random());
    correct = x*y;
    document.getElementById("question").innerHTML = x + "x" + y;
    
    var place = 1 + Math.round(3*Math.random());
    document.getElementById("box" + place).innerHTML = correct;
    
    var array = [correct];
    for(i=1;i<5;i++){
        if(i!=place){
            do{
            var wrong = (1+Math.round(19*Math.random()))*(1+Math.round(9*Math.random()));
        }while(array.indexOf(wrong)>-1)
        document.getElementById("box" + i).innerHTML = wrong;
        array.push(wrong);
        }
    }
}
