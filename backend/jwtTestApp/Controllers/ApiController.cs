using Microsoft.AspNetCore.Mvc;

namespace jwtTestApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public abstract class ApiController : ControllerBase
    {
    }
}
