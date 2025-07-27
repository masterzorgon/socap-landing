// src/components/InfiniteCarousel.tsx
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/20/solid'

const stats = [
  {
    id: 1,
    name: '@elonmusk',
    stat: '71.89K',
    pfp: 'https://pbs.twimg.com/profile_images/1787927879646396417/scmjMaBs_400x400.jpg',
    amount: '122%',
    changeType: 'increase',
    market: 'Perps',
  },
  {
    id: 2,
    name: '@masterzorgon',
    stat: '58.16M',
    pfp: 'https://pbs.twimg.com/profile_images/1936002956333080576/kqqe2iWO_400x400.jpg',
    amount: '5.42%',
    changeType: 'increase',
    market: 'Spot',
  },
  {
    id: 3,
    name: '@so_capital',
    stat: '24.57K',
    pfp: 'https://pbs.twimg.com/profile_images/1748108741503803392/EmT4yP6S_400x400.jpg',
    amount: '3.22%',
    changeType: 'decrease',
    market: 'Perps',
  },
]

// Duplicate once for seamless looping
const loopStats = [...stats, ...stats]

interface CarouselCardProps {
  item: typeof stats[0]
}

const CarouselCard: React.FC<CarouselCardProps> = ({ item }) => (
  <div className="flex-shrink-0 w-full max-w-xs px-4">
    <div className="relative overflow-hidden rounded-lg bg-white p-6 shadow-sm">
      <dt>
        <div className="absolute rounded-full border border-gray-100">
          <img
            src={item.pfp}
            alt={`${item.name} profile picture`}
            className="h-12 w-12 rounded-full object-cover"
          />
        </div>
        <div className="flex justify-between">
          <p className="ml-16 truncate text-sm font-medium text-gray-500">
            {item.name}
          </p>
          <p className="truncate text-sm font-medium text-gray-500 bg-black/10 rounded-full px-2 py-0.5">
            {item.market}
          </p>
        </div>
      </dt>
      <dd className="ml-16 flex items-baseline justify-between">
        <p className="text-2xl font-semibold text-gray-900">{item.stat}</p>
        <p
          className={`ml-2 flex items-baseline text-sm font-semibold ${
            item.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
          }`}
        >
          {item.changeType === 'increase' ? (
            <ArrowUpIcon aria-hidden="true" className="h-5 w-5 text-green-500" />
          ) : (
            <ArrowDownIcon aria-hidden="true" className="h-5 w-5 text-red-500" />
          )}
          <span className="sr-only">
            {item.changeType === 'increase' ? 'Increased' : 'Decreased'} by
          </span>
          {item.amount}
        </p>
      </dd>
    </div>
  </div>
)

export default function Carousel() {
  // base: 3 items * 5s each = 15s, slowed by 40% ⇒ 15 / 0.6 = 25s
  const duration = (stats.length * 5) / 0.6

  return (
    <div
      className="
        relative
        m-auto
        w-full max-w-4xl
        overflow-hidden
        bg-white
        before:absolute before:left-0 before:top-0 before:z-10
        before:h-full before:w-24
        before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)]
        before:content-['']
        after:absolute after:right-0 after:top-0 after:z-10
        after:h-full after:w-24 after:-scale-x-100
        after:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)]
        after:content-['']
      "
    >
      <motion.div
        className="flex"
        style={{ width: `${(loopStats.length / stats.length) * 100}%` }} // 200%
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          x: {
            repeat: Infinity,
            ease: 'linear',
            duration,
          },
        }}
      >
        {loopStats.map((item, idx) => (
          <CarouselCard key={idx} item={item} />
        ))}
      </motion.div>
    </div>
  )
}
