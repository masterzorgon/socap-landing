import { useToast } from "@/components/toast-provider";
import { Container } from "@/components/container";
import { handleSectionClick } from "@/utils/navigation";

import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/navigation";

const faqs = [
    {
        question: "What fees do you take?",
        answer:
            "...",
    },
    {
        question: 'Which blockchains are you built on?',
        answer:
            "...",
    },
    {
        question: 'Can I use my Solana assets on Social Capital?',
        answer:
            "...",
    },
    {
        question: 'Is Social Capital audited?',
        answer:
            "...",
    },
    {
        question: 'Which browsers are supported?',
        answer:
            "...",
    },
    {
        question: 'Will Social Capital have a token?',
        answer:
            "...",
    },
];

export function FAQSection() {
    const router = useRouter();
    const { showToast } = useToast();

    const leftFaqs = faqs.slice(0, Math.ceil(faqs.length / 2));
    const rightFaqs = faqs.slice(Math.ceil(faqs.length / 2));

    return (
        <Container className="mt-16">
            <section id="faq" className="scroll-mt-24">
                <h2
                    className="text-2xl font-medium tracking-tight text-gray-800 mb-8 cursor-pointer hover:text-primary transition-colors"
                    onClick={() => handleSectionClick('faq', router, showToast)}
                >
                    Frequently Asked Questions
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 divide-y divide-gray-300 lg:divide-y-0 divide-dashed">
                    <div className="pb-4 lg:pb-0">
                        <dl className="divide-y divide-gray-300 divide-dashed">
                            {leftFaqs.map((faq) => (
                                <Disclosure
                                    key={faq.question}
                                    as="div"
                                    className="py-6 first:pt-0 last:pb-0"
                                >
                                    {({ open }) => (
                                        <>
                                            <dt>
                                                <Disclosure.Button className="group flex w-full items-start justify-between text-left cursor-pointer">
                                                    <span className="text-base font-semibold text-gray-800">
                                                        {faq.question}
                                                    </span>
                                                    <span className="ml-6 flex h-7 items-center">
                                                        <PlusSmallIcon
                                                            className={`h-6 w-6 text-gray-500 ${open ? 'hidden' : 'block'}`}
                                                        />
                                                        <MinusSmallIcon
                                                            className={`h-6 w-6 text-gray-500 ${open ? 'block' : 'hidden'}`}
                                                        />
                                                    </span>
                                                </Disclosure.Button>
                                            </dt>
                                            <Disclosure.Panel as="dd" className="mt-2 pr-12">
                                                <p className="text-base text-gray-600">{faq.answer}</p>
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                            ))}
                        </dl>
                    </div>

                    <div className="pt-5 lg:pt-0">
                        <dl className="divide-y divide-gray-300 divide-dashed">
                            {rightFaqs.map((faq) => (
                                <Disclosure
                                    key={faq.question}
                                    as="div"
                                    className="py-6 first:pt-0 last:pb-0"
                                >
                                    {({ open }) => (
                                        <>
                                            <dt>
                                                <Disclosure.Button className="group flex w-full items-start justify-between text-left cursor-pointer">
                                                    <span className="text-base font-semibold text-gray-800">
                                                        {faq.question}
                                                    </span>
                                                    <span className="ml-6 flex h-7 items-center">
                                                        <PlusSmallIcon
                                                            className={`h-6 w-6 text-gray-500 ${open ? 'hidden' : 'block'}`}
                                                        />
                                                        <MinusSmallIcon
                                                            className={`h-6 w-6 text-gray-500 ${open ? 'block' : 'hidden'}`}
                                                        />
                                                    </span>
                                                </Disclosure.Button>
                                            </dt>
                                            <Disclosure.Panel as="dd" className="mt-2 pr-12">
                                                <p className="text-base text-gray-600">{faq.answer}</p>
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                            ))}
                        </dl>
                    </div>
                </div>
                <hr className="mt-16 border-t border-gray-300" />
            </section>
        </Container>
    )
};