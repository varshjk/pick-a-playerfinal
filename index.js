let playerNames = [];


const getPlayers = ()=>{
    let data = "";
    playerNames.map((names,index)=>{
    
    data = data + "<p class = 'namespara'>" + names + "</p>";

    })
    console.log(playerNames);
    document.getElementById("displaynames").innerHTML = data;

}


const addPlayers = ()=>{
    let inputName = document.getElementById("pname").value;
    if(inputName.match(/^ *$/) !== null || inputName === ""){
        playerNames = playerNames;
    }else{
    playerNames.push(inputName);
    }
    
    getPlayers();
    document.getElementById("pname").value = "";

}

generatePlayer = ()=>{
    getPlayers();
    document.getElementById("displaynames").innerHTML = "";
    if(playerNames.length==0){
        document.getElementById("displaynames").innerText = "";

    }else{
        let data = "<h1> And I Pick <h1>  <p class = picknamepara>" + playerNames[Math.floor(Math.random()*playerNames.length)] + "</p>";
        document.getElementById("displaynames").innerHTML = data;
    }
   


}

const clearall = ()=>{
    playerNames = [];
    document.getElementById("displaynames").innerText = "";

}
