using LoginMulti.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using System.Data.SqlClient;
using System.Text;
using System.IO;
namespace LoginMulti.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }


        [HttpGet]
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Index(string Nome, string Senha)
        {

            SqlConnection con = new SqlConnection();
            con.ConnectionString = @"Data Source=DESKTOP-29AA0TP\SQLEXPRESS;Initial Catalog=LoginMulti;Integrated Security=True";
            SqlCommand cmd = new SqlCommand();
            cmd.Connection = con;
            con.Open();

            string login = "SELECT * FROM CLIENTESMULTI WHERE NOME='" + Nome + "' AND SENHA='" + Senha + "'";
            cmd = new SqlCommand(login, con);
            SqlDataReader dr = cmd.ExecuteReader(); 
           
            if (dr.Read() == true)
            {
                con.Close();
                return View("Sistema");
                


            }
            else
            {
                con.Close();
                return View();
            }


        }
    
                   
    

        [HttpGet]
        public IActionResult Privacy()
        {
            return View();

        }

        [HttpPost]


        public IActionResult Privacy(string Nome, string Senha, string Endereco, string Cidade, string Telefone, string Numero, string Email, string Estado)
        {
            Conexao conn = new Conexao( Nome, Senha , Endereco, Cidade, Telefone, Numero, Email, Estado);
            return View("Index");



        }



    }
}
