const express = require("express")
const path =require('path')
const hbs=require('hbs')

const Global=require('./utilis/global')
const country=require('./utilis/country')
const app = express()
const port=process.env.PORT || 3000



const pathDirectory=path.join(__dirname,'../public')
const viewspath=path.join(__dirname,'../templates/views')
const partialspath=path.join(__dirname,'../templates/partials')

app.set('view engine','hbs')
app.set('views',viewspath)
hbs.registerPartials(partialspath)

app.use(express.static(pathDirectory))



app.get('',function(req,res){
    Global(function callback(error,data){
        if(error){
            return res.render('index',{error})
        }
        res.render('index',{title:'Global',
        TotalConfirmed:data.Global.TotalConfirmed,
        TotalRecovered:data.Global.TotalRecovered,
        TotalDeaths:data.Global.TotalDeaths    })
    })
    
    
})

app.get('/country',function(req,res){
    res.render('Countries',{title:'Country\'s Cases'})
})

app.get('/country_data',function(req,res){
    const country_name=req.query.country_name
    if(!country_name){
       return res.send('Please provide a valid country')
    }
    country(country_name,function(error,countryData){
        if(error){
            return res.send({error})
        }
        res.send({
            TotalConfirmed:countryData.TotalConfirmed,
            TotalRecovered:countryData.TotalRecovered,
            TotalDeaths:countryData.TotalDeaths

        })

    })

})

app.get('/countries-list',function(req,res){
    Global(function callback(error,data){
        if(error){
            return res.render('countries-list',{error})
        }
        res.render('countries-list',{data})


    })
    
})

app.get('/about',function(req,res){
    res.render('about',{title:'About page'})
})

app.get('/help',function(req,res){
    res.render('help',{title:'Help page'})
})

app.get('*',function(req,res){
    res.render('error',{title:"page not found"})
})

app.listen(port,function(){
    console.log("Server started at port"+ port)
})