import { Heading, Lead } from "@/components/text"
import { Container } from "@/components/container"

interface HeadingProps {
    heading: string
    lead: string
}

export function Header({
    heading,
    lead
}: HeadingProps) {
    return (
        <Container className="mt-16 bg-white">
			<Heading as="h1" className="text-gray-900">
				{heading}
			</Heading>
			<Lead className="mt-6 max-w-3xl text-gray-600">
				{lead}
			</Lead>
		</Container>
    )
}