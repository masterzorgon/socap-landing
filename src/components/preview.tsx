'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from './container'
import screenshotTrade from '../../public/screenshots/trade.png'

const features = [
    {
        title: 'LP into Markets',
        description:
            'Provide liquidity to new profile markets and earn a share of trading fees. Seed positions early to earn a share of trading fees for the markets you back.',
        image: screenshotTrade,
    },
    {
        title: 'Trade Spot Assets',
        description:
            'Buy and sell profile tokens directly in the spot market. Get exposure to social sentiment around your favorite Twitter (X) personalities.',
        image: screenshotTrade,
    },
    {
        title: 'Trading Perps',
        description:
            'Go long or short with leverage on any profile token. Speculate on sentiment swings as Twitter (X) personalities rise and fall in popularity.',
        image: screenshotTrade,
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
                        Retire your bloodline by trading social sentiment.
                    </h2>
                    <p className="mt-6 text-lg tracking-tight text-gray-600">
                        LP into new profiles, buy and sell spot tokens, or go long and short with leverage.
                        Everything you need to speculate on social sentiment in one place.
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
                                                    ? 'bg-primary lg:bg-primary/10 lg:ring-1 lg:ring-primary/20 lg:ring-inset'
                                                    : 'hover:bg-gray-100 lg:hover:bg-gray-50',
                                            )}
                                        >
                                            <h3>
                                                <Tab
                                                    className={clsx(
                                                        'font-display text-lg data-selected:not-data-focus:outline-hidden',
                                                        selectedIndex === featureIndex
                                                            ? 'text-white lg:text-primary'
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
                                                        ? 'text-gray-900'
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
