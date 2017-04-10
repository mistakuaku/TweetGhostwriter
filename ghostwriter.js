function writeTweet()
{
  var randIndex, sentence;

  var intro = ["What is it with ",
              "Have you ever noticed ",
              "Does anyone remember ",
              "What is wrong with "];

  var body = ["Taco Bell drive-thru",
              "Battletoads",
              "Jiffylube",
              "Jared from Subway",
              "Reddit"];
  var end = [" you never get what you want",
            "?",
            " it's always full of stale memes"];

  randIndex = randomUpTo(intro.length - 1);

  sentence = intro[randIndex];

  randIndex = randomUpTo(body.length - 1);

  sentence = sentence + " " + body[randIndex];

  randIndex = randomUpTo(end.length - 1);

  sentence = sentence + " " + end[randIndex];

  document.getElementById("tweet").innerHTML = sentence;
}

//Generates a random whole number between 0 and max (inclusive)
function randomUpTo(max)
{
  return Math.floor(Math.random() * (max+1));
}
