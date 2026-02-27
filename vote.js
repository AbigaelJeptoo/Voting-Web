
function displayLogin(){
    document.getElementById("sign").style.display = "none";
    document.getElementById("login").style.display = "block";
}
function displaySignup(){
    document.getElementById("login").style.display = "none";
    document.getElementById("sign").style.display = "block";
}

//direct to vote once you sign up
function gotovote(){
    document.getElementById("sign").style.display = "none";
    document.getElementById("vote").style.display = "block";
}

function displayResult(){
    const displayR = document.querySelector(".butvote:checked");
    document.getElementById("result").style.display = "block";
}

document.getElementById("signup").onclick = function(){
document.getElementById("username").value;
document.getElementById("ID").value;
document.getElementById("email").value;
document.getElementById("date").value;
document.getElementById("number").value;

}
document.getElementById("log1").onclick = function(){
document.getElementById("username").value;
document.getElementById("email").value;
document.getElementById("password").value;

};
//update votes

let votes = {
    "maker":0,
    "idris":0,
    "nyong'o":0,
    "damingo":0
};
function myVote(){
    const selected = document.querySelector('input[name="vote"]:checked')
    if(!selected){
        alert("Kindly select an aspirant")
        return;
    }
    const vote = selected.value;
    votes[vote]++;

    //update results
    document.getElementById("R1").innerText = votes["maker"];
    document.getElementById("R2").innerText = votes["idris"];
    document.getElementById("R3").innerText = votes["nyong'o"];
    document.getElementById("R4").innerText = votes["damingo"];

    //disable once you vote
    document.querySelectorAll('input[name="vote"]').forEach(input => input.disabled = true);
    document.querySelector('.butvote').disabled = true

}
