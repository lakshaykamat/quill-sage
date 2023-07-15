export const getDate  = (date:Date)=>{
     const formattedDate = date.toLocaleDateString('en-GB', {
        day: 'numeric', month: 'short', year: 'numeric'
    }).replace(/ /g, ' ');
    return formattedDate
}