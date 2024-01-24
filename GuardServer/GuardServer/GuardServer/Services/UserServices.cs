using GuardServer.Models;
using GuardServer.Repository;


namespace GuardServer.Services
{
    public class UserServices : IUserServices
    {
        private readonly IUserRepo _userRepo;

        public UserServices(IUserRepo userRepo)
        {
            _userRepo = userRepo;
        }
        public async Task<Users> Login(string email, string password)
        {
            return await _userRepo.Login(email, password);
        }
    }
}
