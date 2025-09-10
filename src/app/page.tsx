'use client'

import { useState } from 'react'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Gradient } from '@/components/gradient'
import { useToast } from '@/components/toast-provider'
import { validateEmail } from '@/utils/validate-email'

import { CursorArrowRaysIcon, FireIcon, HeartIcon } from '@heroicons/react/16/solid'

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
		<div id="hero" className="relative p-10 h-screen flex flex-col">
			<Container className="relative flex-1 flex flex-col">
				<div className="pt-16 pb-24 sm:py-24 flex flex-col justify-center items-center text-center flex-1">
					{/* banner */}
					<div className='hidden sm:flex justify-center items-center text-center mb-12 ring-1 ring-white/20 rounded-lg'>
						<span className='text-md font-medium text-white ring-1 ring-white/20 px-8 py-2 rounded-lg bg-white/20 shadow-lg flex items-center gap-x-2 w-full'>
							<FireIcon className='inline-block align-middle w-4' />
							Social Capital is coming soon. Sign up now!
						</span>
					</div>

					{/* <h1 className="w-screen pb-1 font-display text-balance text-4xl sm:text-6xl leading-[1.1] sm:text-8xl font-medium tracking-tight text-black">
            Turn your
            <span className="inline-block align-middle mx-3">
            <img 
              src="/x-icon.svg" 
              alt="X (formerly Twitter) Icon" 
              className="inline-block w-8 sm:w-20 mb-2 align-middle"
            />
            </span>
            feed into a trading terminal
          </h1> */}

					{/* <p className="my-8 w-screen px-4 lg:px-0 lg:max-w-3xl text-xl leading-8 font-medium text-gray-950/75 sm:text-2xl sm:leading-9 text-center">
            Speculate on attention with spot and perps. Social Capital{' '}
            <img 
              src="/so-cap-icon.svg" 
              alt="Social Capital Icon" 
              className="inline-block w-6 h-6 mx-0.5 align-middle mb-2"
            />
            {' '}is the social sentiment market that lives on{' '}
            <img 
              src="/x-icon.svg" 
              alt="X (formerly Twitter) Icon" 
              className="inline-block w-6 h-6 mx-0.5 align-middle mb-2"
            />
            {' '}and runs on Hyperliquid{' '}
            <img 
              src="/hyperliquid.svg" 
              alt="Hyperliquid Icon" 
              className="inline-block w-6 h-6 mx-0.5 align-middle mb-2"
            />
          </p> */}

					{/* logo */}
					<div className="flex justify-center items-center mb-8">
						<img
							src="/logo-type.png"
							alt="Social Capital Icon"
							className="max-w-full h-auto"
						/>
					</div>

					<form onSubmit={handleNewsletterSignup} className="ring-1 ring-white/20 shadow-lg bg-white/15 mt-6 p-2 rounded-2xl flex flex-col items-center gap-y-4">
						<div className="flex items-center p-2 ring-1 ring-white/20 shadow-lg rounded-xl pl-4 w-96 bg-white/20">
							<input
								type="email"
								placeholder="Enter your email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								disabled={isSending}
								className="w-full outline-none focus:outline-none border-none bg-transparent disabled:opacity-50 disabled:cursor-not-allowed text-white placeholder-white/70"
							/>
							<Button
								type="submit"
								variant="secondary"
								disabled={isSending}
								className="flex items-center gap-x-2 w-auto px-4 text-white"
							>
								<CursorArrowRaysIcon className="inline-block align-middle w-5 text-white" />
								{isSending ? 'Signing Up...' : 'Sign Up'}
							</Button>
						</div>
						<p className="text-sm text-white/80 flex items-center gap-x-1 font-medium">
							Be the first to experience social perps markets
							<HeartIcon className="inline-block align-middle w-4" />
						</p>
					</form>
				</div>
			</Container>

			{/* Fixed footer */}
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
		</div>
	)
}


export default function Home() {
	return (
		<main className="overflow-hidden relative bg-gray-950">
			{/* <Gradient className="absolute inset-0 ring-1 ring-black/5 ring-inset" /> */}
			<Hero />
		</main>
	)
}