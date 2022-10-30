import React from 'react'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Logo from '../../ui/Logo/Logo'
import Phone from '../../ui/Phone/Phone'
import Nav from '../../ui/Nav/Nav'
import Button from '../../ui/Button/Button'
import s from './Header.module.sass'

export const Header = () => {
  const { t, i18n } = useTranslation()
  const location = useLocation()

  const background = {
    header: 'rgba(57, 72, 61, 1)',
    button: 'rgba(89, 248, 129, 1)',
  }

  /* функция для изменения фона header, button в зависимости от адреса страницы */
  
  const changeHeaderBackGround = () => {
    switch (location.pathname) {
      case '/school':
        background.header = 'rgba(62, 43, 46, 1)'
        background.button = 'rgba(229, 111, 130, 1)'
        break
      case '/program':
        background.header = 'rgba(62, 43, 46, 1)'
        background.button = 'rgba(229, 111, 130, 1)'
        break
      case '/faq':
        background.header = 'rgba(62, 43, 46, 1)'
        background.button = 'rgba(229, 111, 130, 1)'
        break
      case '/blog':
        background.header = 'rgba(72, 68, 57, 1)'
        background.button = 'rgba(255, 200, 52, 1)'
        break
      default:
        background.header = 'rgba(57, 72, 61, 1)'
        background.button = 'rgba(89, 248, 129, 1)'
    }
    return background
  }
  changeHeaderBackGround()

  // For test translation
  const toggleLang = async () => {
    await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <header className={s.Header} style={{ background: background.header }}>
      <div className={s.wrapper}>
        <div className={s.block}>
          <Logo />
          <Phone />
        </div>
        <div className={s.block}>
          <Nav />
          <Button
            className={s.header__btn}
            onClick={toggleLang}
            text={t('Люблю поговорить, позвони мне')}
            style={{ background: background.button }}
          />
        </div>
      </div>
    </header>
  )
}
