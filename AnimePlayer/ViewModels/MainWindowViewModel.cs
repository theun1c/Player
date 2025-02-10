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
        public RelayCommand HomeCommand { get; set; }
        public RelayCommand PlayerCommand { get; set; }

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

            HomeCommand = new RelayCommand(o =>
            {
                CurrentView = Home;
            });

            PlayerCommand = new RelayCommand(o =>
            {
                CurrentView = Player;
            });
        }
    }
}
