import React from 'react'
import clsx from 'clsx'
import { Container } from '../Container'
import { Button } from '../Button'
import s from './FooterCopyright.module.sass'

export const FooterCopyright = ({ className }) => {
  return (
    <div className={clsx(s.FooterCopyright, className)}>
      <Container className={s.copy}>
        <div className={s.left}>
          <p className={clsx(s.text)}>
            © 2019-
            {new Date().getFullYear()}
          </p>
          <p className={clsx(s.text)}>
            ИП Мельников | ИНН 781435967821 ОГРНИП 319784700259930
          </p>
        </div>
        <Button className={clsx(s.policy)} text="Политика конфиденциальности" />
      </Container>
    </div>
  )
}
