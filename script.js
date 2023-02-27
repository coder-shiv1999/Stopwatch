var hr = "0";
var min = "0";
var sec = "0";
var count = "0";
var timer = false;
function start(){
    timer = true;
    stopwatch();
}
function stop(){
    timer = false;
}
function reset(){
    timer = false;
    hr = "0";
    min = "0";
    sec = "0";
    count = "0"; 
    document.getElementById("hr").innerHTML = hr;
        document.getElementById("min").innerHTML = min;
        document.getElementById("sec").innerHTML = sec;
        document.getElementById("ms").innerHTML = count;
}
function stopwatch(){
    if(timer == true){
        count++;
        if(count == 70){
            sec++;
            count = "00";
            // var secstring = "0"+"sec";
        }
        if(sec == 60){
            min++;
            sec = "00";
        }
        if(min == 60){
            hr++;
            min ="00";
            sec = "00"; 
        }
        var hrstring = hr;
        var minstring = min;
        var secstring = sec;
        var countstring = count;
        if(hr<10){
            hrstring = "0" + hrstring;
        }
        if(min<10){
            minstring = "0" + minstring;
        }
        if(sec<10){
            secstring = "0" + secstring;
        }

        document.getElementById("hr").innerHTML = hrstring;
        document.getElementById("min").innerHTML = minstring;
        document.getElementById("sec").innerHTML = secstring;
        document.getElementById("ms").innerHTML = countstring;
        setTimeout("stopwatch()",10);
    }
}