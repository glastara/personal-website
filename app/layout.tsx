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
			<head>
				<link rel="icon" href="/images/favicon.ico" sizes="any" />
			</head>
			<body
				className="antialiased prose mx-auto font-sans bg-[#FAF9F6] prose-h1:text-2xl prose-h3:text-base
					px-4
					sm:px-8
					md:px-16
					lg:px-56
					max-w-5xl"
				suppressHydrationWarning
			>
				<div className="py-6 sm:py-8 md:py-10 lg:py-10">
					{children}
				</div>
			</body>
		</html>
	);
}
