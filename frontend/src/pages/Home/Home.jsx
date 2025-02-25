
import './Home.css'
import Header from '../../components/Header/Header.jsx'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu.jsx'

const Home = () => {

  const[category,SetCategory] = useState('All');

  return (
    <div>
      <Header />
      <ExploreMenu category={category} SetCategory=''/>
    </div>
  )
}

export default Home