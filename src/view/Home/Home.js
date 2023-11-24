import React, { useState } from 'react'
import I18n from '../../utils/I18n.js';
import './Home.css'

const Home = () => {
  const userCount = 40;
  const [lang, setLang] = useState("eng")
  return (
    <div>
      <h1 className='head'>Internationlization (I18n)</h1>

      <div className='main-container'>
        <h1>{I18n("wellcomeMessage")}</h1>

        <h2>{I18n("normalMessage")}</h2>

        <p className='greet-para'>{I18n("greetingMessage")}</p>



        <select defaultValue={localStorage.getItem('lang')} onChange={(e) => {
          localStorage.setItem('lang', e.target.value)
          window.location.reload();
        }}
          className='lang-selector'
        >
          <option value='mr'>Marathi</option>
          <option value='hin'>Hindi</option>
          <option value='eng'>English</option>
        </select>

        <p className='student-count'>{I18n("userStatCount", "<studentcount>", userCount)}</p>
      </div>
    </div>
  )
}

export default Home
