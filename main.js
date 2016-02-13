function leapYear(){
    var year = document.getElementById("year").value;
    var leap = false;
    if(year % 4 == 0){
        if(year % 100 == 0){
            if(year % 400 == 0){
                leap = true;
            }
        }
    }
    if(leap == true){
        window.alert("Leap year");
    }
    else{
        window.alert("Not leap year")
    }

}
document.getElementById("submit").addEventListener("click", leapYear, false);
