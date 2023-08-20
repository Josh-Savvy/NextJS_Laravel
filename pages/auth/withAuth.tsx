import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import useAuth from "../../hooks/auth";

const withAuth = (WrappedComponent: NextPage) => {
	const AuthenticatedPage: NextPage = (props: any) => {
		const router = useRouter();
		const { authenticated, isLoading, user } = useAuth();
		if (!isLoading && !authenticated) {
			router.replace("/auth/login");
			return <>Loading...</>;
		}
		return <WrappedComponent {...props} user={user} isLoading={isLoading} />;
	};
	return AuthenticatedPage;
};

export default withAuth;
