export default function ResearchLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="bg-[#FAF9F6]">
			{children}
		</div>
	);
} 