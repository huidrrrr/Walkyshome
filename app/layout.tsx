import type { Metadata } from "next";
import theme from "@/themes/theme";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

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
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <ChakraProvider>
          <>{children}</>
        </ChakraProvider>
      </body>
    </html>
  );
}
