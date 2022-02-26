//Write a JavaScript program to calculate days left until next Christmas.

today=new Date();
var chrisDate=new Date(today.getFullYear(), 11, 25);
if (today.getMonth()==11 && today.getDate()>25) 
{ chrisDate.setFullYear = (chrisDate.getFullYear()+1); 
}  
var one_day=1000*60*60*24; 
console.log(one_day);
console.log(chrisDate.getTime());
console.log(today.getTime());
console.log(Math.ceil((chrisDate.getTime()-today.getTime())/(one_day))+
" days left until Christmas!");

/* Output */

/* 302 days left until Christmas! */