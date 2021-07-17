import './CSS/App.css';
import React, { useState } from 'react';
import {UppercaseLetters, LowercaseLetters, Symbols, Numbers} from './Components/Characters'

function App() {

  const [password, setPassword] = useState('Password');
  const [strength, setStrength] = useState(20);
  const [includeUp, setIncludeUp] = useState(false);
  const [includeLow, setIncludeLow] = useState(false);
  const [includeNum, setIncludeNum] = useState(false);
  const [includeSym, setIncludeSym] = useState(false);
  const [alert, setAlert] = useState('');
  const handlePassword = (e) => {
      let characterList = '';

      if(includeUp){
        characterList += UppercaseLetters;
      }

      if(includeLow){
        characterList += LowercaseLetters;
      }

      if(includeNum){
        characterList += Numbers;
      }

      if(includeSym){
        characterList += Symbols;
      }

      setPassword(createPassword(characterList));
  }

  const createPassword = (characterList) => {
    let password = '';
    const CharacterListLength = characterList.length;

    for(let i=0; i < strength; i++){
      const characterIndex = Math.round(Math.random() * CharacterListLength);
      password += characterList.charAt(characterIndex);
    }
   
    return password;
  }

  const handleCopy = (e) => {
    navigator.clipboard.writeText(password);
    if(password.length > 0){
      setAlert('Password copied successfully');
    }
    else{
      setAlert('Please Generate Password');
    }
  } 
  return (
    <div className="App">
      <div className="container">
        <div className="generator">
          <h1 className="generator_header">
            Password Generator
          </h1>
          <div className="generator_password">
            <h3>{password}</h3>
            <button onClick={handleCopy} className="copy_button">
              <i className="far fa-clipboard"></i>
            </button>
          </div>

          <div className="form-group">
            <label htmlFor="password-strength">Password Length</label>
            <input 
              defaultValue={strength}
              onChange={(e) => setStrength(e.target.value)}
              type="number" 
              id='password-strength' 
              name="password-strength" 
              max="20" min="10"
            />
          </div>

          <div className="form-group">
            <label htmlFor="uppercase-letters">Include Uppercase Letters</label>
            <input 
              onChange={(e) => setIncludeUp(e.target.checked)}
              checked ={includeUp}
              type="checkbox" 
              id='uppercase-letters' 
              name="uppercase-letters"
            />
          </div>

          <div className="form-group">
            <label htmlFor="lowercase-letters">Include Lowercase Letters</label>
            <input 
              onChange={(e) => setIncludeLow(e.target.checked)}
              checked ={includeLow}
              type="checkbox" 
              id='lowercase-letters' 
              name="lowercase-letters"
            />
          </div>

          <div className="form-group">
            <label htmlFor="include-symbols">Include Symbols </label>
            <input
              onChange={(e) => setIncludeSym(e.target.checked)}
              checked ={includeSym}
              type="checkbox" 
              id='include-symbols' 
              name="include-symbols"
            />
          </div>

          <div className="form-group">
            <label htmlFor="include-numbers">Include Numbers</label>
            <input 
              onChange={(e) => setIncludeNum(e.target.checked)}
              checked ={includeNum}
              type="checkbox" 
              id='include-number' 
              name="include-number"
            />
          </div>
          <div className="generateBtn_Div">
            <button onClick={handlePassword} className="generator_btn">
              <i className="fas fa-cogs"></i>
              Generate Password
            </button>
          </div> <p className='alert_Message'>{alert}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
