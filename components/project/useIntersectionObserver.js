// Creating this to allow animation using react-spring when component comes in view.
// React-reveal seems to interfere with the css for project card for some reason.
import { useState, useEffect } from "react";

export default function useIntersectionObserver(
	elementRef,
	{ threshold = 0, root = null, rootMargin = '0%', freezeOnceVisible = false }
) {
	const [entry, setEntry] = useState();

	const frozen = entry?.isIntersecting && freezeOnceVisible;

	const updateEntry = ([entry]) => {
		setEntry(entry);
	};

	useEffect(() => {
		const node = elementRef?.current;
		const hasIOSupport = !!window.IntersectionObserver;

		if (!hasIOSupport || frozen || !node) return;

		const observerParams = { threshold, root, rootMargin };
		const observer = new IntersectionObserver(updateEntry, observerParams);

		observer.observe(node);

		return () => observer.disconnect();
	}, [elementRef, threshold, root, rootMargin, frozen]);

	return entry;
}