using Supabase;

namespace ForTest
{
    internal class SupabaseService
    {
        private readonly Client _supabaseClient;

        public SupabaseService()
        {
            var url = "https://xriljfgwboflvygxrqqr.supabase.co";
            var key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhyaWxqZmd3Ym9mbHZ5Z3hycXFyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk2NDc5NzQsImV4cCI6MjA1NTIyMzk3NH0.SVJtgfwqQEVNzXJn2zx5NnWEUSiE2Ba-UmG2-TDPVsI";

            var options = new SupabaseOptions
            {
                AutoConnectRealtime = true
            };

            _supabaseClient = new Client(url, key, options);
        }

        public async Task Initialize()
        {
            await _supabaseClient.InitializeAsync();
        }

        public Client GetClient()
        {
            return _supabaseClient;
        }

        public async Task<List<User>> GetUsersAsync()
        {
            // Получаем данные из таблицы "Users"
            var result = await _supabaseClient
                .From<User>() // Указываем модель User
                .Get(); // Выполняем запрос

            // Возвращаем список пользователей
            return result.Models;
        }
    }
}
