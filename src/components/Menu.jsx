import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';
import { LanguageContext } from './Laun'; 

const Menu = () => {
  const { language, menuTranslations } = useContext(LanguageContext);
  const [activeIndex, setActiveIndex] = useState(0); 

  const handleMenuClick = (index) => {
    setActiveIndex(index); 
  };

  
  const backgroundClass = `navbar-bg-${activeIndex}`;

  return (
    <nav className={`navbar ${backgroundClass}`}>
      <ul>
        {menuTranslations[language].map((item, index) => (
          <li key={index}>
            <Link
              to={index === 0 ? '/' : `/${item.toLowerCase().replace(' ', '')}`}
              className={activeIndex === index ? 'active' : ''}
              onClick={() => handleMenuClick(index)}
            >
              {item}
            </Link>
          </li>
        ))}
        <li>
          <Link 
            to="/settings"
            className={activeIndex === menuTranslations[language].length ? 'active' : ''}
            onClick={() => handleMenuClick(menuTranslations[language].length)}
          >
            Settings
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
