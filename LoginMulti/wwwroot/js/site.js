



$("#validar").click(function ()
    {

    let valores = $("#nome,#telefone,#email,#cidade,#estado,#endereco,#numero").val();

    if (valores == "")

         {

        $("#nome,#telefone,#email,#cep,#cidade,#estado,#endereco,#numero").css("background-color", "#ffb7b2");

         }
    })

 

$("#Acessar").click(function ()
{
    let input = $("#Nome,#Senha").val();

    if (input == "")
    {
        $("#Nome,#Senha").css("background-color", "#ffb7b2");
    }
})