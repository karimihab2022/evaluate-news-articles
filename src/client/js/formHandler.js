// import { checkURL } from "./URLch"

const postData = async (url = '', info = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(info)
    })
    try {
        return await response.json()    
    } catch (error) {
        console.log("ssss")
    }
}    

function handleSubmit(e) {
    e.preventDefault()
 
    let urltext=document.getElementById("url").value;
    if(Client.checkURL(urltext)) {
        postData("http://localhost:8081/addurl", {urltext}).then(data => {
          document.getElementById('a').innerHTML = `model: ${data.model}`;
          document.getElementById('b').innerHTML = `score-tag: ${data.score_tag}`;
          document.getElementById('c').innerHTML = `status code: ${data.status.code}`;
    
        })
    } else {
        alert('this url is not exist')
    }
}    

export { handleSubmit }