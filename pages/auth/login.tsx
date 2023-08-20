import React from "react";
import LoginPageTemplate from "../../components/templates/auth/login";
import AuthWrapper from "../../components/templates/auth/wrapper";

const LoginPage = () => {
	return (
		<AuthWrapper protectedPage={false}>
			<LoginPageTemplate />
		</AuthWrapper>
	);
};

export default LoginPage;
