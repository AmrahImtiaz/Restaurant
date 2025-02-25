import './ExploreMenu.css'

import { menu_list } from '../../assets/assets'

const ExploreMenu = () => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore Our Menu </h1>
        <p className='explore-menu-text'>Sed ut perspiciatis unde omnis iste natus 
            error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab 
            illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
             quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
    <div className="explore-menu-list">
        {menu_list.map((item, index) => {
            return (
            <div key={index} className='explore-menu-item'>
                <img src={item.menu_image} alt={item.name} />
                <p>{item.menu_name}</p>
            </div>
            )
        }
        )}
    </div>
    </div>
  )
}

export default ExploreMenu