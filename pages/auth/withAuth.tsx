import { NextPage } from "next";
import { useRouter } from "next/router";
import useSWR from "swr";
import axiosInstance from "../../lib/axiosInstance";

const withAuth = (WrappedComponent: NextPage) => {
	const AuthenticatedComponent: NextPage = ({ ...props }) => {
		const router = useRouter();
		const fetchUser = async () => {
			const response = await axiosInstance.get("/user");
			return response.data;
		};
		const { data, error, isLoading, isValidating, mutate } = useSWR(
			`/api/user`,
			fetchUser,
		);
		if (!isLoading)
			if (!data) {
				router.replace(`/auth/login?next=${router.asPath.toString()}`);
				return <>Loading...</>;
			}
		return <WrappedComponent {...props} />;
	};
	return AuthenticatedComponent;
};

export default withAuth;
