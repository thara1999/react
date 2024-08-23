import  { useContext } from 'react';
import { LanguageContext } from './Laun';
import './Settings.css';


const Settings = () => {
  const { setLanguage } = useContext(LanguageContext);

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <div className="settings">
      
      <div className="settings-content">
        <h2>Settings</h2>
        <label htmlFor="language-select">Language:</label>
        <select id="language-select" onChange={handleLanguageChange}>
          <option value="English">English</option>
          <option value="French">French</option>
          <option value="German">German</option>
          <option value="Russian">Russian</option>
          <option value="Spanish">Spanish</option>
          <option value="Chinese">Chinese</option>
        </select>
      </div>
    </div>
  );
};

export default Settings;
