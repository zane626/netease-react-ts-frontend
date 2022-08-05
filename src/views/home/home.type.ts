/**
 * Created by zane on 2022/8/3 10:09
 * @description .
 */

export interface HeaderProps {
  placeholder: string
  onFocus: Function
}
export interface RankingCardProps {
  name: string
  updateFrequency: string
  tracks: Array<{ first: string, second: string }>
  id?: string
}
export interface RankingData {
  list: Array<RankingCardProps>
  [propName: string]: any;
}
