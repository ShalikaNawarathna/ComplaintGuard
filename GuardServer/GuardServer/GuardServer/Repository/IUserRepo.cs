using GuardServer.Models;

namespace GuardServer.Repository
{
    public interface IUserRepo
    {
        Task<Users> Login(string email, string password);
    }
}
