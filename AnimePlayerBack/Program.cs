using AnimePlayerBack.Data;
using Microsoft.EntityFrameworkCore;

namespace AnimePlayerBack
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);
            builder.Services.AddControllers();

            // added swagger services
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            // auto-get connection string
            builder.Services.AddDbContext<PlayerDbContext>(options =>
                options.UseNpgsql(builder.Configuration.GetConnectionString("Database"))
            );

            var app = builder.Build();

            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();
            app.MapControllers();
            app.Run();
        }
    }
}
