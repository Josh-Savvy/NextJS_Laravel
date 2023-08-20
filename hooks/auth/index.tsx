import useSWR from "swr";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AxiosResponse } from "axios";
import axiosInstance from "../../lib/axiosInstance";

export default function useAuth() {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(true);
	const {
		data: user,
		error,
		mutate,
	} = useSWR("/user", () =>
		axiosInstance.get("/user").then((response: AxiosResponse) => response.data),
	);

	useEffect(() => {
		if (user) {
			setIsLoading(false);
		}
		if (error && error.response.status === 401) {
			console.log(error);
			router.replace("/auth/login");
		}
	}, [user, error]);

	const logout = async () => {
		await axiosInstance.post("/auth/logout");
		router.replace("/auth/login");
	};

	return {
		user,
		logout,
		isLoading,
		mutate,
	};
}
