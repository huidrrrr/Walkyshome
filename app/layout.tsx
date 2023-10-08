import type { Metadata } from "next";
import { ChakraProvider } from "@chakra-ui/react";

export const metadata: Metadata = {
  title: "jing's Blog",
  description: "This is for my love",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
}
