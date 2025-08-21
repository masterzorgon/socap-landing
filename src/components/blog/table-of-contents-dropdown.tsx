'use client'

import { Button } from '@/components/button'
import { ChevronDownIcon, ListBulletIcon } from '@heroicons/react/16/solid'
import { useState } from 'react'

interface Section {
	id: string
	title: string
}

export function TableOfContentsDropdown({ sections }: { sections: Section[] }) {
	const [isOpen, setIsOpen] = useState(false)

	const handleSectionClick = (sectionId: string) => {
		setIsOpen(false)
		
		const targetElement = document.getElementById(sectionId)
		
		if (targetElement) {
			targetElement.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
				inline: 'nearest'
			})
		}
	}

	return (
		<>
			<Button 
				variant="outline" 
				className='border-2 flex w-full'
				onClick={() => setIsOpen(!isOpen)}
			>
				<span className='flex items-center gap-x-2'>
					<ListBulletIcon className='size-4' />
					Table of Contents
				</span>
				<ChevronDownIcon className={`size-4 ml-auto transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
			</Button>

			{isOpen && (
				<div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-10 max-h-64 overflow-y-auto">
					<div className="p-4">
						{sections.length > 0 ? (
							<ul className="space-y-2">
								{sections.map((section) => (
									<li key={section.id}>
										<button
											onClick={() => handleSectionClick(section.id)}
											className="cursor-pointer block w-full text-left text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50 px-2 py-1 rounded transition-colors duration-150"
										>
											{section.title}
										</button>
									</li>
								))}
							</ul>
						) : (
							<p className="text-sm text-gray-500 italic">No sections found</p>
						)}
					</div>
				</div>
			)}
		</>
	)
} 