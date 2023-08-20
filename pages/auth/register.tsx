import React from "react";
import RegisterPageTemplate from "../../components/templates/auth/register";
import AuthWrapper from "../../components/templates/auth/wrapper";

const RegisterPage = () => {
	return (
		<AuthWrapper protectedPage={false}>
			<RegisterPageTemplate />
		</AuthWrapper>
	);
};

export default RegisterPage;
