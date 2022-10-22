import React from 'react'
import { Section } from '../../ui/Section/Section'
import { Container } from '../../ui/Container/Container'
import { SectionTitle } from '../../ui/SectionTitle/SectionTitle'
import { ScheduleCard } from '../../ui/ScheduleCard/ScheduleCard'
import { dailyCard } from './dailyCard'
import s from './DailySchedule.module.sass'

export const DailySchedule = () => {
  return (
    <Section className={s.Schedule}>
      <Container>
        <SectionTitle>
          <span>Расписание</span>
          &nbsp;дня
        </SectionTitle>
        <div className={s.Schedule__cards}>
          {dailyCard.map(elem => (
            <ScheduleCard time={elem.time} text={elem.text} />
          ))}
        </div>
      </Container>
    </Section>
  )
}