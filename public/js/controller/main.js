// Main entry point


var connected = false;
$(function() {
    //var model = new GameModel()
    //var view = new GameView(model)
    if (connected) {
        var model = new GameModel()
        var view = new GameView(model)
    } else {
        $("#game").hide()
        $("#regbtn").on("click", a => {
            $("#login").hide();
            $("#register").show()

        })
        $("#logbtn").on("click", a => {
            $("#register").hide();
            $("#login").show();

        })
    }


})