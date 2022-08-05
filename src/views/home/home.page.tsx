/**
 * Created by zane on 2022/7/20 10:15
 * @description .
 */
import React, {useState, useEffect} from "react"
import HomeCss from './home.module.scss'
import {HomeHeader, RankingCard} from './home.components'
import * as Types from './home.type'
import {useNavigate} from 'react-router-dom'
import {getTopDetail} from 'api'

const HomePage = React.memo(() => {
  const nav = useNavigate()
  const [rankingData, setRankingData] = useState({list: []} as Types.RankingData)
  const headerProps: Types.HeaderProps = {
    placeholder: '搜索',
    onFocus: () => {
      nav('/me')
    }
  }
  useEffect(() => {
    getTopDetail().then((data) => {
      setRankingData(data as Types.RankingData)
    })
  }, [])
  return (
    <div>
      <HomeHeader {...headerProps}/>
      {
        rankingData.list
          .filter((i: Types.RankingCardProps) => i.tracks && i.tracks.length)
          .map((item: Types.RankingCardProps) => {
            return (
              <div className={HomeCss['ranking-list']} key={item.id}>
                <RankingCard {...item}></RankingCard>
              </div>
            )
          })
      }
    </div>
  )
})
export default HomePage
