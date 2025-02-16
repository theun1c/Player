using Postgrest;
using ServiceStack;
using Supabase;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Policy;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Input;

namespace AnimePlayer.Data
{
    internal class SupabaseService
    {
        private readonly Supabase.Client _supabaseClient;

        public SupabaseService()
        {
            var url = Environment.GetEnvironmentVariable("SUPABASE_URL");
            var key = Environment.GetEnvironmentVariable("SUPABASE_KEY");

            var options = new SupabaseOptions
            {
                AutoConnectRealtime = true
            };

            _supabaseClient = new Supabase.Client(url, key, options);
        }

        public async Task Initialize()
        {
            await _supabaseClient.InitializeAsync();
        }

        public Supabase.Client GetClient()
        {
            return _supabaseClient;
        }
    }
}
