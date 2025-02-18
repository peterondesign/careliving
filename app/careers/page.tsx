
'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function Careers() {
  return (
    <motion.div
      className="flex items-center justify-center h-screen bg-gray-100"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold">Careers - Coming Soon</h1>
    </motion.div>
  )
}