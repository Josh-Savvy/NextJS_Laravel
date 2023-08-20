import React from "react";
import useAuth from "../../../../hooks/auth";
import { useRouter } from "next/router";

const AuthWrapper = ({
	children,
	protectedPage = false,
}: {
	children: any;
	protectedPage?: boolean;
}) => {
	const { authenticated, isLoading } = useAuth({
		middleware: protectedPage ? "auth" : "guest",
	});
	const router = useRouter();

	if (!isLoading) {
		if (authenticated) {
			router.replace("/profile");
			return <>Loading...</>
		}
	}
	return children;
};

export default AuthWrapper;
