import React from "react";
import useAuth from "../../hooks/auth";

const ProfilePage = ({}: any) => {
	const { user, isLoading } = useAuth();
	return (
		<div>
			<div>{isLoading ? "Loading..." : `Name: ${user?.name}`}</div>
		</div>
	);
};

export default ProfilePage;
