import React from "react";
import useAuth from "../../hooks/auth";
import withAuth from "../auth/withAuth";

const ProfilePage = ({ user, isLoading }: any) => {
	return (
		<div>
			<div>{isLoading ? "Loading..." : `Name: ${user?.name}`}</div>
		</div>
	);
};

export default withAuth(ProfilePage);
