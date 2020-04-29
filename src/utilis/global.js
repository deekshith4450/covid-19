const request = require('request')
const url ='https://api.covid19api.com/summary'
function Global(callback){
    request({url:url,json:true},function(error,response){
        if(error){
            callback("Unable to connect to internet",undefined)
        }
        else{
            // console.log(response.body.Global.TotalConfirmed)
            // console.log(response.body.Global.TotalDeaths)
            // console.log(response.body.Global.TotalRecovered)
            const data=response.body
            callback(undefined,data)
        }
    })
}
module.exports=Global