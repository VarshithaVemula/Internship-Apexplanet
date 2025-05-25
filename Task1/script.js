const languageInfo = {
  c: {
    title: "C Programming Language",
    text: "C is a general-purpose, procedural programming language. It is widely used for system-level programming like OS development, embedded systems, and real-time applications due to its performance and low-level memory access."
  },
  java: {
    title: "Java Programming Language",
    text: "Java is a high-level, class-based, object-oriented programming language. It is designed to have as few implementation dependencies as possible. It's widely used in enterprise applications, Android app development, and web servers."
  },
  python: {
    title: "Python Programming Language",
    text: "Python is a powerful, high-level, interpreted language known for its simplicity and readability. It is popular in data science, artificial intelligence, web development, automation, and scripting."
  }
};

function showInfo(langKey) {
  const modal = document.getElementById('infoModal');
  document.getElementById('modalTitle').textContent = languageInfo[langKey].title;
  document.getElementById('modalText').textContent = languageInfo[langKey].text;
  modal.style.display = 'block';
}

function closeModal() {
  document.getElementById('infoModal').style.display = 'none';
}


window.onclick = function(event) {
  const modal = document.getElementById('infoModal');
  if (event.target === modal) {
    modal.style.display = "none";
  }
}
