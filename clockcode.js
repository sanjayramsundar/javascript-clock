function currentTime() {
    var date = new Date();
    var hour = date.getHours();   
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    hour = updateTime(hour);
    minutes = updateTime (minutes);
    seconds = updateTime(seconds);
     

        var t = settimeout(function(){ currentTime() }, 1000);
}

function updateTime(){
    
}

currentTime()