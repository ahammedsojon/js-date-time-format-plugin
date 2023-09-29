const options = {
    date: new Date('1997-05-29'),
    dateFormat: 'DD MF, YYYY',
    timeFormat: 'hh:mm:ss'
}

const formatter = new DateTimeFormatter();
formatter.format('#display', options);
