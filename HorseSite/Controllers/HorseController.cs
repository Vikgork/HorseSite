using HorseSite.DB;
using HorseSite.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HorseSite.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class HorseController : ControllerBase
    {

        private readonly ILogger<HorseController> _logger;

        private readonly IGenericRepository<HorseShort> _horseRepository;

        public List<HorseShort> horses;
        public HorseController(ILogger<HorseController> logger,MainContext context)
        {
            _logger = logger;
            _horseRepository = new EFGenericRepository<HorseShort>(context);
            horses = new List<HorseShort>
            {
                new HorseShort()
                {
                    Id = 1,
                    Name = "Stand",
                    Breed = "Авелинская",
                    Sex = true,
                    Date = new DateTime(2001,01,18),
                    Fid = 2,
                    Mid = 3,
                },
                new HorseShort()
                {
                    Id = 2,
                    Name = "Makle",
                    Breed = "Авелинская",
                    Sex = true,
                    Date = new DateTime(1985,9,20),
                    Fid = -1,
                    Mid = -1,
                },
                new HorseShort
                {
                    Id = 3,
                    Name = "Hella",
                    Breed = "Авелинская",
                    Sex = false,
                    Date = new DateTime(1984,5,5),
                    Fid = -1,
                    Mid = -1,
                },
                new HorseShort
                {
                    Id = 4,
                    Name = "Stand",
                    Breed = "Авелинская",
                    Sex = true,
                    Date = new DateTime(2001,1,18),
                    Fid = -1,
                    Mid = -1,
                },
                new HorseShort
                {
                    Id = 5,
                    Name = "Stand",
                    Breed = "Австралийская",
                    Sex = false,
                    Date = new DateTime(1984,5,6),
                    Fid = -1,
                    Mid = -1,
                },
                new HorseShort()
                {
                    Id = 6,
                    Name = "Stand",
                    Breed = "Авелинская",
                    Sex = true,
                    Date = new DateTime(2001,01,18),
                    Fid = -1,
                    Mid = -1,
                },
                new HorseShort()
                {
                    Id = 7,
                    Name = "Stand",
                    Breed = "Авелинская",
                    Sex = true,
                    Date = new DateTime(2001,01,18),
                    Fid = 2,
                    Mid = 3,
                },
                new HorseShort()
                {
                    Id = 8,
                    Name = "Stand",
                    Breed = "Авелинская",
                    Sex = true,
                    Date = new DateTime(2001,01,18),
                    Fid = 2,
                    Mid = 3,
                },
            };
        }


        [HttpGet]
        public List<HorseShort> GetHorses()
        {
            return horses;
        }

        [Route("getHorse")]
        [HttpGet]
        public HorseShort GetHorse(int id)
        {
            return horses.Find(x => x.Id == id);
        }

        [Route("filter")]
        [HttpPost]
        public ItemsRequest<HorseShort> Get(ItemsRequest<HorseShort> request)
        {
            List<QuickFilter<object>> filters = new List<QuickFilter<object>>();
            if (request.QuickFilters != null && request.QuickFilters.Count > 0)
            {
                filters = request.QuickFilters.Where(x => x.Value != null && x.Value.ToString() != "").ToList();
            }
            List<HorseShort> resultList = horses.Where(x => x.Name == request.searchQuery).ToList();

            if (filters != null && filters.Count > 0)
                resultList = resultList.Where(x => filters.All(y => {
                    x[y.ColumnName].Equals(y.Value);
                    var value = x[y.ColumnName];
                    var type = value.GetType();
                    var filterValue = y.Value.ToString();
                    if(type.Name == "DateTime")
                    {
                        bool resDate = (filterValue.Substring(0, 10)).Replace("-",".").Equals(x.GetDate());
                        return resDate;
                    }
                    bool res = filterValue.Equals(value.ToString());
                    return res;
                    }
                )).ToList();

            resultList.ForEach(x =>
            {
                if(x.Fid>=0)
                x.FName = horses.Find(y => y.Id == x.Fid).Name;
                if(x.Mid>=0)
                x.MName = horses.Find(y => y.Id == x.Mid).Name;
            });

            ItemsRequest<HorseShort> result = new ItemsRequest<HorseShort>()
            {
                Items = resultList,
                QuickFilters = request.QuickFilters,
                ItemsPerPage = request.ItemsPerPage,
                Total = resultList.Count,
                Page = (int)Math.Round((double)resultList.Count / request.ItemsPerPage,mode:MidpointRounding.ToPositiveInfinity),
                searchQuery = request.searchQuery
            };

            return result;

        }
    }
}
