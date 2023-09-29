/****************** Basic Info *****************/

YYYY = year (E.g. 2023)
MM = month (E.g. 05)
DD = date (E.g. 29)
MF = month name (E.g. Sep)

hh = hour (E.g. 10)
mm = minutes (E.g. 05)
ss = hour (E.g. 59)




/****************** Basic Usage *****************/

onFirst make an instance of class (DateTimeFormatter). Then call a method named format. This method takes two parameter
as argument. First one is the element id, and the second one is an object (optional), where you can set your desire property to format the date and time.

Options object have three properties. Example:

const options = {
    date: new Date(), // you can pass specified a date into Date() object (E.g. 2023-05-29)
    dateFormat: 'YYYY-MM-DD', // you can modify this ascending or descending order
    timeFormat: 'hh:mm:ss'
}

const formatter = new DateTimeFormatter();
formatter.format('#display', options);
