namespace AnimePlayerBack.Models
{
    public class SliderItem
    {
        public SliderItem(string title, string description)
        {
            Title = title;
            Description = description;
            CreatedAt = DateTime.Now;
        }
        public Guid Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}
