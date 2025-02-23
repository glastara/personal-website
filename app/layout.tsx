import { Inter } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
	display: "swap",
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning className={inter.variable}>
			<head />
			<body
				className="antialiased prose mx-auto font-sans bg-[#FAF9F6] prose-h1:text-2xl prose-h3:text-base
					px-4 py-6 
					sm:px-8 sm:py-8
					md:px-16 md:py-10
					lg:px-48 lg:py-10
					max-w-5xl"
				suppressHydrationWarning
			>
				{children}
			</body>
		</html>
	);
}
