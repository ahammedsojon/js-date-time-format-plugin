/****************** Basic Info *****************/

YYYY = year (E.g. 2023) <br/>
MM = month (E.g. 05) <br/>
DD = date (E.g. 29) <br/>
MF = month name (E.g. Sep) <br/>

hh = hour (E.g. 10) <br/>
mm = minutes (E.g. 05) <br/>
ss = hour (E.g. 59) <br/>


/************ Some Basic Format **********/

date = YYYY-MM-DD (default) <br/> 
time = hh:mm:ss (default) <br/>
date with month name = DD MF, YYYY <br/> 



/****************** Basic Usage *****************/

First make an instance of class (DateTimeFormatter). Then call a method named format. This method takes two parameter
as argument. First one is the element id, and the second one is an object (optional), where you can set your desire property to format the date and time. <br/>

Options object have three properties. Example: <br/>

const options = { <br/>
    date: new Date(), // you can pass specified a date into Date() object (E.g. 2023-05-29) <br/>
    dateFormat: 'YYYY-MM-DD', // you can modify this ascending or descending order <br/>
    timeFormat: 'hh:mm:ss' <br/>
} <br/>

const formatter = new DateTimeFormatter(); <br/>
formatter.format('#display', options); <br/>
