
using System.Text;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;
using System.Windows.Controls;
using AnimePlayer.Data;
using Supabase;

namespace AnimePlayer
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        private readonly SupabaseService _supabaseService;
        public MainWindow()
        {
            InitializeComponent();
            _supabaseService = new SupabaseService();
            ConnectToSupabase();
        }

        private async void ConnectToSupabase()
        {
            await _supabaseService.Initialize();
            MessageBox.Show("Подключение к Supabase!");

        }
    }
}