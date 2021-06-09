
function back(){
    window.location="activity2.html";
}

function getScore(){
    score=localStorage.getItem("score")
    document.getElementById("update").innerHTML="Score:"+score;
}