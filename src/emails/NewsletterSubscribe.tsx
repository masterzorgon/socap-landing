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

const NewsletterSuubscribe = () => {
  const previewText = "Welcome to the Social Capital Newsletter!";

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans px-2">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
            <Section className="mt-[32px] w-full flex justify-center items-center mx-auto">
              <Link href="https://socapital.trade" title="Home">
                <img
                  src="https://drive.google.com/thumbnail?id=1c6byqYzhsV-xq781DE7SErlBz4vxhTUC"
                  alt="Social Capital Icon"
                  width={30}
                  height={30}
                  className="inline-block align-middle mx-2"
                />
              </Link>
            </Section>
            <Heading className="text-black text-[24px] font-normal text-center p-0 my-[10px] mx-0">
              Welcome to the Social Capital Newsletter!
            </Heading>
            <Text className="text-black text-[14px] leading-[24px] text-center">
              We thank you for choosing to signup for our newsletter and stay up to date with our latest updates.
            </Text>
            <Section className="text-center mt-[32px] mb-[32px]">
              <Button
                className="bg-primary rounded text-white text-[12px] font-semibold no-underline text-center px-5 py-3"
                href="https://order.toasttab.com/online/la-playa-mexican-cafe-502-s-77-sunshine-strip"
              >
                Add the App to your browser
              </Button>
            </Section>
            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
            <Text className="text-[#666666] text-[12px] leading-[24px]">
              If you were not expecting this invitation, you can ignore this email. If
              you are concerned about your account's safety, please reply to
              this email or email support@socapital.trade to get in touch with us.
              If you would like to unsubscribe from our email list, please do so on our website: https://socapital.trade/unsubscribe
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default NewsletterSuubscribe;
