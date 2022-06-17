$("#search").click(function () {
    $("#progressbar").show()
    $("body").toggleClass("teste")
    setTimeout(function () {
        $("body").toggleClass()
        $("#progressbar").hide()
        $("#content").load("Formulario.cshtml #conteudo")
    }, 3000)
})


$(function () {
    $("#progressbar").progressbar({
        value: false
    });
    $("button").on("click", function (event) {
        var target = $(event.target),
            progressbar = $("#progressbar"),
            progressbarValue = progressbar.find(".ui-progressbar-value");

        if (target.is("#falseButton")) {
            progressbar.progressbar("option", "value", false);
        }
    });
});