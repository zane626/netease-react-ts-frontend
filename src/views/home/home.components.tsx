/**
 * Created by zane on 2022/8/3 10:07
 * @description .
 */
import React, {useState} from "react"
import HomeCss from './home.module.scss'
import * as Props from './home.type'
import {SearchBar} from 'antd-mobile'


export const HomeHeader = React.memo((props: Props.HeaderProps) => {
  const [keyword, setKeyword] = useState('')
  return (
    <>
      <div className={HomeCss['header']}>
        <SearchBar
          placeholder='搜索'
          onFocus={() => props.onFocus && props.onFocus()}
        />
      </div>
    </>
  )
})

export const RankingCard = React.memo((props: Props.RankingCardProps) => {
  return (
    <div className={HomeCss['ranking-card']}>
      <div className={HomeCss['ranking-card-info']}>
        <div className={HomeCss['ranking-card-name']}>{props.name}</div>
        <div className={HomeCss['ranking-card-sub']}>{props.updateFrequency}</div>
      </div>
      <ul role='list' className={HomeCss['ranking-card-list']}>
        {props.tracks && props.tracks.map((item, index) => {
          return (
            <li className={HomeCss['ranking-card-item']} key={props.id}>{index + 1}.{item.first} - {item.second}</li>)
        })}
      </ul>
    </div>
  )
})
