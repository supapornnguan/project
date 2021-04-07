import moment from 'moment';
function dateToString(date) {
  if (date) {
   return moment(date).format('MMMM Do YYYY, h:mm:ss a')
  }
 return ''
}
function dateOnlyToString(date){
  if(date){
    return moment(date).format('MMMM Do YYYY')
  }
  return ''
}
export {dateToString}
export {dateOnlyToString}