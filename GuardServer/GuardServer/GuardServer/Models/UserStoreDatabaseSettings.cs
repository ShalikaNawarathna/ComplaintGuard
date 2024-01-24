namespace GuardServer.Models
{
    public class UserStoreDatabaseSettings : IUserStoreDatabaseSettings
    {
        public string UsersDataCollectionName { get; set; } = string.Empty;
        public string ConnectionString { get; set; } = string.Empty;
        public string DatabaseName { get; set; } = string.Empty;
    }
}
