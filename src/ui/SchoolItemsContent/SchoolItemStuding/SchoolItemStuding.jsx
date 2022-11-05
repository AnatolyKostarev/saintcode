import React from 'react'
import clsx from 'clsx'
import s from './SchoolItemStuding.module.sass'

export const SchoolItemStuding = ({ show, className }) => {
  return (
    <div className={clsx(s.school__content, { [s.school__content__active]: show }, className)}>
      <p>
        Мы не стараемся запихнуть в тебя как можно больше фактов о программировании — это дорога в депрессию, подтверждено нашим опытом) Мы помогаем тебе научиться думать как инженер.
      </p>
      <p>
        Думать как инженер (software engineer):
        <ul>
          <li>
            На какие вопросы нужно себе ответить перед тем, как браться за задачу.
          </li>
          <li>
            Как нарисовать блок-схему, чтобы не запутаться.
          </li>
          <li>
            Как выделить в задаче главное.
          </li>
          <li>
            Сколько времени нужно выделить на задачу.
          </li>
          <li>
            С чем нужно разбираться самостоятельно, а когда уже пора спрашивать старших.
          </li>
          <li>
            Как формулировать вопросы так, чтобы коллеги тебя понимали.
          </li>
        </ul>
      </p>
    </div>
  )
}
