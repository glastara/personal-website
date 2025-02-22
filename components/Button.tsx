import Link from "next/link";

interface ButtonProps {
	href: string;
	children: React.ReactNode;
}

export default function Button({ href, children }: ButtonProps) {
	return (
		<Link
			href={href}
			className="bg-[#E5E4E1] text-black px-4 py-0.25 rounded-lg inline-block hover:bg-[#DDDBD8] transition-colors no-underline"
		>
			{children}
		</Link>
	);
}
