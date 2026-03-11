"use client";

import { useState, type ReactNode } from "react";

type Experiment = {
	title: string;
	href: string;
	problem: ReactNode;
	solution: ReactNode;
	tags: string[];
};

type ExperimentsGridProps = {
	experiments: Experiment[];
};

const tagColors: Record<string, string> = {
	"IRL & Events": "bg-amber-100 text-amber-700",
	"Community Health": "bg-green-100 text-green-700",
	"Creator Tools": "bg-blue-100 text-blue-700",
};

const ALL_TAGS = ["IRL & Events", "Community Health", "Creator Tools"];

export default function ExperimentsGrid({ experiments }: ExperimentsGridProps) {
	const [openHref, setOpenHref] = useState<string | null>(null);
	const [activeTag, setActiveTag] = useState<string | null>(null);

	const filtered = activeTag
		? experiments.filter((e) => e.tags.includes(activeTag))
		: experiments;

	return (
		<div className="space-y-4">
			<div className="flex flex-wrap gap-2">
				<button
					type="button"
					onClick={() => setActiveTag(null)}
					className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
						activeTag === null
							? "bg-gray-900 text-white"
							: "bg-gray-100 text-gray-600 hover:bg-gray-200"
					}`}
				>
					All
				</button>
				{ALL_TAGS.map((tag) => (
					<button
						key={tag}
						type="button"
						onClick={() => setActiveTag(activeTag === tag ? null : tag)}
						className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
							activeTag === tag
								? tagColors[tag]
								: "bg-gray-100 text-gray-600 hover:bg-gray-200"
						}`}
					>
						{tag}
					</button>
				))}
			</div>

			{filtered.map((experiment) => (
				<div
					key={experiment.title}
					className="group rounded-2xl border border-black/5 bg-white/60 shadow-sm overflow-hidden
						transition-all duration-200 ease-out
						hover:shadow-md hover:-translate-y-0.5"
				>
					<div className="flex flex-col">
						<button
							type="button"
							onClick={() => {
								if (typeof window === "undefined") return;
								window.open(experiment.href, "_blank", "noopener,noreferrer");
							}}
							className="flex-1 px-4 py-4 text-left sm:px-5 sm:py-5 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF9F6]"
						>
							<div className="flex items-center justify-between gap-2">
								<h2 className="text-sm font-semibold text-gray-900 sm:text-base underline-offset-2 transition-colors group-hover:text-gray-700 group-hover:underline">
									{experiment.title}
								</h2>
								<span className="text-sm font-semibold text-gray-400 transition-all group-hover:translate-x-0.5 group-hover:text-gray-600">
									➝
								</span>
							</div>
							{experiment.tags.length > 0 && (
								<div className="flex flex-wrap gap-1.5 mt-2">
									{experiment.tags.map((tag) => (
										<span
											key={tag}
											className={`inline-block rounded-full px-2 py-0.5 text-[10px] font-medium ${tagColors[tag] ?? "bg-gray-100 text-gray-600"}`}
										>
											{tag}
										</span>
									))}
								</div>
							)}
						</button>

						<div className="border-t border-black/5">
							<button
								type="button"
								onClick={(event) => {
									event.stopPropagation();
									setOpenHref((current) =>
										current === experiment.href ? null : experiment.href,
									);
								}}
								className="flex w-full items-center justify-center px-4 py-2 text-xs font-medium text-gray-500 hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF9F6]"
							>
								<span>Why I built this</span>
							</button>

							{openHref === experiment.href && (
								<div className="px-4 pb-4 pt-2 text-left text-sm text-gray-600 sm:px-5 space-y-3 leading-relaxed">
									<div>
										<div className="text-[11px] font-semibold uppercase tracking-wide text-gray-400">
											Problem
										</div>
										<p>{experiment.problem}</p>
									</div>
									<div>
										<div className="text-[11px] font-semibold uppercase tracking-wide text-gray-400">
											Solution
										</div>
										<p>{experiment.solution}</p>
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			))}
		</div>
	);
}
