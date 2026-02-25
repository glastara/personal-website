"use client";

import { useState } from "react";

type Experiment = {
	title: string;
	href: string;
	problem: string;
	solution: string;
};

type ExperimentsGridProps = {
	experiments: Experiment[];
};

export default function ExperimentsGrid({ experiments }: ExperimentsGridProps) {
	const [openHref, setOpenHref] = useState<string | null>(null);

	const handleCardClick = (href: string) => {
		if (typeof window === "undefined") return;
		window.open(href, "_blank", "noopener,noreferrer");
	};

	return (
		<div className="space-y-4">
			{experiments.map((experiment) => (
				<div
					key={experiment.title}
					className="group rounded-2xl border border-black/5 bg-white/60 shadow-sm overflow-hidden
						transition-all duration-200 ease-out
						hover:shadow-md hover:-translate-y-0.5"
				>
					<div className="flex flex-col">
						<button
							type="button"
							onClick={() => handleCardClick(experiment.href)}
							className="flex-1 px-4 py-4 text-left sm:px-5 sm:py-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF9F6]"
						>
							<div className="flex items-center justify-between gap-2">
								<h2 className="text-sm font-semibold text-gray-900 sm:text-base underline-offset-2 transition-colors group-hover:text-gray-700 group-hover:underline">
									{experiment.title}
								</h2>
								<span className="text-sm font-semibold text-gray-400 transition-all group-hover:translate-x-0.5 group-hover:text-gray-600">
									➝
								</span>
							</div>
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
								className="flex w-full items-center justify-center px-4 py-2 text-xs font-medium text-gray-500 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF9F6]"
							>
								<span>More details</span>
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

