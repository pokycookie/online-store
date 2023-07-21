'use client'

import { ChangeEvent, HTMLInputTypeAttribute, useState } from 'react'
import { motion } from 'framer-motion'

interface IProps {
  lable: string
  type?: HTMLInputTypeAttribute
  value: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export default function LabelInput(props: IProps) {
  const [onFill, setOnFill] = useState(false)

  const blurHandler = () => {
    if (props.value.trim() === '') {
      setOnFill(false)
    }
  }

  return (
    <div className="relative w-full mb-3">
      <motion.label
        className="absolute left-3"
        initial={{
          top: '50%',
          transform: 'translateY(-50%)',
          fontSize: '15px',
          color: 'rgb(156, 163, 175)',
        }}
        animate={{
          top: onFill ? 0 : '50%',
          transform: `translateY(${onFill ? '30%' : '-50%'})`,
          fontSize: onFill ? '11px' : '15px',
          color: onFill ? 'rgb(75, 85, 99)' : 'rgb(156, 163, 175)',
        }}
      >
        {props.lable}
      </motion.label>
      <input
        type={props.type}
        onFocus={() => setOnFill(true)}
        onBlur={blurHandler}
        className="w-full p-3 pt-6 pb-2 text-sm font-medium border rounded-md focus:outline outline-1 outline-blue-600"
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  )
}
