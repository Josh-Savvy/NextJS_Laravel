import React from "react";
import axiosInstance from "../../lib/axiosInstance";

const useAccoutActivation = (props: { email: string }) => {
	const [error, setError] = React.useState<string>("");
	const [isLoading, setIsLoading] = React.useState<boolean>(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);
		try {
			const response = await axiosInstance.post("/auth/reactivate", {
				email: props.email,
			});
			setIsLoading(response.data ? false : true);
		} catch (error: any) {
			console.log("Error sending email for activation: ", error);
			setError(error.response.data.message || error.response.message);
			setIsLoading(false);
		}
	};
	return { email: props.email, error, isLoading, handleSubmit };
};

export default useAccoutActivation;
