export const removeEncodingSting = (str:string):string=>{
    /*
    Input -> Your%20Name
    Output -> Your Name
    Removes encoding from params
    */
   return str.replace(/%20/g, ' ')
} 