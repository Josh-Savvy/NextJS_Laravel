import useSWR from "swr";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AxiosResponse } from "axios";
import axiosInstance from "../../lib/axiosInstance";

export default function useAuth(props?: { middleware: "auth" | "guest" }) {
	const middleware = props?.middleware || "guest";
	const router = useRouter();
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [authenticated, setAuthenticated] = useState<boolean>(false);
	const {
		data: user,
		error,
		mutate,
	} = useSWR("/user", () =>
		axiosInstance.get("/user").then((response: AxiosResponse) => response.data),
	);

	useEffect(() => {
		if (user) {
			setAuthenticated(true);
			setIsLoading(false);
		}
		if (error && error.response.status === 401) {
			console.log(error);
			setAuthenticated(false);
			if (middleware === "auth") router.replace("/auth/login");
		}
	}, [user, error]);

	const logout = async () => {
		setAuthenticated(false);
		await axiosInstance.post("/auth/logout");
		router.replace("/auth/login");
	};

	return {
		user,
		logout,
		isLoading,
		mutate,
		authenticated,
		error,
	};
}
