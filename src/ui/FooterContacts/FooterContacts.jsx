import React from 'react'
import clsx from 'clsx'
import { Address } from '../Address/Address'
import { Place } from '../Place/Place'
import { BusinessHours } from '../BusinessHours/BusinessHours'
import { Phone } from '../Phone/Phone'
import { Email } from '../Email/Email'
import { FooterLinks } from '../FooterLinks/FooterLinks'
import { SocialBlock } from '../SocialBlock/SocialBlock'
import fb from './fb.svg'
import vk from './vk.svg'
import inst from './inst.svg'
import s from './FooterContacts.module.sass'

export const FooterContacts = ({ className }) => {
  return (
    <div className={clsx(s.FooterContacts, className)}>
      <div className={clsx(s.inner__left)}>
        <Phone linkSize={s.link__size} className={s.phone__size} />
        <Email />
        <div className={clsx(s.address__info)}>
          <Address
            city="Санкт-Петербург"
            address="Загородный проспект, дом 12 (в арку и налево, подъезд №2),
            3 этаж, квартира 15"
          />
          <Place text="SaintCode Bootcamp" />
          <BusinessHours from="12:00" to="19:00" />
        </div>
      </div>
      <div className={clsx(s.inner__right)}>
        <FooterLinks />
        <SocialBlock vk={vk} fb={fb} inst={inst} />
      </div>
    </div>
  )
}
