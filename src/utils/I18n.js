import languageConfig from './lang.json'

const I18n = (keywoard , placeholder , value) => {
  const lang = localStorage.getItem('lang') || 'eng'

  const text = languageConfig[lang][keywoard];
   
  if(placeholder && value)
  {
    return text.replace(placeholder, value)
  }
  return text;
}

export default I18n;