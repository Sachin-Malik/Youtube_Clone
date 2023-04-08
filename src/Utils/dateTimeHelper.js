const getDateObject = (date) => {
    const dateObject = {};
    dateObject['year']=date.getFullYear();
    dateObject['month']=date.getMonth();
    dateObject['day']=date.getMonth();
    dateObject['hour']=date.getHours();
    dateObject['minute']=date.getMinutes();
    return dateObject;
}

export const uploadedTime = (publishTime) => {
    const publishDate =getDateObject(new Date(publishTime));
    const todayDate = getDateObject(new Date());
    if(todayDate.year>publishDate.year){
        return `${todayDate.year-publishDate.year} years ago`;
    }else if(todayDate.month>publishDate.month){

        return `${todayDate.month-publishDate.month} months Ago`;
    }else if(todayDate.day>publishDate.day){

        const diff = todayDate.day-publishDate.day;
        if(diff>6) return `${diff/7} week${diff/7>1?s:''} ago`
        return `${todayDate.day-publishDate.day} days ago`;
    } else if(todayDate.hour>publishDate.hour){
        return `${todayDate.hour-publishDate.hour} hours ago`;
    } else if(todayDate.hour<publishDate.hour){
        return `${24+ todayDate.hour - publishDate.hour} hours ago`;
    }
    else if(todayDate.minute>publishDate.minute){
        return `${todayDate.minute-publishDate.minute} minutes ago`;
    }else{
        return 'just now'
    }
}