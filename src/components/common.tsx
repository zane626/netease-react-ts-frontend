/**
 * Created by zane on 2022/8/2 10:12
 * @description .
 */
import React, {useState} from 'react'

export interface IconProps {
  name: string
}
export const Icon = React.memo((props: IconProps) => {
    return (<i className={props.name}>222</i>)
  }
)
