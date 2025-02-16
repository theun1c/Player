using AnimePlayer.ViewModels.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AnimePlayer.ViewModels
{
    internal class MainWindowViewModel : ViewModelBase
    {
        public Command HomeCommand { get; set; }
        public Command PlayerCommand { get; set; }

        public HomeViewModel Home { get; set; }
        public PlayerViewModel Player { get; set; }

        private object _currentView;

        public object CurrentView
        {
            get { return _currentView; }
            set { _currentView = value; OnPropertyChanged(); }
        }


        public MainWindowViewModel()
        {
            Home = new HomeViewModel();
            Player = new PlayerViewModel();
            CurrentView = Home;

            HomeCommand = new Command(o =>
            {
                CurrentView = Home;
            });

            PlayerCommand = new Command(o =>
            {
                CurrentView = Player;
            });
        }
    }
}
