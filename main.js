function showClock() {
    var date = new Date();

    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var session = 'AM';
    var day = date.getDay()
    var days = date.getDate();
    var month = date.getMonth() + 1 ;
    var year = date.getFullYear();

    if( hours == 0 ){
        hours = 12 ;
    }
    if( hours > 12){
        hours = hours - 12 ;
        session = 'PM';
    }

    var week = ['Sunday' , 'Monday' , 'Tuesday' , 'Wednesday' , 'Thursday' , 'Friday' , 'Saturday']

    

    hours = ( hours < 10 ) ? '0' + hours : hours  ;
    minutes = ( minutes < 10 ) ? '0' + minutes : minutes ;
    seconds = ( seconds < 10 ) ? '0' + seconds : seconds ; 
    days = ( days < 10 ) ? '0' + days : days ;
    month = ( month < 10 ) ? '0' + month : month ; 
    
    var time = `${hours} : ${minutes} : ${seconds} ${session}`
    var day =  `${week[day]} / ${days} / ${month} / ${year}`
    document.getElementById('myClocks').innerHTML = time ;     
    document.getElementById('myClocks').innerText = time ;
    document.getElementById('mydays').innerHTML = day ;
    document.getElementById('mydays').innerText = day ;

    setTimeout(showClock,1000);
}
showClock();