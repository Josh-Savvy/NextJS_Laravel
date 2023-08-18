import React from "react";
import axiosInstance from "../lib/axiosInstance";
import { toast } from "react-toastify";
import { Warning } from "react-ionicons";

const useLoginMutation = (credentials: { email: string; password: string }) => {
	const [loginCredentials, setLoginCredentials] =
		React.useState<typeof credentials>(credentials);
	const [error, setError] = React.useState<typeof credentials | null>(null);
	const [isLoading, setIsLoading] = React.useState<boolean>(false);

	const handleChange =
		(name: "email" | "password") => (e: React.ChangeEvent<HTMLInputElement>) => {
			setLoginCredentials({ ...loginCredentials, [name]: e.target.value });
			setError({
				email: "",
				password: "",
			});
		};

	const handleLogin = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);
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
			console.log(loginCredentials);
			console.log(response.data);
			setIsLoading(response.data ? false : true);
			// setTimeout(() => {
			// 	setIsLoading(false);
			// }, 2000);
		} catch (error) {
			console.log("Error logging in: ", error);
			setIsLoading(false);
			toast.error("An error occured. Please try again.", {
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
			});
		}
	};

	return {
		credentials: loginCredentials,
		isLoading,
		error,
		login: handleLogin,
		handleChange,
	};
};
const useRegisterMutation = (credentials: {
	email: string;
	password: string;
	name: string;
	confirmPassword: string;
}) => {
	const [registrationData, setRegistrationData] =
		React.useState<typeof credentials>(credentials);
	const [isLoading, setIsLoading] = React.useState<boolean>(false);
	const [error, setError] = React.useState<typeof credentials | null>(null);

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
						? "This field is required"
						: "",
			});
			setIsLoading(false);
			return;
		}
		try {
			const response = await axiosInstance.post("/auth/register", {
				...registrationData,
			});
			console.log(registrationData);
			console.log(response.data);
			setIsLoading(response.data ? false : true);
			// setTimeout(() => {
			// 	setIsLoading(false);
			// }, 2000);
		} catch (error) {
			console.log("Error logging in: ", error);
			setIsLoading(false);
			toast.error("An error occured. Please try again.", {
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
			});
		}
	};

	return {
		credentials: registrationData,
		isLoading,
		error,
		register: handleSubmit,
		handleChange,
	};
};

export { useLoginMutation, useRegisterMutation };
