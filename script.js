let dictionary = {
    "hello": "a greeting",
    "world": "the planet on which we live",
    "javascript" : "a programming language",
        "Javascript" : "a programming language",
            "JAVASCRIPT" : "a programming language",
    "BCA": "BCA stands for Bachelor of Computer Applications. It is an undergraduate degree program in computer applications. The program typically lasts for three years and covers a wide range of topics related to computer science and technology,The curriculum of a BCA program typically includes subjects such as programming languages (e.g., C, C++, Java), data structures, algorithms, database management, computer networks, web development, and software engineering. Additionally, it also includes subjects like mathematics, statistics, and management.The program is designed to provide students with a strong foundation in computer science and technology, as well as the skills and knowledge needed to develop, design, and implement various types of software and systems. Graduates of BCA program are well equipped to work in a wide range of industries such as IT, software development, gaming, networking, and more.It is important to note that there might be variations in the curriculum and the duration of the course depending on the institution and the country where it is being offered.",
    "Sudeep": "Creator of this webpage",
    "bca": "BCA stands for Bachelor of Computer Applications. It is an undergraduate degree program in computer applications. The program typically lasts for three years and covers a wide range of topics related to computer science and technology,The curriculum of a BCA program typically includes subjects such as programming languages (e.g., C, C++, Java), data structures, algorithms, database management, computer networks, web development, and software engineering. Additionally, it also includes subjects like mathematics, statistics, and management.The program is designed to provide students with a strong foundation in computer science and technology, as well as the skills and knowledge needed to develop, design, and implement various types of software and systems. Graduates of BCA program are well equipped to work in a wide range of industries such as IT, software development, gaming, networking, and more.It is important to note that there might be variations in the curriculum and the duration of the course depending on the institution and the country where it is being offered.",
    "Bca": "BCA stands for Bachelor of Computer Applications. It is an undergraduate degree program in computer applications. The program typically lasts for three years and covers a wide range of topics related to computer science and technology,The curriculum of a BCA program typically includes subjects such as programming languages (e.g., C, C++, Java), data structures, algorithms, database management, computer networks, web development, and software engineering. Additionally, it also includes subjects like mathematics, statistics, and management.The program is designed to provide students with a strong foundation in computer science and technology, as well as the skills and knowledge needed to develop, design, and implement various types of software and systems. Graduates of BCA program are well equipped to work in a wide range of industries such as IT, software development, gaming, networking, and more.It is important to note that there might be variations in the curriculum and the duration of the course depending on the institution and the country where it is being offered."


  };
  
  function search() {
    let word = document.getElementById("search").value;
    let result = document.getElementById("result");
    result.innerHTML = dictionary[word] || "Word not found.";
  }
  