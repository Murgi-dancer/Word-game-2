PLAYER1_name = localStorage.getItem("Player1");
PLAYER2_name = localStorage.getItem("Player2");

PLAYER1_score = 0;
PLAYER2_score = 0;

document.getElementById("PLAYER1_name").innerHTML = PLAYER1_name + ": ";
document.getElementById("PLAYER2_name").innerHTML = PLAYER2_name + ": ";
document.getElementById("PLAYER1_score").innerHTML = PLAYER1_score;
document.getElementById("PLAYER2_score").innerHTML = PLAYER2_score;

document.getElementById("player_question").innerHTML = "Question turns : " + PLAYER1_name;
document.getElementById("player_answer").innerHTML = "answer turns : " + PLAYER2_name;

function SEND() {
    word_given = document.getElementById("word").value;
    word = word_given.toLowerCase();



    first = word.charAt(1)
    console.log(first);
    half = Math.floor(word.length / 2);
    second = word.charAt(half);
    console.log(second);
    last = word.length - 1;
    third = word.charAt(last);
    console.log(third);



    remove1 = word.replace(first, "_");
    remove2 = remove1.replace(second, "_");
    remove3 = remove2.replace(third, "_");
    question_word = "<h4 id='word_display'> Q. " + remove3 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";


    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}
answer_turn="player2"
question_turn="player1"
function check() {
    get_answer = document.getElementById("input_check_box").value;
    answer = get_answer.toLowerCase();
    if (answer == word) {
        if (answer_turn == "player1") {
            PLAYER1_score = PLAYER1_score + 1
            document.getElementById("PLAYER1_score").innerHTML = PLAYER1_score;
        }
        else {
            PLAYER2_score = PLAYER2_score + 1
            document.getElementById("PLAYER2_score").innerHTML = PLAYER2_score;

        }}
    

    if(question_turn=="player1"){
    question_turn="player2" 
    document.getElementById("player_question").innerHTML="question_turn : "+PLAYER2_name;}

    else{
        question_turn="player1" 
        document.getElementById("player_answer").innerHTML="question_turn : "+PLAYER1_name;}


        if(answer_turn=="player1"){
            answer_turn="player2" 
            document.getElementById("player_answer").innerHTML="answer_turn : "+PLAYER2_name;}
        
            else{
                answer_turn="player1" 
                document.getElementById("player_answer").innerHTML="answer_turn : "+PLAYER1_name;}
    document.getElementById("output").innerHTML="";
            }