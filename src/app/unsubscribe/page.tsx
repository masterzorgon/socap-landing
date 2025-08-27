"use client";

import { useState } from 'react';
import { useToast } from '@/components/toast-provider';

import { Container } from '@/components/container';
import { Button } from '@/components/button';

export default function Unsubscribe() {
    const [isSending, setIsSending] = useState<boolean>(false);
    const { showToast } = useToast();

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleUnsubscribe = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSending(true);

        const form = event.target as HTMLFormElement;
        const emailInput = form.email as HTMLInputElement;
        const email = emailInput.value;

        if (!validateEmail(email)) {
            showToast("Invalid email format", "error");
            setIsSending(false);
            return;
        }

        try {
            const response = await fetch("/api/unsubscribe", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const result = await response.json();

            if (response.ok) {
                showToast("Successfully unsubscribed!", "success");
                emailInput.value = '';
            } else {
                showToast(result.error || "An error occurred. Try again later.", "error");
            }
        } catch (error) {
            console.error("Request failed:", error);
            showToast("An error occurred. Try again later.", "error");
        } finally {
            setIsSending(false);
        }
    };

    return (
        <>
            <header className="py-10 sm:py-16 lg:py-20">
                <Container>
                    <div className="mx-auto max-w-2xl text-center">
                        <h1 className="font-display text-5xl font-medium tracking-tighter text-blue-600 sm:text-7xl">
                            Unsubscribe
                        </h1>
                        <p className="mt-4 font-display text-2xl tracking-tight text-blue-900">
                            We&apos;re sorry to see you go
                        </p>
                    </div>
                </Container>
            </header>

            <section>
                <Container>
                    <div className="mx-auto max-w-2xl lg:max-w-none">
                        <div className="rounded-2xl bg-gray-50 py-10 sm:py-16 lg:py-20">
                            <div className="mx-auto max-w-xl px-6 lg:max-w-none lg:px-8">
                                <div className="mx-auto max-w-2xl text-center">
                                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                        Unsubscribe from our Newsletter
                                    </h2>
                                    <p className="mt-4 text-lg leading-8 text-gray-600">
                                        By unsubscribing, you are choosing to remove yourself from the Social Capital newsletter.
                                    </p>

                                    <form onSubmit={handleUnsubscribe} method="POST" className="mt-2 text-white">
                                        <div className='mt-4'>
                                            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-start">
                                                Email
                                            </label>
                                            <div className="mt-2.5">
                                                <input
                                                    type="email"
                                                    name="email"
                                                    id="email"
                                                    autoComplete="email"
                                                    required
                                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>

                                        <div className="mt-4 flex justify-center border-t border-gray-900/10 pt-8">
                                            <Button
                                                variant="primary"
                                                color="white"
                                                type="submit"
                                                disabled={isSending}
                                            >
                                                <span className="mr-1.5">
                                                    {isSending ? "Unsubscribing..." : "Unsubscribe"}
                                                </span>
                                                {/* <ActionIcon className="h-6 w-6 flex-none fill-black text-black" /> */}
                                            </Button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
}