function time(){
    var czas = new Date();

    var hour = czas.getHours();
    if(hour<10){
        hour = "0" + hour;
    }
    var min = czas.getMinutes();
    if(min<10){
        min = "0" + min;
    }
    var sec = czas.getSeconds();
    if(sec<10){
        sec = "0" + sec;
    }

    document.getElementById("zegar").innerHTML = hour+":"+min+":"+sec;

    setTimeout("time()",1000);
}