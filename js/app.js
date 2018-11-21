var quotes = [ "\"Love all, trust a few, do wrong to none\"",
               "\"With faith, discipline and selfless devotion to duty, there is nothing worthwhile that you cannot achieve\"",
               "\"That's one small step for a man, one giant leap for mankind\"",
              "\"By giving people the power to share, we're making the world more transparent\"",
              "\"Success is a lousy teacher. It seduces smart people into thinking they can't lose\"",
               "\"Always forgive your enemies; nothing annoys them so much\"",
               "\"Believe those who are seeking the truth. Doubt those who find it\"",
               "\"Innovation distinguishes between a leader and a follower\"",
               "\"A clever person solves a problem. A wise person avoids it\"",
               "\"Think 100 times before you take a decision, But once that decision is taken, stand by it as one man\""];

var authors = ["~ William Shakespeare",
              "~ Muhammad Ali Jinnah",
              "~ Neil Armstrong",
              "~ Mark Zuckerberg",
              "~ Bill Gates",
              "~ Oscar Wilde",
              "~ André Gide",
              "~ Steve Jobs",
              "~ Albert Einstein",
              "~ Muhammad Ali Jinnah"];

function generateQuote(){
  var random = Math.floor(Math.random()*10) ;
  var quote = document.getElementById("quote");
  var author = document.getElementById("author");

  document.getElementById("newBtn").innerHTML = "<i class='material-icons left'>autorenew</i> New Quote";
  document.getElementById("quote").innerHTML = "";
  document.getElementById("author").innerHTML = "";
  
  for(var i=0; i<authors[random].length; i++){
    author.innerHTML += authors[random][i];
   }
   
  for(var i=0; i<quotes[random].length; i++){
    quote.innerHTML += quotes[random][i];
  }
}
