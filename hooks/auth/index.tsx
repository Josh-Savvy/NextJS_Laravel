import React from "react";

const useAuth = () => {
	const [authenticated, setAuthenticated] = React.useState<boolean>(false);
	const [isLoading, setIsLoading] = React.useState<boolean>(false);
	const [error, setError] = React.useState<string>("");

	const handleLogout = () => {
		// axiosInstance
		console.log("Logged out");
	};

	return { logout: handleLogout, isAuth: authenticated };
};

export default useAuth;
