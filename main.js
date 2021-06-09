function addUser(){
    Player1=document.getElementById("PLAYER1_name_input").value;
    Player2=document.getElementById("PLAYER2_name_input").value;

    localStorage.setItem("Player1", Player1)
    localStorage.setItem("Player2", Player2)
    window.location="game_page.html"
}

