// import  { useContext } from "react";
// import { Link } from "react-router-dom";
// import Laun from "./Laun";
// import "./Menu.css";

// const Menu = () => {
//   const { language, menuTranslations } = useContext(Laun);

//   return (
//     <nav className="menu">
//       {menuTranslations[language].map((item, index) => (
//         <Link 
//           to={index === 0 ? "/" : `/${item.toLowerCase().replace(" ", "")}`} 
//           key={index} 
//           className="menu-item"
//         >
//           {item}
//         </Link>
//       ))}
//       <Link to="/settings" className="menu-item">
//         Settings
//       </Link>
//     </nav>
//   );
// };

// export default Menu;
import  { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';
import { LanguageContext } from './Laun'; // Import the context

const Menu = () => {
  const { language, menuTranslations } = useContext(LanguageContext); // Destructure from context

  return (
    <nav className="navbar">
      <ul>
        {menuTranslations[language].map((item, index) => (
          <li key={index}>
            <Link to={index === 0 ? '/' : `/${item.toLowerCase().replace(' ', '')}`}>
              {item}
            </Link>
          </li>
        ))}
        <li>
          <Link to="/settings">Settings</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
