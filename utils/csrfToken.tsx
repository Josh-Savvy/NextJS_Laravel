const csrfToken = (): string => {
	const csrfTokenElement = process.browser
		? document.querySelector('meta[name="csrf-token"]')
		: "";
	const csrfTokenString = csrfTokenElement
		? csrfTokenElement?.getAttribute("content")
		: "";
	return csrfTokenString || "";
};

export default csrfToken;
