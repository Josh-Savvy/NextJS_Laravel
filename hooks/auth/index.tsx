import React from "react";
import axiosInstance from "../../lib/axiosInstance";
import useSWR from "swr";

const useAuth = () => {
	const [authenticated, setAuthenticated] = React.useState<boolean>(false);
	const fetchUser = async () => {
		const response = await axiosInstance.get("/user");
		return response.data;
	};
	const { data, error, isLoading, isValidating } = useSWR(
		`/api/user`,
		fetchUser,
	);
	const handleLogout = () => {
		// axiosInstance
		console.log("Logged out");
	};

	return { logout: handleLogout, isAuth: authenticated, user: data, isLoading };
};

export default useAuth;
