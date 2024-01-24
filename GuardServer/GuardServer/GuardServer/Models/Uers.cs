using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace GuardServer.Models
{
    [BsonIgnoreExtraElements]
    public class Users
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; } = string.Empty;

        [BsonElement("email")]
        public string Email { get; set;  } 
         
        [BsonElement("password")]
        public string Password { get; set; }
    }
}
