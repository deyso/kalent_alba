// src/lib/clickOutside.js
export function clickOutside(node, params) {
	let { callback, exclude = [] } = params;

	const handleClick = (event) => {
		const clickedEl = event.target;

		if (exclude.some(el => el && el.contains(clickedEl))) return;
		if (!node.contains(clickedEl)) {
			callback();
		}
	};

	document.addEventListener('click', handleClick, true);

	return {
		update(newParams) {
			callback = newParams.callback;
			exclude = newParams.exclude || [];
		},
		destroy() {
			document.removeEventListener('click', handleClick, true);
		}
	};
}
