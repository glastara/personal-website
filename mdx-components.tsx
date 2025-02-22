import type { MDXComponents } from "mdx/types";
import * as MDX from "@/components/mdx";
export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		...components,
		...MDX,
	};
}
