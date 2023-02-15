function changeText(el){

    get_shorted().then(data=>{
        console.log(data)
    })
    document.getElementById('shorted').innerText = el.value
    
}

async function get_shorted(){
    const path = 'http://127.0.0.1:5000/shorturl/api/v1.0/urls'
    let data = []
    try{
        const response = await axios.post(path)
        console.log(response.status)
        data = response.data
    }
    catch (error){
        console.error(error)
    }
    return data
}   