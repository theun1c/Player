using AnimePlayerBack.Models;
using Microsoft.EntityFrameworkCore;
namespace AnimePlayerBack.Data
{
    public class PlayerDbContext : DbContext
    {
        public PlayerDbContext(DbContextOptions<PlayerDbContext> options) : base(options)
        {

        }

        public DbSet<SliderItem> SliderItems => Set<SliderItem>();

    }
}
