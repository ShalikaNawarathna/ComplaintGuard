namespace GuardServer.Models
{
    public interface IUserStoreDatabaseSettings
    {
        string UsersDataCollectionName { get; set; }
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
    }
}
