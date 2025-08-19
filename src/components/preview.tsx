'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from './container'
import screenshotExpenses from '../../public/screenshots/competitors.png'
import screenshotPayroll from '../../public/screenshots/competitors.png'
import screenshotReporting from '../../public/screenshots/competitors.png'
import screenshotVatReturns from '../../public/screenshots/competitors.png'

const features = [
    {
        title: 'Seed a Market',
        description:
            "Keep track of everyone's salaries and whether or not they've been paid. Direct deposit not supported.",
        image: screenshotPayroll,
    },
    {
        title: 'Trade Spot Assets',
        description:
            "All of your receipts organized into one place, as long as you don't mind typing in the data by hand.",
        image: screenshotExpenses,
    },
    {
        title: 'Creating the Perp Market',
        description:
            "We only sell our software to companies who don't deal with VAT at all, so technically we do all the VAT stuff they need.",
        image: screenshotVatReturns,
    },
    {
        title: 'Trading Perps',
        description:
            'Easily export your data into an Excel spreadsheet where you can do whatever the hell you want with it.',
        image: screenshotReporting,
    },
]

export function Preview() {
    let [tabOrientation, setTabOrientation] = useState<'horizontal' | 'vertical'>(
        'horizontal',
    )

    useEffect(() => {
        let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

        function onMediaQueryChange({ matches }: { matches: boolean }) {
            setTabOrientation(matches ? 'vertical' : 'horizontal')
        }

        onMediaQueryChange(lgMediaQuery)
        lgMediaQuery.addEventListener('change', onMediaQueryChange)

        return () => {
            lgMediaQuery.removeEventListener('change', onMediaQueryChange)
        }
    }, [])

    return (
        <section
            id="features"
            aria-label="Features for running your books"
            className="relative overflow-hidden bg-white mt-20"
        >
            <Container className="relative">
                <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
                    <h2 className="font-display text-3xl tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
                        Everything you need to run your books.
                    </h2>
                    <p className="mt-6 text-lg tracking-tight text-gray-600">
                        Well everything you need if you aren't that picky about minor
                        details like tax compliance.
                    </p>
                </div>
                <TabGroup
                    className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
                    vertical={tabOrientation === 'vertical'}
                >
                    {({ selectedIndex }) => (
                        <>
                            <div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
                                <TabList className="relative z-10 flex gap-x-4 px-4 whitespace-nowrap sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
                                    {features.map((feature, featureIndex) => (
                                        <div
                                            key={feature.title}
                                            className={clsx(
                                                'group relative rounded-full px-4 py-1 lg:rounded-l-xl lg:rounded-r-none lg:p-6',
                                                selectedIndex === featureIndex
                                                    ? 'bg-blue-600 lg:bg-blue-600/10 lg:ring-1 lg:ring-blue-600/20 lg:ring-inset'
                                                    : 'hover:bg-gray-100 lg:hover:bg-gray-50',
                                            )}
                                        >
                                            <h3>
                                                <Tab
                                                    className={clsx(
                                                        'font-display text-lg data-selected:not-data-focus:outline-hidden',
                                                        selectedIndex === featureIndex
                                                            ? 'text-white lg:text-blue-600'
                                                            : 'text-gray-700 hover:text-gray-900 lg:text-gray-700',
                                                    )}
                                                >
                                                    <span className="absolute inset-0 rounded-full lg:rounded-l-xl lg:rounded-r-none" />
                                                    {feature.title}
                                                </Tab>
                                            </h3>
                                            <p
                                                className={clsx(
                                                    'mt-2 hidden text-sm lg:block',
                                                    selectedIndex === featureIndex
                                                        ? 'text-blue-600'
                                                        : 'text-gray-600 group-hover:text-gray-700',
                                                )}
                                            >
                                                {feature.description}
                                            </p>
                                        </div>
                                    ))}
                                </TabList>
                            </div>
                            <TabPanels className="lg:col-span-7">
                                {features.map((feature) => (
                                    <TabPanel key={feature.title} unmount={false}>
                                        <div className="relative sm:px-6 lg:hidden">
                                            <div className="absolute -inset-x-4 top-[-6.5rem] bottom-[-4.25rem] bg-gray-50 ring-1 ring-gray-200 ring-inset sm:inset-x-0 sm:rounded-t-xl" />
                                            <p className="relative mx-auto max-w-2xl text-base text-gray-600 sm:text-center">
                                                {feature.description}
                                            </p>
                                        </div>
                                        <div className="mt-10 w-180 overflow-hidden rounded-xl bg-white shadow-xl shadow-gray-900/10 sm:w-auto lg:mt-0 lg:w-271.25">
                                            <Image
                                                className="w-full"
                                                src={feature.image}
                                                alt=""
                                                priority
                                                sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem"
                                            />
                                        </div>
                                    </TabPanel>
                                ))}
                            </TabPanels>
                        </>
                    )}
                </TabGroup>
            </Container>
        </section>
    )
}
