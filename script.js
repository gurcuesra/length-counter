
const calculateCharacter = () =>{
  // var tweet = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."

  let tweet = prompt("Please enter your tweet!");

  let tweetCount = tweet.length;
  // Above variable is for counting the each character of the  tweet.
   
  let tweetLeft = 150 - tweetCount;

  let name = prompt("Please enter your name!");

  alert(`${name}!!! You have written ${tweetCount} characters, you have ${tweetLeft} characters remaining.`)

}


// Invoke the function when button is clicked

btn.addEventListener('click', calculateCharacter);
