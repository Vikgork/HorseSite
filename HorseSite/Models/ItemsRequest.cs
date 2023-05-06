namespace HorseSite.Models
{
    public class ItemsRequest<T>
    {
        public int Page { get; set; }
        public int ItemsPerPage { get; set; }
        public int Total { get; set; }
        public string searchQuery { get; set; }
        public List<QuickFilter<object>>? QuickFilters { get; set; }
        public List<T>? Items { get; set; }
    }
}
