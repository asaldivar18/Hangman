class GameController {
    constructor(view) {
        $("#resetButton").click(a => {
            view.resetGame();

        })
        $("#leaderboard").hide()

        $("#authentication").hide()
        $("#backgame").on("click", a => {
            $("#game").show()
            $("#leaderboard").hide()
        })

        $("#lbbtn").click(a => {
            $("#leaderboard").show()
            $("#game").hide();
            $.get('/api/login', (data, res) => {
                var i = 1
                var table = document.getElementById("lbtable")
                table.innerHTML = ""
                var tr = document.createElement("tr")
                var rank = document.createElement("th")
                var user = document.createElement("th")
                var score = document.createElement("th")
                rank.innerHTML = "Rank"
                user.innerHTML = "Name"
                score.innerHTML = "Score"
                tr.appendChild(rank)
                tr.appendChild(user)
                tr.appendChild(score)
                table.appendChild(tr)
                data.forEach(element => {
                    var tr = document.createElement("tr")
                    var rank = document.createElement("td")
                    var user = document.createElement("td")
                    var score = document.createElement("td")
                    rank.innerHTML = i++
                        user.innerHTML = element.username
                    score.innerHTML = element.score
                    tr.appendChild(rank)
                    tr.appendChild(user)
                    tr.appendChild(score)
                    table.appendChild(tr)
                });
            })
        })
        $("#logout").click(a => {

            $.get("/api/login/logout", (req, data) => {}).then(a => {
                location.reload()
            })

        })

    }






}