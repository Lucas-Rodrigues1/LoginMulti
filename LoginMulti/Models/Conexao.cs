using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data.SqlClient;
namespace LoginMulti.Controllers
{
    public class Conexao
    {
        
        SqlConnection conexao;
        SqlCommand comando;
        public Conexao(string Nome,string Senha , string Endereco, string Cidade, string Telefone, string Numero, string Email, string Estado)
        {
            string strSQL;

            try
            {
                
                conexao = new SqlConnection(@"Data Source=DESKTOP-29AA0TP\SQLEXPRESS;Initial Catalog=LoginMulti;Integrated Security=True;");

                strSQL = "INSERT INTO CLIENTESMULTI (NOME, SENHA , ENDERECO, CIDADE, TELEFONE, NUMERO, EMAIL , ESTADO  ) VALUES (@NOME, @SENHA, @ENDERECO,  @CIDADE, @TELEFONE,@NUMERO, @EMAIL,  @ESTADO)";

                comando = new SqlCommand(strSQL, conexao);

                comando.Parameters.AddWithValue("@NOME", Nome);
                comando.Parameters.AddWithValue("@SENHA",Senha);
                comando.Parameters.AddWithValue("@ENDERECO", Endereco);
                comando.Parameters.AddWithValue("@CIDADE", Cidade);
                comando.Parameters.AddWithValue("@EMAIL", Email);
                comando.Parameters.AddWithValue("@NUMERO", Numero);
                comando.Parameters.AddWithValue("@TELEFONE", Telefone);
                comando.Parameters.AddWithValue("@ESTADO", Estado);

                conexao.Open();
                comando.ExecuteNonQuery();
            }
            catch (Exception ex)
            {
              
            }
            finally
            {

                conexao.Close();
                conexao = null;
                comando = null;
            }

            
        }

    }
}

/*    using (var connection = new SqlConnection(ConfigurationManager.ConnectionStrings["SuaChaveDeConexão"].ConnectionString))
            {
                connection.Open();
                using (var commandSelectLogin = new SqlCommand("SELECT Login, Senha, UltimoLogin FROM Usuario WHERE Login = @Login AND Senha = @Senha", connection))
                {

            command.Parameters.AddWithValue("@Login", model.UserName);
            command.Parameters.AddWithValue("@Senha", model.Password);

  using (var reader = commandSelectLogin.ExecuteReader(System.Data.CommandBehavior.CloseConnection))
                    {
                        if (!reader.Read()) //Nenhuma linha retornada na consulta
                        {

                    ModelState.AddModelError("", "Usuário ou senha inválidos!");
}*/