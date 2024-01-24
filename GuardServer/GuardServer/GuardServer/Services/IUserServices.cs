using GuardServer.Models;

namespace GuardServer.Services
{
    public interface IUserServices
    {
        Task<Users> Login(string email, string password);
    }
}
