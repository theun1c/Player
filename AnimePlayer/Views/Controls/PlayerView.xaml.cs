using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace AnimePlayer.Views.Controls
{
    /// <summary>
    /// Interaction logic for PlayerView.xaml
    /// </summary>
    public partial class PlayerView : UserControl
    {
        public PlayerView()
        {
            InitializeComponent();
        }
        private void PlayButton_Click(object sender, RoutedEventArgs e)
        {
            string epStr = $"C:\\Users\\belov\\Desktop\\VideoSourse\\Bocchi the Rock!\\Bocchi the Rock! - {episodeBox.Text.Replace(" ", "")}.mkv";
            mediaPlayer.Source = new Uri(epStr, UriKind.Absolute);
            mediaPlayer.Play();
        }

        private void PauseButton_Click(object sender, RoutedEventArgs e)
        {
            mediaPlayer.Pause();
        }
    }
}
