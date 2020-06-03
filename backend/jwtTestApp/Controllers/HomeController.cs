using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

namespace jwtTestApp.Controllers
{
    public class HomeController : ControllerBase
    {
        [Authorize]
        [Route("[controller]")]
        public ActionResult Get()
        {
            return Ok("Провірка");
        }
    }
}
