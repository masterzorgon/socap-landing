import {
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Link,
    Preview,
    Section,
    Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
import * as React from "react";

interface ContactFormProps {
    telegramUsername: string;
    twitterUsername?: string;
    message: string;
}

const ContactForm = ({ telegramUsername, twitterUsername, message }: ContactFormProps) => {
    const previewText = "New Contact Form Submission - " + telegramUsername;

    return (
        <Html>
            <Head />
            <Preview>{previewText}</Preview>
            <Tailwind>
                <Body className="bg-white my-auto mx-auto font-sans px-2">
                    <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
                        <Section className="mt-[32px] w-full text-center">
                            <Link href="https://socapital.trade" title="Home">
                                <img
                                    src="https://drive.google.com/thumbnail?id=1c6byqYzhsV-xq781DE7SErlBz4vxhTUC"
                                    alt="Social Capital Icon"
                                    width={30}
                                    height={30}
                                    style={{
                                        display: 'block',
                                        margin: '0 auto',
                                        border: '0',
                                        outline: 'none',
                                        textDecoration: 'none'
                                    }}
                                />
                            </Link>
                        </Section>
                        <Heading className="text-black text-[24px] font-normal text-center p-0 my-[10px] mx-0">
                            New Contact Form Submission
                        </Heading>
                        <Text className="text-black text-[14px] leading-[24px]">
                            A new contact form has been submitted via the Social Capital website.
                        </Text>

                        <Section className="mt-[32px]">
                            <Text className="text-black text-[16px] font-semibold mb-2">
                                Contact Details:
                            </Text>
                            <Text className="text-black text-[14px] leading-[24px] mb-1">
                                <strong>Telegram Username:</strong> @{telegramUsername.startsWith('@') ? telegramUsername.slice(1) : telegramUsername}
                            </Text>
                            {twitterUsername && (
                                <Text className="text-black text-[14px] leading-[24px] mb-4">
                                    <strong>X (Twitter) Username:</strong> @{twitterUsername}
                                </Text>
                            )}
                        </Section>

                        <Section className="mt-[24px]">
                            <Text className="text-black text-[16px] font-semibold mb-2">
                                Message:
                            </Text>
                            <Text className="text-black text-[14px] leading-[24px] bg-gray-50 p-3 rounded">
                                {message}
                            </Text>
                        </Section>

                        <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
                        <Text className="text-[#666666] text-[12px] leading-[24px]">
                            This message was sent from the contact form on https://socapital.trade/support#contact
                        </Text>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};

export default ContactForm;