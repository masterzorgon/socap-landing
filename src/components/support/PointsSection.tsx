import { useRouter } from "next/navigation";
import { Container } from "@/components/container";
import { handleSectionClick } from "@/utils/navigation";
import { useToast } from "../toast-provider";

interface PointItem {
    id: number;
    title: string;
    description: string;
}

const points: PointItem[] = [
    {
        id: 1,
        title: "Providing Liquidity",
        description: "Earn points by providing liquidity to our pools. The more liquidity you provide and the longer you keep it, the more points you earn."
    },
    {
        id: 2,
        title: "Early Adopters",
        description: "Users who join Social Capital early receive bonus points. The earlier you join, the more bonus points you'll receive."
    },
    {
        id: 3,
        title: "Trading Activity",
        description: "Active traders earn points based on their trading volume and frequency. Higher volume and consistent trading activity yield more points."
    },
    {
        id: 4,
        title: "Slashing",
        description: "Users engaging in malicious behavior or violating Social Capital policy are subject to having their points slashed."
    }
];

export function PointsSection() {
    const router = useRouter();
    const { showToast } = useToast();

    return (
        <Container className="mt-16">
            <h2
                id="points"
                className="text-2xl font-medium tracking-tight text-gray-800 mb-8 cursor-pointer hover:text-primary transition-colors"
                onClick={() => handleSectionClick('points', router, showToast)}
            >
                Our Points System
            </h2>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-8">
                {points.map((point) => (
                    <div key={point.id} className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
                        <div className="flex items-center mb-4">
                            <div className="w-8 h-8 border-2 border-primary rounded-full flex items-center justify-center">
                                <span className="text-sm font-semibold">{point.id}</span>
                            </div>
                            <h3 className="ml-3 text-lg font-semibold text-gray-900">{point.title}</h3>
                        </div>
                        <p className="text-gray-600 text-sm">
                            {point.description}
                        </p>
                    </div>
                ))}
            </section>
            <hr className="mt-16 border-t border-gray-300" />
        </Container>
    )
}