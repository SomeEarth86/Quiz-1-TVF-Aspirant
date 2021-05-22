var readlineSync= require('readline-sync');

var userName= readlineSync.question("Enter the Participant name ");

var score=0;

console.log("Welcome "+userName+ " to TVF Aspirant Quiz ");

function play(question, answer){

var userAnswer= readlineSync.question(question);

if (userAnswer === answer){
  score++;
  console.log("Correct Answer !!! ");
  console.log("The score is ",score);
  
}
else{
  score--;
  console.log("Current score is ",score);
}
console.log("--------------------")
}//End of Function



var questionSet =[
    {
      question:"Question 1: Who is main Character of Web series ? \n a. Abhilash Sharma \n b.Guri \n c. SK (ShwetKetu) \n (answer as a/b/c ",
      answer:"a", 
    },
    {
    question:" Question 2: Name of Location inside the Delhi where aspirants prepare for Civil Service Exams ? \n a. Rajinder Nagar \n b. Old Rajinder Nagar \n c. Laxmi Nagar ",
    answer:"b", 
    },
    {
      question: "Question 3: During any Emotional/Critical Scene , in the Background Score/Music , which one of the following instrument was used in the music? \n a. Flute \n b. Piano \n c. Violin ",
      answer:"c",
    },
    {
      question: " Question 4: How many Stages of exams do aspirant has to go through, in order to qualify for Final training?  \n a. 1 \n b. 2 \n c. 3 ",
      answer: "c",
    },
    {
      question:" Question 5: What was the job of Abhilash before coming IAS preparation? \n a. Electrical Engineer \n b. Electronics Engineer \n c. CS Engineer ",
      answer: "a",
    }
  ];

for(var i=0;i<questionSet.length;++i){
  var currentQuestion= questionSet[i];
  play(currentQuestion.question,currentQuestion.answer);
}

console.log("Your Final score is ",score);

// Link to the Publish repl app of this quiz 
// https://replit.com/@SomeEarthJ/Questions-here-we-go?embed=1&output=1#index.js