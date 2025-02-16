using Postgrest.Attributes;
using Postgrest.Models;

namespace AnimePlayer.Models
{
    [Table("Users")]
    internal class User : BaseModel
    {
        [PrimaryKey("id")]
        public int Id { get; set; }

        [Column("name")]
        public string Name { get; set; }
    }
}
