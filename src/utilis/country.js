const request = require('request')
const url='https://api.covid19api.com/summary'
function country(countryName,callback){
    request({url:url,json:true},function(error,response){
        if(error){
            callback('unable to connect to internet',undefined)
        }
        else{
            const data=response.body.Countries.find(c => c.Country.toLowerCase() === countryName)
            callback(undefined,data)

        }    
    })
}
module.exports=country