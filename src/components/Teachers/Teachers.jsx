import React from 'react'
import { Section } from '../../ui/Section'
import { Container } from '../../ui/Container'
import { SectionTitle } from '../../ui/SectionTitle'
import { TeacherCard } from '../../ui/TeacherCard'
import { teachersData } from './teachersData'
import s from './Teachers.module.sass'

export const Teachers = () => {
  return (
    <Section className={s.Teachers}>
      <Container className={s.container}>
        <SectionTitle className={s.title}>
          Преподаватели
        </SectionTitle>
        <div className={s.cards__container}>
          {teachersData.map(({ ...elem }) => (
            <TeacherCard {...elem} key={elem.id}>
              <ul className={s.list}>
                {elem.list.map(list => (
                  <li key={list} className={s.list__item}>
                    {list}
                  </li>
                ))}
              </ul>
            </TeacherCard>
          ))}
        </div>
      </Container>
    </Section>
  )
}
