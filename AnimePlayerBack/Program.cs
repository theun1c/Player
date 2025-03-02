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

            builder.Services.AddCors(options =>
            {
                options.AddPolicy("AllowSpecificOrigin", policy =>
                {
                    policy.WithOrigins("http://localhost:5173") // Разрешить запросы от любого источника
                           .AllowAnyMethod() // Разрешить все HTTP-методы (GET, POST, PUT и т.д.)
                          .AllowAnyHeader(); // Разрешить все заголовки
                });
            });

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
            app.UseCors("AllowSpecificOrigin");
            app.UseHttpsRedirection();
            app.MapControllers();
            app.Run();
        }
    }
}
