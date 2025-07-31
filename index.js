let API_URL = "https://frontend-monster-iota.vercel.app"

const GetButton = (buttonid) =>{
    fetch(`${API_URL}/button`)
    .then(res=>res.text())
    .then(data=>document.getElementById(buttonid).innerHTML = data)
}
