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
        public RelayCommand DiscoveryCommand { get; set; }

        public HomeViewModel Home { get; set; }
        public DiscoveryViewModel Discovery { get; set; }

        private object _currentView;

        public object CurrentView
        {
            get { return _currentView; }
            set { _currentView = value; OnPropertyChanged(); }
        }


        public MainWindowViewModel()
        {
            Home = new HomeViewModel();
            Discovery = new DiscoveryViewModel();
            CurrentView = Home;

            HomeCommand = new RelayCommand(o =>
            {
                CurrentView = Home;
            });

            DiscoveryCommand = new RelayCommand(o =>
            {
                CurrentView = Discovery;
            });
        }
    }
}
