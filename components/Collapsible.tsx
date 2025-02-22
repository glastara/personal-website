"use client";

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

interface CollapsibleProps {
	title: string;
	children: React.ReactNode;
}

export default function Collapsible({ title, children }: CollapsibleProps) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="mb-4">
			<button
				type="button"
				onClick={() => setIsOpen(!isOpen)}
				className="w-full flex items-center justify-between p-4 bg-[#E5E4E1] rounded-lg hover:bg-[#DDDBD8] transition-colors"
			>
				<h3 className="text-lg font-medium m-0">{title}</h3>
				<FiChevronDown
					className={`transform transition-transform ${
						isOpen ? "rotate-180" : ""
					}`}
				/>
			</button>
			{isOpen && <div className="mt-4 px-4">{children}</div>}
		</div>
	);
}
