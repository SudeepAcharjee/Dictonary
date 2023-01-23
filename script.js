const dictionary = {
    "hello": "a greeting",
    "world": "the planet on which we live",
    "javascript": "a programming language",
    "Sudeep": "Creator of this webpage"
  };
  
  function search() {
    let word = document.getElementById("search").value;
    let result = document.getElementById("result");
    result.innerHTML = dictionary[word] || "Word not found.";
  }
  