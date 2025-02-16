namespace ForTest
{
    internal class Program
    {

        static private SupabaseService _supabaseService;

        static async Task Main(string[] args)
        {
            _supabaseService = new SupabaseService();
            await ConnectToSupabase();

            var users = await _supabaseService.GetUsersAsync();

            // Выводим данные в консоль
            foreach (var user in users)
            {
                Console.WriteLine($"ID: {user.Id}, Name: {user.Name}");
            }
        }

        static private async Task ConnectToSupabase()
        {
            await _supabaseService.Initialize();
            Console.WriteLine("Подключение к Supabase!");
        }

    }
}
