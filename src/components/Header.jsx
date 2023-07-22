import { useState } from 'react'
import './Header.css'

const Header = ({onSort, itemCount}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [sortDown, setSortDown] = useState(false);
    const [sortOption, setSortOption] = useState('');

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
      setSortDown(!sortDown);
    };

    const defineSortHandle = (option) => {
        switch (option) {
            case 'option 1':
                onSort('priceHighLow')
                setSortOption('Price: High-Low')
                toggleDropdown()
                break;
            case 'option 2':
                onSort('priceLowHigh')
                setSortOption('Price: Low-High')
                toggleDropdown()
                break;
            case 'option 3':
                onSort('titleAtoZ')
                setSortOption('Title: A-Z')
                toggleDropdown()
                break;
            case 'option 4':
                onSort('titleZtoA')
                setSortOption('Title: Z-A')
                toggleDropdown()
                break;
        }
        
    }

    let path = decodeURI(window.location.pathname)

  return (
    <div className='header'>
        <div className='path-box'>
            <div className="global-path">{"products/" + path.substring(1)}</div>
            <div className="current-page">
                {path == "/" ? "All Products" : path.substring(1)} ({itemCount})
            </div>
        </div>
        <div className="sort">
            {/* <div className='sort-btn-box'> */}
                <div onClick={toggleDropdown} className='sort-btn'>
                    {sortOption == '' ? 'Sort By' : sortOption}
                    <span className='sortIcon'>
                        {sortDown ? ' ▲' : ' ▼'}
                    </span>
                </div>
            {/* </div> */}
            {isOpen && (
                <div className='sort-options'>
                    <div className='sort-option' onClick={() => defineSortHandle('option 1')}>Price: High-Low</div>
                    <div className='sort-option' onClick={() => defineSortHandle('option 2')}>Price: Low-High</div>
                    <div className='sort-option' onClick={() => defineSortHandle('option 3')}>Title: A-Z</div>
                    <div className='sort-option' onClick={() => defineSortHandle('option 4')}>Title: Z-A</div>
                </div>)
            }
        </div>
    </div>
  )
}

export default Header