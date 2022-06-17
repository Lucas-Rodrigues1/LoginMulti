using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data.SqlClient;
namespace LoginMulti.Models
{
    public class Autenticar
    {

        public Autenticar(string Nome, string Senha)
        {
            SqlConnection con = new SqlConnection();
            con.ConnectionString = @"Data Source=DESKTOP-4BI623S;Initial Catalog=LoginMulti;Integrated Security=True;";
            SqlCommand cmd = new SqlCommand();
            cmd.Connection = con;
            con.Open();

            string login = "SELECT * FROM CLIENTESMULTI WHERE NOME='" + Nome + "' , AND SENHA='" + Senha + "'";
            cmd = new SqlCommand(login, con);
            SqlDataReader dr;
            dr = cmd.ExecuteReader();




         
                if (dr.Read() == true)
                {
                con.Close();
               

                }
          



    }   }
}
