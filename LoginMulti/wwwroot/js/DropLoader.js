
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");

}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches("#btn1")) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show");

}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches("#btn2")) {
        var dropdowns = document.getElementsByClassName("dropdown-content2");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}



$("#etapas").click(function () {
    $("#center").load("Loader")
    $("body").toggleClass("teste")
    setTimeout(function () {
        $("body").toggleClass()
        $("#progressbar").hide()
        $("#center").load("Formulario")
    }, 3000)
})


