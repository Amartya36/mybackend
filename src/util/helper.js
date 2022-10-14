function currentdate(){
    const dd = new Date().getDate()
console.log("current date")
return dd}
function currentmonth(){
    const mm = new Date().getMonth()+1
console.log("current month")
return mm}
function getBatchInfo(){
const batchName="Lithium"
const weakday ="w3d5"
const topic ="Todays topic is ,How to creat modual and export"
const a = (batchName, weakday , topic)
return a
}
module.exports.day = currentdate
module.exports.month = currentmonth
module.exports.batchinfo=getBatchInfo