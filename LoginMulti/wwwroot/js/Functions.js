
$(function () {
    var atual_fs, next_fs, prev_fs
    var formulario = $('form[name=formulario]');

    function next(elem) {
        atual_fs = $(elem).parent();
        next_fs = $(elem).parent().next();

        $('#progress li').eq($('fieldset').index(next_fs)).addClass('ativo');
        atual_fs.hide();
        next_fs.show();

    };

    $('.prev').click(function () {
        atual_fs = $(this).parent();
        prev_fs = $(this).parent().prev();

        $('#progress li').eq($('fieldset').index(atual_fs)).removeClass('ativo');
        atual_fs.hide();
        prev_fs.show();

    });

    $('input[name=next1').click(function () {
        var array = formulario.serializeArray();
        if (array[0].value == '' || array[1].value == '' || array[2].value == '') {
            $('.resp').html('<div class="erros"> <p>Preencha todos os dados corretamente!</p> </div>')
        } else {
            $('.resp').html('')
            next($(this));
        }
    });


    $('input[name=next2').click(function () {
        var array = formulario.serializeArray();
        if (array[3].value == '' || array[4].value == '' || array[5].value == '') {
            $('.resp').html('<div class="erros"> <p>Preencha todos os dados corretamente!</p> </div>')
        } else {
            $('.resp').html('')
            next($(this));
        }
    });

    $('input[name=next3').click(function () {
        var array = formulario.serializeArray();
        if (array[6].value == '' || array[7].value == '' || array[8].value == '') {
            $('.resp').html('<div class="erros"> <p>Preencha todos os dados corretamente!</p> </div>')
        } else {
            $('.resp').html('')
            next($(this));
        }
    });

    $('input[name=next4').click(function () {
        var array = formulario.serializeArray();
        if (array[9].value == '' || array[10].value == '' || array[11].value == '') {
            $('.resp').html('<div class="erros"> <p>Preencha todos os dados corretamente!</p> </div>')
        } else {
            $('.resp').html('')
            next($(this));
        }
    });

    $('input[name=next5').click(function () {
        var array = formulario.serializeArray();
        if (array[12].value == '' || array[13].value == '' || array[14].value == '') {
            $('.resp').html('<div class="erros"> <p>Preencha todos os dados corretamente!</p> </div>')
        } else {
            $('.resp').html('')
            next($(this));
        }
    });

    $('input[name=next6').click(function () {
        var array = formulario.serializeArray();
        if (array[15].value == '' || array[16].value == '' || array[17].value == '') {
            $('.resp').html('<div class="erros"> <p>Preencha todos os dados corretamente!</p> </div>')
        } else {
            $('.resp').html('')
            next($(this));
        }
    });

    $('input[type=submit]').click(function (evento) {
        var array = formulario.serializeArray();
        if (array[18].value == '' || array[19].value == '' || array[20].value == '') {
            $('.resp').html('<div class="erros"> <p>Preencha todos os dados corretamente!</p> </div>')
        } else {
            $('.resp').html('<div class="ok"><p>Sua requisição foi enviada!</p></div>')

        }

        evento.preventDeFault();

    });
});

