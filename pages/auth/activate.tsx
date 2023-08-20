import Link from "next/link";
import React from "react";
import axiosInstance from "../../lib/axiosInstance";
import csrfToken from "../../utils/csrfToken";
import useAuth from "../../hooks/auth";
import { useRouter } from "next/router";
import AuthWrapper from "../../components/templates/auth/wrapper";
import useAccoutActivation from "../../hooks/mutations/activate";

const ActivateAccountPage = () => {
	const [email, setEmail] = React.useState<string>("");
	const { error, handleSubmit, isLoading } = useAccoutActivation({ email });

	return (
		<AuthWrapper>
			<form
				onSubmit={handleSubmit}
				className="grid gap-4 sm:mx-20 md:mx-40 lg:mx-60 xl:mx-[30vw]"
			>
				<div className="grid gap-3 rounded-lg bg-white p-5 shadow-lg md:gap-8 md:p-10">
					<div>
						<label
							className="mb-2 block text-sm tracking-tight font-medium text-gray-900 dark:text-white"
							htmlFor="email"
						>
							Email
						</label>
						{error ? (
							<span className="text-sm text-red-500 tracking-tight">
								{error.toString()}
							</span>
						) : (
							""
						)}
						<div className="flex">
							<span
								className={`${
									error.includes("email") ? "border-red-500" : ""
								} inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-200 px-3 text-sm text-gray-900`}
							>
								<svg className="ionicon" height="20" viewBox="0 0 512 512" width="20">
									<path
										d="M441.6 171.61L266.87 85.37a24.57 24.57 0 00-21.74 0L70.4 171.61A40 40 0 0048 207.39V392c0 22.09 18.14 40 40.52 40h335c22.38 0 40.52-17.91 40.52-40V207.39a40 40 0 00-22.44-35.78z"
										fill="none"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="32"
										stroke="currentColor"
									/>
									<path
										d="M397.33 368L268.07 267.46a24 24 0 00-29.47 0L109.33 368M309.33 295l136-103M61.33 192l139 105"
										fill="none"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="32"
										stroke="currentColor"
									/>
								</svg>
							</span>
							<input
								className={`${
									error.includes("email") ? "border-red-500" : ""
								} block w-full min-w-0 flex-1 tracking-tight rounded-none rounded-r-lg border border-gray-300 bg-gray-50 py-4 p-2.5 text-sm text-gray-900 outline-none`}
								name="email"
								placeholder="example@mail.com"
								type="email"
								onChange={(e) => setEmail(e.target.value)}
								value={email}
							/>
						</div>
					</div>
					<div className="grid items-center justify-between gap-4 md:flex">
						<div className="flex items-center gap-1 font-medium">
							<p>Already activated?</p>
							<Link href="/auth/login">
								<div className="duration-300 hover:text-purple-800 tracking-tight cursor-pointer hover:underline">
									Log in
								</div>
							</Link>
						</div>
					</div>
					<button
						className="rounded bg-purple-600 p-3 px-10 tracking-tight font-semibold text-lg text-white duration-300 hover:bg-purple-800"
						type="submit"
						disabled={isLoading}
					>
						{isLoading ? "Please wait..." : "Activate"}
					</button>
				</div>
			</form>
		</AuthWrapper>
	);
};

export default ActivateAccountPage;
