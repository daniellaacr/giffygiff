document.addEventListener("DOMContentLoaded", function() {

  const backgrounds = [
    "#FADADD",
    "#F8C8DC",
    "#F6C1D1",
    "#F9D5E5",
    "#FFD6E0",
    "#FBC4D8"
  ];

  const messages = [
    "never forget how intelligent you truly are.",
    "you are far more capable than you realize.",
    "you are deeply loved.",
    "your strength shows even in quiet moments.",
    "everything you do carries meaning.",
    "your mind is rare and beautiful.",
    "you deserve every good thing coming your way.",
    "trust yourself the way I trust you.",
    "your discipline will always outshine excuses.",
    "what feels hard today is shaping your future power.",
    "every small step you take matters.",
    "I love you.",
    "even in doubt, you remain brilliant.",
    "challenges arrive to elevate you, not stop you.",
    "you are building something extraordinary.",
    "your potential has no ceiling.",
    "your process is working.",
    "you make my days softer.",
    "my favorite place is wherever you are.",
    "your voice feels like comfort.",
    "if the world feels heavy, rest here.",
    "your presence makes everything warmer.",
    "I admire who you are when no one is watching.",
    "even silence feels beautiful with you.",
    "you are my favorite coincidence.",
    "every version of you is worth choosing.",
    "I would choose you all over again.",
    "your smile changes the atmosphere.",
    "our connection feels effortless.",
    "with you, moments turn into memories.",
    "drink some water, please.",
    "take a deep breath — your body deserves peace.",
    "rest well tonight.",
    "stretch your shoulders and relax.",
    "take breaks, but never doubt your direction.",
    "go outside and let the light touch you.",
    "moving a little is still progress.",
    "disconnecting is also productive.",
    "you cross my mind more often than you know.",
    "music feels different when I think of you.",
    "meeting you was unexpected and perfect.",
    "so many things remind me of you.",
    "you look beautiful today.",
    "time with you always feels right.",
    "there is something quietly extraordinary about you."
  ];

  // 🎨 Random background
  document.body.style.background =
    backgrounds[Math.floor(Math.random() * backgrounds.length)];

  // Shuffle system (no repeats until all used)

  let remainingMessages = JSON.parse(localStorage.getItem("remainingMessages"));

  if (!remainingMessages || remainingMessages.length === 0) {
    remainingMessages = [...messages];

    for (let i = remainingMessages.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [remainingMessages[i], remainingMessages[j]] = [remainingMessages[j], remainingMessages[i]];
    }
  }

  const message = remainingMessages.pop();
  localStorage.setItem("remainingMessages", JSON.stringify(remainingMessages));

  const fullMessage = "Leonie, " + message;

  const element = document.getElementById("mensaje");

  let i = 0;
  function typeText() {
    if (i < fullMessage.length) {
      element.innerHTML += fullMessage.charAt(i);
      i++;
      setTimeout(typeText, 40);
    }
  }

  typeText();

});
