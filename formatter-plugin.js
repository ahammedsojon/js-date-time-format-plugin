(function (){
    function DateTimeFormatter(){}

    DateTimeFormatter.prototype.format = function (element, options = {}){
        const defaultOptions = {
            date: new Date(),
            dateFormat: 'YYYY-MM-DD',
            timeFormat: 'hh:mm:ss'
        }
        const extendOptions = {...defaultOptions, ...options}

        const {date, ...formatData} = extendOptions;

        const months = [
            'January', 'February', 'March', 'April',
            'May', 'June', 'July', 'August',
            'September', 'October', 'November', 'December'
        ];

        const pad = (value) => value > 10 ? value : '0' + value;

        const formatMap = {
            'YYYY': pad(date.getFullYear()),
            'MM': pad(date.getMonth() + 1),
            'DD': pad(date.getDate()),
            'hh': pad(date.getHours()),
            'mm': pad(date.getMinutes()),
            'ss': pad(date.getSeconds()),
            'MF': months[date.getMonth()]?.substr(0, 3),
        }
        let  formatString = Object.values(formatData).join(' ');
        console.log(date, formatString, 2)
        formatString = formatString.replace(/YYYY|MM|DD|hh|mm|ss|MF/g, (match) => formatMap[match])

       return  document.getElementById('display').textContent = formatString;
    }


    window.DateTimeFormatter = DateTimeFormatter;
})()



