namespace HorseSite.Models
{
    public class QuickFilter<T>
    {
        public string ColumnName { get; set; }
        public T Value { get; set; }

        public QuickFilter(string columnName, T value)
        {
            ColumnName = columnName;
            Value = value;
        }
    }
}
