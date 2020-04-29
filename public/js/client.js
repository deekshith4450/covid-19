const countryForm=document.querySelector('form')
const search=document.querySelector('input')
const message_1=document.getElementById('message-1')
const message_2=document.getElementById('message-2')
const message_3=document.getElementById('message-3')
const country_data=document.getElementById('ex')
const country_data2=document.getElementById('ex2')
const country_data3=document.getElementById('ex3')


countryForm.addEventListener('submit',(e) =>{
    e.preventDefault()
    const country=search.value
    // console.log(country)
    // country_data.classList.remove('country_style')
    message_1.textContent='Loading.....'
    message_2.textContent=' '
    message_3.textContent=' '
    fetch('/country_data?country_name='+ country).then((response) =>{
        response.json().then((data) =>{
            if(data.error){
                message_1.textContent=data.error
                console.log(data.error)
            }
            else{
                console.log(data.TotalConfirmed)
                console.log(data.TotalRecovered)
                console.log(data.TotalDeaths)
            }

            message_1.textContent="Total confirmed : "+data.TotalConfirmed
            message_2.textContent="Total Recoverd : "+data.TotalRecovered
            message_3.textContent="Total Deaths : "+data.TotalDeaths
            country_data.classList.add('card')
            country_data.classList.add('style')
            country_data2.classList.add('card')
            country_data2.classList.add('style2')
            country_data3.classList.add('card')
            country_data3.classList.add('style3')

        })
    })
})