import React from "react";
import axiosInstance from "../../lib/axiosInstance";
import { toast } from "react-toastify";
import { Warning } from "react-ionicons";
import { useRouter } from "next/router";

const useLoginMutation = (initialState: {
	email: string;
	password: string;
}) => {
	const router = useRouter();
	const [loginCredentials, setLogininitialState] =
		React.useState<typeof initialState>(initialState);
	const [error, setError] = React.useState<typeof initialState | null>(null);
	const [isLoading, setIsLoading] = React.useState<boolean>(false);
	const [data, setData] = React.useState<any | null>(null);

	const handleChange =
		(name: "email" | "password") => (e: React.ChangeEvent<HTMLInputElement>) => {
			setLogininitialState({ ...loginCredentials, [name]: e.target.value });
			setError({
				email: "",
				password: "",
			});
		};

	const handleLogin = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);
		const { next } = router.query;
		if (
			!loginCredentials ||
			!loginCredentials.email ||
			!loginCredentials.password
		) {
			setError({
				email: !loginCredentials?.email ? "This field is required" : "",
				password: !loginCredentials?.password ? "This field is required" : "",
			});
			setIsLoading(false);
			return;
		}
		try {
			const response = await axiosInstance.post("/auth/login", {
				...loginCredentials,
			});
			console.log(response.data);
			setData(response.data);
		} catch (error: any) {
			console.log("Error logging in: ", error);
			setIsLoading(false);
			setData(error.response.data);
			toast.error(
				error?.response?.data.message || "An error occured. Please try again.",
				{
					autoClose: 5000,
					closeOnClick: true,
					draggable: true,
					position: "top-right",
					icon: <Warning color="white" />,
					hideProgressBar: true,
					style: {
						background: "#d31119",
						color: "#fff",
						fontWeight: "600",
					},
				},
			);
		}
	};

	return {
		credentials: loginCredentials,
		isLoading,
		error,
		login: handleLogin,
		handleChange,
		response: data,
	};
};

export default useLoginMutation;
