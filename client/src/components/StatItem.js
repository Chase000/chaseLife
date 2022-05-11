import './StatItem.css'

function StatItem({ count, title, icon }) {
  return (
    <article className={'StatItem'} name={title}>
      <header>
        <span className='count' name={title}>{count}</span>
        <div className='icon' name={title}>{icon}</div>
      </header>
      <h5 className='title'>{title}</h5>
    </article>
  )
}

export default StatItem