


const localeMonths = {
    en: {
       month_names: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
       month_names_short: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    }
};

const localeDays = {
    en: {
      day_names: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
      day_names_short: ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
    }
};


export function addDays(date,daysToAdd){
  let outDate=new Date();
  outDate.setDate(date.getDate()+daysToAdd);
  return outDate;
}


export function deconstrucDate(date){
  day = currentDay.getDate(),
  month = currentDay.getMonth()+1, //January is 0!
  year = currentDay.getFullYear();
  return {year,month,day};
}

export function constructDate(year,month,day){
  const inDate = new Date(month+"/"+day+"/"+year);
  return isNaN(inDate.getTime())? null : inDate;
}


/*export function isPast(year, month, day){
  const today = ( new Date() ).setHours(0,0,0,0);
  const inputDate = new Date(month+"/"+day+"/"+year);
  return today > inputDate;
}*/

export function isPastDate(inDate){
  const today = ( new Date() ).setHours(0,0,0,0);
  return today > inDate;
}


export function isFutureDate(inDate){
  const today = ( new Date() ).setHours(0,0,0,0);
  //inDate.setHours(0,0,0,0);
  return today < inDate;
}

export function dateToString(date,separator=""){
  return date.getFullYear()+separator+(date.getMonth()+1)+separator+date.getDate();
}

export function getMonthName (lang = 'en') {
  lang = lang && (lang in localeMonths.locale) ? lang : 'en';
  return localeMonths[lang].month_names[this.getMonth()];
}
