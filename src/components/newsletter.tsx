'use client'

import { useState } from "react";
import { Container } from "./container";
import { useToast } from "./toast-provider";

export function Newsletter() {
  const [isSending, setIsSending] = useState<boolean>(false);
  const { showToast } = useToast();

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleNewsletterSignup = async (event: React.FormEvent<HTMLFormElement>) => {
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

    const url = "/api/newsletter";

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();
      console.log("RESULT", result);

      if (response.ok) {
        showToast("Successfully signed up!", "success");
      } else {
        showToast("An error occurred. Try again later.", "error");
      }
    } catch (error) {
      console.error("Request failed:", error);
      showToast("An error occurred. Try again later.", "error");
    } finally {
      setIsSending(false);
      emailInput.value = '';
    }
  };

  return (
    <Container className="">
      <div className="py-16 sm:py-24 my-16 sm:my-32">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gradient-to-br from-primary/10 to-slate-100 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32 border border-gray-200">
            <h2 className="mx-auto max-w-3xl text-center text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              Join the Social Capital Newsletter
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-center text-lg text-slate-600">
              Stay up to date with the latest features and developments.
            </p>
            <form className="mx-auto mt-10 flex max-w-md gap-x-4" onSubmit={handleNewsletterSignup}>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                autoComplete="email"
                disabled={isSending}
                className="min-w-0 flex-auto rounded-md bg-white px-3.5 py-2 text-base text-slate-900 outline-1 -outline-offset-1 outline-primary/20 placeholder:text-slate-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary/50 sm:text-sm/6 border border-slate-200 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <button
                type="submit"
                disabled={isSending}
                className="pointer-cursor flex-none rounded-md bg-gray-950 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSending ? 'Signing up...' : 'Sign up'}
              </button>
            </form>
            <svg
              viewBox="0 0 1024 1024"
              aria-hidden="true"
              className="absolute top-1/2 left-1/2 -z-10 size-256 -translate-x-1/2"
            >
              <circle r={512} cx={512} cy={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.3" />
              <defs>
                <radialGradient
                  r={1}
                  cx={0}
                  cy={0}
                  id="759c1415-0410-454c-8f7c-9a820de03641"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(512 512) rotate(90) scale(512)"
                >
                  <stop stopColor="#3B82F6" />
                  <stop offset={1} stopColor="#8B5CF6" stopOpacity={0} />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </Container>
  )
}
