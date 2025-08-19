import { useToast } from "../toast-provider";
import { Container } from "../container";
import { handleSectionClick } from "@/utils/navigation";
import { useRouter } from "next/navigation";
import { StarIcon } from "@heroicons/react/24/solid";

interface ArchitectureItem {
    title: string;
    content: string;
}

const architectureItems: ArchitectureItem[] = [
    {
        title: "Permissionless Markets",
        content: "..."
    },
    {
        title: "Margin (Cross & Isolated)",
        content: "..."
    },
    {
        title: "Liquidations",
        content: "..."
    },
    {
        title: "Funding",
        content: "..."
    }
];

export function ArchitectureSection() {
    const router = useRouter();
    const { showToast } = useToast();

    return (
        <Container className="mt-16">
            <h2
                id="architecture"
                className="text-2xl font-medium tracking-tight text-gray-800 mb-8 cursor-pointer hover:text-primary transition-colors"
                onClick={() => handleSectionClick('architecture', router, showToast)}
            >
                Architecture
            </h2>
            <section>
                {architectureItems.map((item, index) => (
                    <div key={item.title}>
                        <div className="flex items-center gap-2">
                            <StarIcon className="size-4 text-primary" />
                            <h3 className="text-gray-800 my-4 font-medium text-lg">{item.title}</h3>
                        </div>
                        <p className="mb-4">{item.content}</p>
                        {index < architectureItems.length - 1 && (
                            <hr className="border-t border-gray-300 border-dashed" />
                        )}
                    </div>
                ))}
            </section>
            <hr className="mt-16 border-t border-gray-300" />
        </Container>
    )
}