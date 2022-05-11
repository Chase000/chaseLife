import { useAppContext } from '../context/appContext'
import StatItem from './StatItem'
import { FaSuitcaseRolling, FaCalendarCheck, FaBug } from 'react-icons/fa'
import './StatsContainer.css'
const StatsContainer = () => {
  const { stats } = useAppContext()
  const defaultStats = [
    {
      title: 'pending applications',
      count: stats.pending || 0,
      icon: <FaSuitcaseRolling />,
    },
    {
      title: 'interviews scheduled',
      count: stats.interview || 0,
      icon: <FaCalendarCheck />,
    },
    {
      title: 'jobs declined',
      count: stats.declined || 0,
      icon: <FaBug />,
    },
  ]

  return (
    <section className='statsContainer'>
      {defaultStats.map((item, index) => {
        return <StatItem key={index} {...item} />
      })}
    </section>
  )
}
export default StatsContainer