using GuardServer.Models;
using MongoDB.Driver;
using Microsoft.Extensions.Options;
using MongoDB.Bson;

namespace GuardServer.Repository
{
    public class UserRepo : IUserRepo
    {
        private readonly IMongoCollection<Users> _collection;
        private readonly IOptions<UserStoreDatabaseSettings> _dbSettings;

        public UserRepo(IMongoClient mongoClient, IUserStoreDatabaseSettings userStoreDatabaseSettings, IOptions<UserStoreDatabaseSettings> dbSettings)
        {
            //var database = mongoClient.GetDatabase(userStoreDatabaseSettings.DatabaseName);
            //_collection = database.GetCollection<Users>(userStoreDatabaseSettings.UsersDataCollectionName);

            MongoClient client = new MongoClient("mongodb+srv://Shalu:Shalu97@cluster0.385pmak.mongodb.net/?retryWrites=true&w=majority");
             var database = client.GetDatabase("MyDataBase");
            var list = database.ListCollections().ToList();
            _collection = database.GetCollection<Users>("Users");
            _dbSettings = dbSettings;
        }

        

        public async Task<Users> Login(string email, string password)
        {
            var filter =  Builders<Users>.Filter.Eq("email", email);
            var user = await _collection.Find(filter).FirstOrDefaultAsync();

            //var user = await _collection.Find(_ => true).ToListAsync();
            var count = _collection.CountDocuments(_ => true);

            if(user == null)
            {
                throw new Exception("User not found ");
            }
            
            if(user.Password != password)
            {
                throw new Exception("Incorret Password");
            }
            
            return user;
        }
    }
}
