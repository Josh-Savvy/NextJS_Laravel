import React from "react";
import axiosInstance from "../lib/axiosInstance";
import { toast } from "react-toastify";
import { Checkmark, Warning } from "react-ionicons";
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
			if (response.data) {
				setTimeout(() => {
					if (next) router.replace(next.toString());
					router.replace("/profile");
				}, 2000);
			}
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
const useRegisterMutation = (initialState: {
	email: string;
	password: string;
	name: string;
	confirmPassword: string;
}) => {
	const [registrationData, setRegistrationData] =
		React.useState<typeof initialState>(initialState);
	const [isLoading, setIsLoading] = React.useState<boolean>(false);
	const [error, setError] = React.useState<typeof initialState | null>(null);
	const [data, setData] = React.useState<any | null>(null);

	const handleChange =
		(name: "email" | "password" | "name" | "confirmPassword") =>
		(e: React.ChangeEvent<HTMLInputElement>) => {
			setRegistrationData({ ...registrationData, [name]: e.target.value });
			setError({
				name: "",
				email: "",
				password: "",
				confirmPassword: "",
			});
		};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);
		if (
			!registrationData ||
			!registrationData.email ||
			!registrationData.password ||
			registrationData.password !== registrationData.confirmPassword
		) {
			setError({
				name: !registrationData?.name ? "This field is required" : "",
				email: !registrationData?.email ? "This field is required" : "",
				password: !registrationData?.password ? "This field is required" : "",
				confirmPassword:
					registrationData?.password !== registrationData?.confirmPassword
						? "Password doesn't match"
						: "",
			});
			setIsLoading(false);
			return;
		}
		try {
			const response = await axiosInstance.post("/auth/register", {
				...registrationData,
			});
			console.log(response.data);
			setIsLoading(response.data ? false : true);
			setRegistrationData(initialState);
			setData(response.data);
			toast.success(response.data.message, {
				autoClose: 5000,
				closeOnClick: true,
				draggable: true,
				position: "top-right",
				icon: <Checkmark color="white" />,
				hideProgressBar: true,
				style: {
					background: "green",
					color: "#fff",
					fontWeight: "600",
				},
			});
		} catch (error: any) {
			console.log("Error registering user: ", error);
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
		initialState: registrationData,
		isLoading,
		error,
		register: handleSubmit,
		handleChange,
		response: data,
	};
};

export { useLoginMutation, useRegisterMutation };
