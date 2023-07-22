// export const getDate  = (date:Date)=>{
//      const formattedDate = date.toLocaleDateString('en-GB', {
//         day: 'numeric', month: 'short', year: 'numeric'
//     }).replace(/ /g, ' ');
//     return `${formattedDate} ${date.getHours()}:${date.getMinutes()}`
// }
export function getDate(date:Date) {
    const currentDate = new Date();
    const inputDate = new Date(date);
    const timeDiff = currentDate.getTime() - inputDate.getTime();
    const oneMinute = 60 * 1000;
    const oneHour = 60 * oneMinute;
    const oneDay = 24 * oneHour;
    const threeDays = 3 * oneDay;
  
    if (timeDiff < oneHour) {
      const minutesAgo = Math.floor(timeDiff / oneMinute);
      return `${minutesAgo} ${minutesAgo === 1 ? 'minute' : 'minutes'} ago`;
    } else if (timeDiff < oneDay) {
      const hoursAgo = Math.floor(timeDiff / oneHour);
      return `${hoursAgo} ${hoursAgo === 1 ? 'hour' : 'hours'} ago`;
    } else if (timeDiff < threeDays) {
      const daysAgo = Math.floor(timeDiff / oneDay);
      return `${daysAgo} ${daysAgo === 1 ? 'day' : 'days'} ago`;
    } else {
      const day = inputDate.getDate();
      const month = inputDate.toLocaleString('default', { month: 'short' });
      const year = inputDate.getFullYear();
      return `${month} ${year}`;
    }
  }
  