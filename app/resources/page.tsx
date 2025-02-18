
'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function Resources() {
  return (
    <motion.div
      className="flex items-center justify-center h-screen bg-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-4xl font-bold">Resources - Coming Soon</h1>
    </motion.div>
  )
}