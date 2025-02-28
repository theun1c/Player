using AnimePlayerBack.Models;
using Microsoft.EntityFrameworkCore;
namespace AnimePlayerBack.Data
{
    public class PlayerDbContext : DbContext
    {
        private readonly IConfiguration _configuration;
        public PlayerDbContext(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public DbSet<SliderItem> SliderItems => Set<SliderItem>();

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseNpgsql(_configuration.GetConnectionString("Database"));
        }
    }
}
