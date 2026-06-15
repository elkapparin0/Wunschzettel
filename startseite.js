const playerCount = document.getElementById("playerCount");
const playerInputsDiv = document.getElementById("playerInputs");

function createPlayerInputs(count) {
    playerInputsDiv.innerHTML = ""; 

    for (let i = 1; i <= count; i++) {

        const input = document.createElement("input");
        input.type = "text";
        input.id = `player${i}`;
        input.placeholder = `Name von Spieler ${i}`;

        const br = document.createElement("br");

        playerInputsDiv.appendChild(input);
        playerInputsDiv.appendChild(br);
    }
}

document.getElementById("btnStart").addEventListener("click", () => {
    const count = Number(playerCount.value);
    const players = [];

    for (let i = 1; i <= count; i++) {
        const name = document.getElementById(`player${i}`).value || `Spieler ${i}`;
        players.push(name);
    }
    localStorage.setItem("players", JSON.stringify(players));
    if(count != 0){
       window.location.href = "imposter.html"; 
    }
});

playerCount.addEventListener("input", () => {
    const count = Number(playerCount.value);
    createPlayerInputs(count);
});
