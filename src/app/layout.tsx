import "@/once-ui/styles/index.scss";
import "@/once-ui/tokens/index.scss";
import "@/once-ui/styles/terminal.css";

import classNames from "classnames";

import { Footer, RouteGuard } from "@/components";
import { TerminalHeader } from "@/components/TerminalHeader";
import { baseURL, effects, style } from "@/app/resources";

import { Source_Code_Pro } from "next/font/google";

import { person, home } from "@/app/resources/content";
import { Background, Column, Flex, ToastProvider } from "@/once-ui/components";

export async function generateMetadata() {
  return {
    metadataBase: new URL(`https://${baseURL}`),
    title: home.title,
    description: home.description,
    keywords: ["Full Stack Developer", "Machine Learning", "AI", "React", "Next.js", "Portfolio", "Web Development"],
    authors: [{ name: person.name }],
    creator: person.name,
    publisher: person.name,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      title: `${person.name}'s Portfolio`,
      description: `Portfolio website showcasing ${person.name}'s work as a ${person.role}`,
      url: `https://${baseURL}`,
      siteName: `${person.name}'s Portfolio`,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: `${person.avatar}`,
          width: 1200,
          height: 630,
          alt: `${person.name} - ${person.role}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${person.name}'s Portfolio`,
      description: `Portfolio website showcasing ${person.name}'s work as a ${person.role}`,
      images: [person.avatar],
      creator: "@DkrDante",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: "your-google-verification-code",
    },
  };
}

const primary = Source_Code_Pro({
  variable: "--font-primary",
  subsets: ["latin"],
  display: "swap",
});

type FontConfig = {
  variable: string;
};

/*
	Replace with code for secondary and tertiary fonts
	from https://once-ui.com/customize
*/
const secondary: FontConfig | undefined = undefined;
const tertiary: FontConfig | undefined = undefined;
/*
 */

const code = Source_Code_Pro({
  variable: "--font-code",
  subsets: ["latin"],
  display: "swap",
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <Flex
      as="html"
      lang="en"
      background="page"
      data-neutral={style.neutral}
      data-brand={style.brand}
      data-accent={style.accent}
      data-solid={style.solid}
      data-solid-style={style.solidStyle}
      data-theme={style.theme}
      data-border={style.border}
      data-surface={style.surface}
      data-transition={style.transition}
      className={classNames(
        primary.variable,
        secondary ? secondary.variable : "",
        tertiary ? tertiary.variable : "",
        code.variable,
      )}
    >
      <ToastProvider>
        <Column style={{ minHeight: "100vh", background: "var(--term-bg, #080e08)" }} as="body" fillWidth margin="0" padding="0">
          <Background
            mask={{
              cursor: effects.mask.cursor,
              x: effects.mask.x,
              y: effects.mask.y,
              radius: effects.mask.radius,
            }}
            gradient={{
              display: effects.gradient.display,
              x: effects.gradient.x,
              y: effects.gradient.y,
              width: effects.gradient.width,
              height: effects.gradient.height,
              tilt: effects.gradient.tilt,
              colorStart: effects.gradient.colorStart,
              colorEnd: effects.gradient.colorEnd,
              opacity: effects.gradient.opacity as
                | 0
                | 10
                | 20
                | 30
                | 40
                | 50
                | 60
                | 70
                | 80
                | 90
                | 100,
            }}
            dots={{
              display: effects.dots.display,
              color: effects.dots.color,
              size: effects.dots.size as any,
              opacity: effects.dots.opacity as any,
            }}
            grid={{
              display: effects.grid.display,
              color: effects.grid.color,
              width: effects.grid.width as any,
              height: effects.grid.height as any,
              opacity: effects.grid.opacity as any,
            }}
            lines={{
              display: effects.lines.display,
              opacity: effects.lines.opacity as any,
            }}
          />
          <TerminalHeader />
          <Flex
            position="relative"
            zIndex={0}
            fillWidth
            style={{ paddingTop: "80px", paddingBottom: "40px", paddingLeft: "16px", paddingRight: "16px" }}
            horizontal="center"
            flex={1}
          >
            <Flex horizontal="center" fillWidth minHeight="0">
              <RouteGuard>{children}</RouteGuard>
            </Flex>
          </Flex>
          <Footer />
        </Column>
      </ToastProvider>
    </Flex>
  );
}
