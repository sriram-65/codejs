let API_URL = "https://frontend-monster-iota.vercel.app"

const GetButton = (buttonid , text="button" , font="monospace" , fontsize="18" , classname="button" , icon=false , idname="button") =>{
    fetch(`${API_URL}/button?classname=${classname}&font=${font}&fontSize=${fontsize}$icon=${icon}$idname=${idname}`)
    .then(res=>res.text())
    .then(data=>{
        document.getElementById(buttonid).innerHTML = data
        document.getElementById("text-content-button").innerText = text
    })
    console.lof("....hi")
}
