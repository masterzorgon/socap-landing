import { Container } from "../container";
import { handleSectionClick } from "@/utils/navigation";
import { useRouter } from "next/navigation";
import { StarIcon } from "@heroicons/react/24/solid";
import { useToast } from "../toast-provider";

interface UserGuideItem {
    title: string;
    content: string;
}

const guides: UserGuideItem[] = [
    {
        title: "Creating a Market",
        content: "..."
    },
    {
        title: "Trading on Spot",
        content: "..."
    },
    {
        title: "Trading on Perps",
        content: "..."
    },
    {
        title: "Take Profit / Stop Loss",
        content: "..."
    },
];

export function UserGuidesSection() {
    const router = useRouter();
    const { showToast } = useToast();

    return (
        <Container className="mt-16">
            <h2
                id="user-guides"
                className="text-2xl font-medium tracking-tight text-gray-800 mb-8 cursor-pointer hover:text-primary transition-colors"
                onClick={() => handleSectionClick('user-guides', router, showToast)}
            >
                User Guides
            </h2>
            <section>
                {guides.map((guide, index) => (
                    <div key={guide.title}>
                        <div className="flex items-center gap-2">
                            <StarIcon className="size-4 text-primary" />
                            <h3 className="text-gray-800 my-4 font-medium text-lg">{guide.title}</h3>
                        </div>
                        <p className="mb-4">{guide.content}</p>
                        {index < guides.length - 1 && (
                            <hr className="border-t border-gray-300 border-dashed" />
                        )}
                    </div>
                ))}
            </section>
            <hr className="mt-16 border-t border-gray-300" />
        </Container>
    )
}