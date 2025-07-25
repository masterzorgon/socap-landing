'use client'

import { motion } from "framer-motion";
import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/20/solid';
import { UsersIcon } from '@heroicons/react/24/outline';

const stats = [
  { id: 1, name: '@elonmusk', stat: '71,897', icon: UsersIcon, change: '122', changeType: 'increase', market: 'Perps' },
  { id: 2, name: '@masterzorgon', stat: '58.16%', icon: UsersIcon, change: '5.4%', changeType: 'increase', market: 'Spot' },
  { id: 3, name: '@so_capital', stat: '24.57%', icon: UsersIcon, change: '3.2%', changeType: 'decrease', market: 'Perps' },
];

// duplicate the items to enable seamless continuous scrolling
const loopStats = [...stats, ...stats];

interface CarouselCardProps {
  item: typeof stats[0];
}

const CarouselCard = ({ item }: CarouselCardProps) => (
  <div className="relative flex-shrink-0 w-full max-w-xs px-4 mt-10">
    <div className="relative overflow-hidden rounded-lg bg-white p-6 shadow-sm">
      <dt>
        <div className="absolute rounded-md bg-indigo-500 p-3 ">
          <item.icon aria-hidden="true" className="h-6 w-6 text-white" />
        </div>
        <div className="flex justify-between">
            <p className="ml-16 truncate text-sm font-medium text-gray-500">
                {item.name}
            </p>
            <p className="truncate text-sm font-medium text-gray-500 bg-black/10 rounded-full px-2 py-.5">
                {item.market}
            </p>
        </div>
      </dt>
      <dd className="ml-16 flex items-baseline justify-between">
        <p className="text-2xl font-semibold text-gray-900">
            {item.stat}
        </p>
        <p className={`ml-2 flex items-baseline text-sm font-semibold ${
          item.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
        }`}>
          {item.changeType === 'increase' ? (
            <ArrowUpIcon aria-hidden="true" className="h-5 w-5 text-green-500" />
          ) : (
            <ArrowDownIcon aria-hidden="true" className="h-5 w-5 text-red-500" />
          )}
          <span className="sr-only">
            {item.changeType === 'increase' ? 'Increased' : 'Decreased'} by
          </span>
          {item.change}
        </p>
      </dd>
    </div>
  </div>
);

export default function AutoCarousel() {
  // original cycle duration (seconds)
  const baseDuration = stats.length * 5; // e.g., 3 * 5 = 15s
  // slow down by 40% → new speed = 60% of original, so duration increases by 1/0.6
  const duration = baseDuration / 0.6;

  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex"
        style={{ width: `${loopStats.length * (100 / stats.length)}%` }}
        // animate from 0% to -50% for a seamless loop when duplicated
        animate={{ x: ["0%", "-50%"] }}
        transition={{ 
          x: { 
            repeat: Infinity, 
            repeatType: "loop", 
            duration, 
            ease: "linear" 
          } 
        }}
      >
        {loopStats.map((item, idx) => (
          <CarouselCard key={idx} item={item} />
        ))}
      </motion.div>
    </div>
  );
}
