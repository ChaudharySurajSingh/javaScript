/*getDate() :return the current date according to the local time zone  */
console.log(new Date().getDate());// return the current date of the day
let date = new Date("aug 19 1947 15:21:30:25");
console.log(date.getDate());//return  the date associated with the date variable

/*getDay(): return the current weak number of the month according to the lacal time */
console.log(new Date().getDay());//return the weak number of the month
console.log(date.getDay());//return the first weak of the month 

/*getFullYear():return the current year according to the local time */
console.log(new Date().getFullYear());//return the current year
console.log(date.getFullYear());//return 2002 bkz i associted it with year
/*getMonth(): return the current month according to the local time and return passed month if we pass the argument  */


console.log(new Date().getMonth()+1);
console.log(date.getMonth());//8
/*getHours():return the hours aassocited with date and return the argumented hour if we passed */
console.log(new Date().getHours());
console.log(date.getHours());//15
/*getMinutes() return the current minute or argemented minute if passed (accorfing the the local time)*/
console.log(new Date().getMinutes());
console.log(date.getMinutes());//21

/*getSecond(), getMilliSecond():return the current second or milisecond or argumented if any */
console.log(new Date().getSeconds());
console.log(new Date().getMilliseconds());
/*getTime(): return the current time or argument time if any */
console.log(new Date().getTime().toString());
let current = new Date().getTime();
console.log(current.toString());
console.log(date.getTime().toString());
/*getTimeZoneoffset(): return the local time zone */
console.log(new Date().getTimezoneOffset());


const today = new Date();
const milliseconds = today.getUTCMilliseconds();
console.log(milliseconds);
console.log(new Date().getTimezoneOffset());
let date3= new Date('2016 aug 19');
console.log(date3.toString());
date3.setDate(14)
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
console.log(date3.toString());
console.log(date3.toLocaleDateString('ko-er', { timeZone: 'UTC' }));
// Depending on timezone, your results will vary
const event = new Date('August 19, 1975 23:15:30 GMT+00:00');

console.log(event.toLocaleTimeString('en-US'));
// Expected output: "1:15:30 AM"

console.log(event.toLocaleTimeString('it-IT'));
// Expected output: "01:15:30"

console.log(event.toLocaleTimeString('ar-EG'));