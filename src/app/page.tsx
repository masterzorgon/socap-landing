'use client'

import { useState } from 'react'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { useToast } from '@/components/toast-provider'
import { validateEmail } from '@/utils/validate-email'

import { CursorArrowRaysIcon } from '@heroicons/react/16/solid'

function CenterContent() {
	const [email, setEmail] = useState('')
	const [isSending, setIsSending] = useState(false)
	const { showToast } = useToast()

	const handleNewsletterSignup = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		if (!email.trim()) {
			showToast("Please enter an email address", "error")
			return
		}

		if (!validateEmail(email)) {
			showToast("Invalid email format", "error")
			return
		}

		setIsSending(true)

		try {
			const response = await fetch('/api/newsletter', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ email }),
			})

			const result = await response.json()

			if (response.ok) {
				showToast("Successfully signed up!", "success")
				setEmail('')
			} else {
				if (response.status === 409) {
					showToast("Email is already subscribed", "error")
				} else {
					showToast("An error occurred. Try again later.", "error")
				}
			}
		} catch (error) {
			console.error("Request failed:", error)
			showToast("An error occurred. Try again later.", "error")
		} finally {
			setIsSending(false)
		}
	}

	return (
		<div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
			<div className="bg-gray-950/80 backdrop-blur-sm p-6">
				<h3 className="text-white font-semibold text-lg mb-3">
					Turn your Twitter feed into a trading terminal
				</h3>
				<p className="text-white/80 text-sm leading-relaxed mb-4">
					Social Capital is the social sentiment market that lives on Twitter and runs on Hyperliquid. 
				</p>
				<p className="text-white/80 text-sm leading-relaxed mb-6">
					Speculate on reputation, influence, and attention, using spot and perps — all without leaving the timeline. <span className="text-sm inline-flex items-center gap-x-1">Coming to your <svg className="w-4 h-4 text-white/80" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg> feed Q4 2025</span>
				</p>
				
				<form onSubmit={handleNewsletterSignup} className="flex gap-2">
					<input
						type="email"
						placeholder="Enter your email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						disabled={isSending}
						className="text-sm flex-1 px-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
					/>
					<Button
						type="submit"
						variant="secondary"
						disabled={isSending}
						className="text-sm py-2 px-3 bg-white/20 hover:bg-white/30 transition-colors duration-200 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
					>
						{isSending ? 'Signing Up...' : 'Sign Up'}
					</Button>
				</form>
			</div>
		</div>
	)
}

function Hero() {
	const [email, setEmail] = useState('')
	const [isSending, setIsSending] = useState(false)
	const { showToast } = useToast()

	const handleNewsletterSignup = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		if (!email.trim()) {
			showToast("Please enter an email address", "error")
			return
		}

		if (!validateEmail(email)) {
			showToast("Invalid email format", "error")
			return
		}

		setIsSending(true)

		try {
			const response = await fetch('/api/newsletter', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ email }),
			})

			const result = await response.json()

			if (response.ok) {
				showToast("Successfully signed up!", "success")
				setEmail('')
			} else {
				if (response.status === 409) {
					showToast("Email is already subscribed", "error")
				} else {
					showToast("An error occurred. Try again later.", "error")
				}
			}
		} catch (error) {
			console.error("Request failed:", error)
			showToast("An error occurred. Try again later.", "error")
		} finally {
			setIsSending(false)
		}
	}

	return (
		<div id="hero" className="relative p-10 h-screen">

			<div className="flex flex-col justify-center items-center text-center flex-1">
				{/* logo */}
				<div className="flex justify-center items-center mb-8 flex-col items-start gap-y-8">
					<img
						src="/wordmark.png"
						alt="Social Capital Wordmark"
						className="max-w-full h-auto"
					/>
				</div>
			</div>
		</div>
	)
}

function BottomLeftText() {
	return (
		<div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-20 z-40">
			<div className="bg-gray-950/80 backdrop-blur-sm p-6">
				<h3 className="text-white font-semibold text-lg mb-3">
					Turn your Twitter feed into a trading terminal
				</h3>
				<p className="text-white/80 text-sm leading-relaxed mb-4">
					Social Capital is the social sentiment market that lives on Twitter and runs on Hyperliquid. 
				</p>
				<p className="text-white/80 text-sm leading-relaxed mb-4">
					Speculate on reputation, influence, and attention, using spot and perps — all without leaving the timeline.
				</p>
			</div>
			
		</div>
	)
}

function Footer() {
	return (
		<footer className="fixed bottom-0 left-0 right-0 w-full flex flex-col items-center justify-center gap-y-2 py-4 bg-gray-950/80 backdrop-blur-sm">
			<div className="flex items-center space-x-8">
				<a
					href="https://t.me/socapitaltrade"
					target="_blank"
					rel="noopener noreferrer"
					className="flex flex-col items-center text-white/80 hover:text-blue-300 transition-colors duration-200"
				>
					<div className="w-8 h-8  rounded-full flex items-center justify-center">
						<svg className="w-5 h-5 text-white/80" fill="currentColor" viewBox="0 0 24 24">
							<path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
						</svg>
					</div>
				</a>
				<a
					href="https://x.com/so_capital"
					target="_blank"
					rel="noopener noreferrer"
					className="flex flex-col items-center text-white/80 hover:text-white transition-colors duration-200"
				>
					<div className="w-8 h-8 rounded-full flex items-center justify-center">
						<svg className="w-5 h-5 text-white/80" fill="currentColor" viewBox="0 0 24 24">
							<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
						</svg>
					</div>
				</a>
			</div>
			<div className="text-center">
				<p className="text-sm text-white/70">
					© 2025 Social Capital. All rights reserved.
				</p>
			</div>
		</footer>
	)
}

export default function Home() {
	return (
		<main className="overflow-hidden relative bg-gray-950">
			<Hero />
			<CenterContent />
			<Footer />
		</main>
	)
}