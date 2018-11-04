class GameView {
    constructor() {
        this.createKeyBoard();
        this.displayDefinition();
        this.alphabet = alphabet;
    }

    // Check if letter is in current word
    // POST: Updates User.guess
    addLetter(letter) {
        this.row = document.getElementById("word")
        this.row.innerHTML = "";
        let tmpguess = ""
        for (var i = 0; i < currentWord.word.length; i++) {
            var pc = this.row.insertCell(i);
            if (letter == currentWord.word.charAt(i)) {
                $(".scoretxt").html("Score:" + ++User.score)
                pc.innerHTML = currentWord.word.charAt(i);
            } else if (User.guess.charAt(i) != "_") {
                pc.innerHTML = User.guess.charAt(i);
            } else {
                pc.innerHTML = "_"
            }
            tmpguess += pc.innerHTML;
        }
        User.guess = tmpguess;
    }


    // Check if word is complete or user has no lives
    // POST: Increments or Decrements score
    check() {
            if (User.lives == 0) {
                $("#plrl").show().delay("3000").fadeOut();
                $("#def").html("You lose.")
                disableButtons();
                $(".scoretxt").html("Score:" + --User.score)
                window.setTimeout(a => {
                    this.resetGame()
                }, 2000);
            }
            if (User.guess == currentWord.word) {
                $("#plrw").show().delay("3000").fadeOut();
                User.guess = ""
                window.setTimeout(a => {
                    this.resetGame()
                }, 2000);
            }
        }
        // Update definition on view
    displayDefinition() {
        $("#def").html(currentWord.definition)
        var row = document.getElementById("word")
        row.innerHTML = ""
        for (var i = 0; i < currentWord.word.length; i++) {
            var pc = row.insertCell(i);
            pc.innerHTML = "_";
            User.guess = User.guess + "_";
        }
    }

    // Enables all buttons
    resetButtons() {
        let btns = document.getElementsByClassName("btn");
        for (let i = 0; i < btns.length; i++) {
            btns[i].disabled = false;
        }
    }

    disableButtons() {
        let btns = document.getElementsByClassName("btn");
        for (let i = 0; i < btns.length; i++) {
            btns[i].disabled = true;
        }
    }

    // Starts a new game
    resetGame() {
        currentWord = getWord()
        userReset()
        this.displayDefinition();
        this.resetButtons()
        $("#lives").html("Lives: " + User.lives);
    }

    // Creates buttons for alphabet with click event listener
    createKeyBoard() {
        document.getElementById("keyboard").innerHTML = "";
        for (var i = 0; i < alphabet.length; i++) {
            var btn = document.createElement("button")
            btn.innerHTML = alphabet[i]
            btn.classList.add("btn", "keys");
            //        btn.classList.add("btn-primary");

            btn.classList.add("keys")
            $("#keyboard").after(btn);
            btn.addEventListener('click', (a) => {
                let target = event.target || event.srcElement;
                var innerHTML = target.innerHTML
                if (currentWord.word.includes(innerHTML)) {
                    this.addLetter(innerHTML)
                    User.lives = 7;
                    $("#lives").html("Lives: " + User.lives);
                } else {
                    $("#lives").html("Lives: " + --User.lives);
                    $(".scoretxt").html("Score:" + --User.score)

                }
                this.check()
                $.get("/api/login/update/" + User.uid + "/" + User.score)

                target.disabled = true;

            });
        }
    }


}