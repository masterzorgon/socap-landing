import { Container } from "../container";
import { handleSectionClick } from "@/utils/navigation";
import { useRouter } from "next/navigation";
import { useToast } from "../toast-provider";


interface BrowserItem {
    id: number;
    title: string;
    icon: string;
    extension: string;
}

const browserList: BrowserItem[] = [
    {
        id: 1,
        title: "Chrome",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Google_Chrome_icon_%28February_2022%29.svg/2048px-Google_Chrome_icon_%28February_2022%29.svg.png",
        extension: "#"
    },
    {
        id: 2,
        title: "Firefox",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Firefox_logo%2C_2019.svg/1200px-Firefox_logo%2C_2019.svg.png",
        extension: "#"
    },
    {
        id: 3,
        title: "Brave",
        icon: "https://upload.wikimedia.org/wikipedia/commons/5/51/Brave_icon_lionface.png",
        extension: "#"
    },
];


export function BrowserSupportSection() {
    const router = useRouter();
    const { showToast } = useToast();

    return (
        <Container className="mt-16">
            <h2
                id="browser-support"
                className="text-2xl font-medium tracking-tight text-gray-800 mb-8 cursor-pointer hover:text-primary transition-colors"
                onClick={() => handleSectionClick('browser-support', router, showToast)}
            >
                Browser Support
            </h2>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-8">
                {browserList.map((browserOption) => (
                    <a href={browserOption.extension} target="_blank" rel="noopener noreferrer" className="">
                        <div key={browserOption.id} className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm cursor-pointer hover:shadow-md transition-shadow duration-300">
                            <div className="flex items-center mb-4">
                                <div className="w-8 h-8 rounded-full flex items-center justify-center">
                                    <img src={browserOption.icon} alt={browserOption.title} className="w-full h-full object-contain rounded-full" />
                                </div>
                                <h3 className="ml-3 text-lg font-semibold text-gray-900">{browserOption.title}</h3>
                            </div>
                            <p className="text-gray-600 text-sm">
                                Use Social Capital with the {browserOption.title} browser extension.
                            </p>
                        </div>
                    </a>
                ))}
            </section>
            <hr className="mt-16 border-t border-gray-300" />
        </Container>
    )
}