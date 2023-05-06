using System.ComponentModel.DataAnnotations;

namespace HorseSite.Models
{
    public class HorseShort
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Breed { get; set; }
        public bool Sex { get; set; }
        public int Mid { get; set; }
        public int Fid { get; set; }
        public string FName { get; set; }
        public string MName { get; set; }
        public DateTime Date { get; set; }

        public object this[string fieldName]
        {
            get
            {
                var field = this.GetType().GetProperty(fieldName);
                var result = field.GetValue(this);
                return result;
            }
            
        }

        public string GetDate()
        {
            return $"{Date.ToString("yyyy.MM.dd")}";
        }
    }
}
