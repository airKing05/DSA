//fie#03

// conver given 12 hr time to 24 hr timeing
// 01:30 PM -> 13:30

function time12to24(strTime12){
    let [time, modifer] = strTime12.split(" ");
    let [hr, mm] = time.split(":");

    if(hr == 12) hr = 00;
    if(modifer == 'PM') hr = parseInt(hr)+12;

    return `${hr}:${mm}`;
}
console.log(time12to24("12:00 PM"))
console.log(time12to24("05:05 PM"))
console.log(time12to24("12:05 AM"))

