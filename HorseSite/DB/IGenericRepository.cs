using System.Linq.Expressions;

namespace HorseSite.DB
{
    public interface IGenericRepository<TEntity> : IDisposable
        where TEntity : class
    {
        void Create(TEntity entity);
        TEntity FindById(int id);
        TEntity Find(Expression<Func<TEntity, bool>> predicate);
        IEnumerable<TEntity> Get();
        IEnumerable<TEntity> Get(Expression<Func<TEntity, bool>> predicate);
        void Remove(TEntity item);
        void Update(TEntity item);
    }
}
