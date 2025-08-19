'use client'

import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import { handleSectionClick } from "@/utils/navigation"

export interface NavigationItem {
	id: string
	label: string
	icon: string
}

interface NavigationSidebarProps {
	showToast: (message: string, type?: 'success' | 'error' | 'info' | 'warning') => void
	navigationItems: NavigationItem[]
	title?: string
	basePath?: string
}

export function NavigationSidebar({ 
	showToast, 
	navigationItems, 
	title = "Page Sections",
	basePath = ""
}: NavigationSidebarProps) {
	const router = useRouter()
	const [activeSection, setActiveSection] = useState<string>('')

	const handleNavClick = (sectionId: string) => {
		setActiveSection(sectionId)
		const element = document.getElementById(sectionId)
		
		// Use the basePath to determine which page we're on
		const currentPath = basePath || window.location.pathname
		const url = `${window.location.origin}${currentPath}#${sectionId}`
		
		// Copy URL to clipboard
		import('@/utils/clipboard').then(({ copyToClipboard }) => {
			copyToClipboard(url, showToast)
		})

		// Update the URL without page reload
		router.push(`${currentPath}#${sectionId}`)
		
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' })
		}
	}

	useEffect(() => {
		const handleScroll = () => {
			const sections = navigationItems.map(item => item.id)
			const scrollPosition = window.scrollY + 100

			for (let i = sections.length - 1; i >= 0; i--) {
				const element = document.getElementById(sections[i])
				if (element && element.offsetTop <= scrollPosition) {
					setActiveSection(sections[i])
					break
				}
			}
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [navigationItems])

	return (
		<nav className="w-full">
			<div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg border border-gray-200 p-3">
				<h3 className="text-md font-semibold text-gray-900 mb-3 px-2">{title}</h3>
				<ul className="space-y-1">
					{navigationItems.map((item) => (
						<li key={item.id}>
							<button
								onClick={() => handleNavClick(item.id)}
								className={`w-full text-left px-2 py-1.5 rounded-md cursor-pointer text-sm font-medium transition-all duration-200 flex items-center gap-2 hover:bg-gray-100 ${
									activeSection === item.id
										? 'bg-primary/10 text-primary border-l-2 border-primary'
										: 'text-gray-600 hover:text-gray-900'
								}`}
							>
								<span className="text-sm">{item.icon}</span>
								<span>{item.label}</span>
							</button>
						</li>
					))}
				</ul>
			</div>
		</nav>
	)
}