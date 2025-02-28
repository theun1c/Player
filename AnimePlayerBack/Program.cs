using AnimePlayerBack.Data;

namespace AnimePlayerBack
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);
            builder.Services.AddControllers();
            builder.Services.AddScoped<PlayerDbContext>();
            var app = builder.Build();

            app.MapControllers();
            app.Run();
        }
    }
}
