using HorseSite.Models;
using Microsoft.EntityFrameworkCore;

namespace HorseSite.DB
{
    public class MainContext :DbContext
    {
        public DbSet<HorseShort> Horses => Set<HorseShort>();
        public MainContext() => Database.EnsureCreated();

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite("Data Source=horsesiteDB.db");
        }
    }
}
