//code for home and login page
function submitLogin() {
    const userId = document.getElementById('userId').value;
    const password = document.getElementById('password').value;
  
    // You should implement proper authentication logic here.
    // For simplicity, this example assumes a successful login with any non-empty credentials.
    if (userId && password) {
      document.getElementById('loginPage').style.display = 'none';
      document.getElementById('homePage').style.display = 'block';
      return false; // Prevent form submission
    } else {
      alert('Invalid credentials. Please try again.');
      return false;
    }
  }
  
  function openLibrary() {
    
  }
  
  function openInteractiveExercise() {
    alert('Interactive Exercise button clicked. Implement your logic here.');
  }
  
  //code for toungtwister(vocal exercise)
  function showTongueTwisters() {
    const tongueTwistersContainer = document.getElementById("tongueTwistersContainer");

    // Array of tongue twisters
    const tongueTwisters = [
        "कच्चा पापड़, पक्का पापड़",
        "जो हँसेगा वो फंसेगा, जो फंसेगा वो हँसेगा",
        "डाली डाली पे नज़र डाली, किसी ने अच्छी डाली, किसी ने बुरी डाली| जिस डाली पे मैंने नज़र डाली वही डाली किसी ने तोड़ डाली",
        "समझ समझ के समझ को समझो, समझ समझना भी एक समझ है",
        "मर हम भी गए मरहम के लिए, मरहम ना मिला हम दम से गए, हमदम के लिए, हमदम न मिला",
        "चार कचरी कच्चे चाचा, चार कचरी पक्के पक्की कचरी कच्चे चाचा, कच्ची कचरी पक्के",
        "दूबे दुबई में डूब गया",
        "लपक बबुलिया लपक, अब ना लपकबे तो लपकबे कब",
        "पके पेड़ पर पका पपीता, पका पेड़ या पका पपीता, पके पेड़ को पकड़े पिंकू, पिंकू पकड़े पका पपीता",
        "चार कचरी कच्चे चाचा, चार कचरी पक्के, पक्की कचरी कच्चे चाचा, कच्ची कचरी पक्के",
        "तोला राम ताला तोल के तेल में तुल गया, तुला हुआ तोला ताले के तले हुए तेल में तला गया"
    ];

    // Clear previous tongue twisters
    tongueTwistersContainer.innerHTML = "";

    // Display each tongue twister in a new paragraph
    tongueTwisters.forEach(twister => {
        const paragraph = document.createElement("p");
        paragraph.textContent = twister;
        tongueTwistersContainer.appendChild(paragraph);
    });
}





//code for matching game
// Words for the game (you can add more words as needed)
const words = [
    'सेब', 'केला', 'बिल्ली', 'कुत्ता', 'हाथी', 'मेंढक', 'जिराफ', 'घोड़ा', 'इग्वाना', 'जेलीफिश'
  ];
  
  // Score variable
  let score = 0;
  
  // Function to start the game
  function startGame() {
    const cardsContainer = document.getElementById('cards');
    cardsContainer.innerHTML = ''; // Clear previous cards
    score = 0; // Reset the score
  
    // Update the displayed score
    updateScore();
  
    // Shuffle the words array
    const shuffledWords = words.sort(() => Math.random() - 0.5);
  
    // Display cards with words
    shuffledWords.forEach(word => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.textContent = word;
      card.addEventListener('click', () => pronounceWord(word));
      cardsContainer.appendChild(card);
    });
  }
  
  // Function to recognize the spoken word
  function pronounceWord(word) {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
    recognition.lang = 'hi-IN';
  
    recognition.onresult = function(event) {
      const result = event.results[0][0].transcript.toLowerCase();
      const resultDisplay = document.getElementById('result');
  
      if (result === word.toLowerCase()) {
        resultDisplay.textContent = 'सही'; // Display 'सही' for correct pronunciation
        score++; // Increment score for correct pronunciation
        updateScore(); // Update the displayed score
      } else {
        resultDisplay.textContent = 'गलत'; // Display 'गलत' for incorrect pronunciation
      }
    }
  
    recognition.start();
  }
  
  // Function to update the score display
  function updateScore() {
    const scoreDisplay = document.getElementById('score');
    scoreDisplay.textContent = score;
  }