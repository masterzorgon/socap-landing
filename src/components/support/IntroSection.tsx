import { useRouter } from "next/navigation";
import { handleSectionClick } from "@/utils/navigation";
import { Container } from "@/components/container";
import { useToast } from "../toast-provider";

export function IntroSection() {
    const router = useRouter();
    const { showToast } = useToast();

    return (
        <Container className="mt-16">
            <section id="introduction" className="scroll-mt-24">
                <h2
                    className="text-2xl font-medium tracking-tight text-gray-800 mb-8 cursor-pointer hover:text-primary transition-colors"
                    onClick={() => handleSectionClick('introduction', router, showToast)}
                >
                    Introduction
                </h2>
                <section>
                    <p className="text-gray-600">
                        Social Capital is a decentralized exchange that allows users to trade
                    </p>
                </section>
                <hr className="mt-16 border-t border-gray-300" />
            </section>
        </Container>
    )
}