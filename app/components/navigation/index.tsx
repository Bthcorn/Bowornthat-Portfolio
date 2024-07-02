'use client'
import {motion} from 'framer-motion'
import React from 'react'

export default function MyNavigation() {
  return (
    <motion.h1
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    Animate with Framer Motion
  </motion.h1>
  )
}
