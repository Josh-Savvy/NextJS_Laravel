import axios from "axios";

const axiosInstance = axios.create({
	baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api`,
	headers: {
		"X-Requested-With": "XMLHttpRequest",
		Accept: "application/json",
		"Content-Type": "application/json",
		// "X-CSRF-TOKEN": csrfToken,
	},
	withCredentials: true,
});

export default axiosInstance;
