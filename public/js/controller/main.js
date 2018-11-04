// Main entry point


var connected = false;
$(function() {

    $.get("/api/login/user", (data, res) => {
        User.uid = data;
        if (data != "noUser") {
            connected = true;
            var view = new GameView()
            var controller = new GameController(view)

        } else {
            $("#leaderboard").hide()

            $("#game").hide()
            $("#regbtn").on("click", a => {
                $("#login").hide();
                $("#register").show()

            })
            $("#logbtn").on("click", a => {
                $("#register").hide();
                $("#login").show();

            })

            $("#newreg").on("click", a => {})
        }
    })




})