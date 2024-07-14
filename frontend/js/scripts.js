  //Hiding these elements because they take up space and make the margins/paddings look off until we run the getHoro function
  document.getElementById('emptyWrapper').style.display = 'none';
  document.getElementById('info').style.display = 'none';
// function runs onClick
async function getHoro(userInput) {
  // receiving userInput
  var userInput = document.getElementById('userInput').value;

  var response = await fetch("http://localhost:3000/output", {
    method: "POST",
    headers: {
            'Content-Type': 'application/json',
    },
    body: JSON.stringify({ userInput })
  });

  var { userHoro } = await response.json();
  
  // writing to the DOM based on what the user typed

  document.getElementById('info').style.display = 'block';
  document.getElementById('emptyWrapper').className = 'mx-auto text-center maxWidth d-block mt-5';
  document.getElementById('title').innerHTML = userHoro.title;
  document.getElementById('title').className = 'mx-auto bg-dark text-light animated rollIn flex-center';
  document.getElementById('img').innerHTML = userHoro.img;
  document.getElementById('img').className = 'mx-auto mt-2 mb-2 rounded-circle img-fluid animated rotateIn flex-center';
  document.getElementById('info').innerHTML = userHoro.info;
  document.getElementById('info').className = 'col-md-8 mt-2 p-2 text-light bg-primary rounded mx-auto letterSpacing animated flipInY flex-center';
  document.getElementById('img').src = userHoro.img;
  //this is for mobile viewing, so we can see the new elements appear live
  document.getElementById('right-picture').scrollIntoView();
}

// When user presses ENTER while in the Input, instead of CLICKING the Button
var btn = document.getElementById('userInput');
btn.addEventListener('keypress', function enterKey(e) {
  if (e.keyCode == 13) {
    getHoro();
  }
}, false);
