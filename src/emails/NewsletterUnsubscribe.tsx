import {
    Body,
    Button,
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

const NewsletterUnsubscribe = () => {
    const previewText = "You have been unsubscribed from the Social Capital Newsletter";

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
                            You have been unsubscribed from the Social Capital Newsletter!
                        </Heading>
                        <Text className="text-black text-[14px] leading-[24px] text-center">
                            You will no longer receive emails from Social Capital. For any questions, please reply to this email.
                        </Text>
                        <Section className="text-center mt-[32px] mb-[32px]">
                            <Button
                                className="bg-black rounded text-white text-[12px] font-semibold no-underline text-center px-5 py-3"
                                href="https://socapital.trade"
                            >
                                Visit Social Capital
                            </Button>
                        </Section>
                        <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
                        <Text className="text-[#666666] text-[12px] leading-[24px]">
                            If you were not expecting this email, you can ignore it. If
                            you are concerned about your account's safety, please reply to
                            this email or email support@socapital.trade to get in touch with us.
                            If you would like to subscribe to our email list, please do so on our website: https://socapital.trade/#newsletter
                        </Text>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};

export default NewsletterUnsubscribe;