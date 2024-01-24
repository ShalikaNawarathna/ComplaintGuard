using Microsoft.AspNetCore.Mvc;
using GuardServer.Models;
using GuardServer.Services;
using System.Net;
using Microsoft.AspNetCore.Identity;
using Microsoft.VisualBasic;

namespace GuardServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {

        private readonly IUserServices userServices;

        public UserController(IUserServices userServices)
        {
            this.userServices = userServices;
        }

        [HttpPost("login")]
        public async Task<IActionResult> login([FromBody] Users user)
        {
            try
            {
                Users loginUser = await userServices.Login(user.Email, user.Password);
                return Ok(loginUser);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
