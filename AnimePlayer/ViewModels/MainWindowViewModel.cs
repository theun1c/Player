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
        private string _Title = "ANIMESHKA";

        public string Title 
        {
            get => _Title;
            set => Set(ref _Title, value);
        }
    }
}
