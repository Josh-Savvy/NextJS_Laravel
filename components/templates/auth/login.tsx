import React, { useEffect } from "react";
import Link from "next/link";
import { useLoginMutation } from "../../../hooks/mutate";

const LoginPageTemplate = () => {
	const initialState = {
		email: "",
		password: "",
	};
	const { credentials, error, isLoading, login, handleChange, response } =
		useLoginMutation(initialState);

	return (
		<form
			onSubmit={login}
			className="grid gap-4 sm:mx-20 md:mx-40 lg:mx-60 xl:mx-[30vw]"
		>
			<div className="grid gap-3 rounded-lg bg-white p-5 shadow-lg md:gap-8 md:p-10">
				{/* <h1 className="text-left text-2xl font-bold text-center uppercase">Login</h1> */}
				{/* <h1 className="text-left text-2xl font-bold uppercase">Login</h1> */}
				<div>
					<label
						className="mb-2 block text-sm tracking-tight font-medium text-gray-900 dark:text-white"
						htmlFor="email"
					>
						Email
					</label>
					{error && error.email ? (
						<span className="text-sm text-red-500 tracking-tight">{error.email}</span>
					) : (
						""
					)}
					<div className="flex">
						<span
							className={`${
								error && error.email ? "border-red-500" : ""
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
								error && error["email"] ? "border-red-500" : ""
							} block w-full min-w-0 flex-1 tracking-tight rounded-none rounded-r-lg border border-gray-300 bg-gray-50 py-4 p-2.5 text-sm text-gray-900 outline-none`}
							name="email"
							placeholder="example@mail.com"
							type="email"
							onChange={handleChange("email")}
							value={credentials.email}
						/>
					</div>
				</div>
				<div>
					<label
						className="mb-2 block tracking-tight text-sm font-medium text-gray-900 dark:text-white"
						htmlFor="password"
					>
						Password
					</label>
					{error && error.password ? (
						<span className="text-sm text-red-500 tracking-tight">
							{error.password}
						</span>
					) : (
						""
					)}
					<div className="flex">
						<span
							className={`${
								error && error["password"] ? "border-red-500" : ""
							} inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-200 px-3 text-sm text-gray-900`}
						>
							<svg className="ionicon" height="20" viewBox="0 0 512 512" width="20">
								<path
									d="M218.1 167.17c0 13 0 25.6 4.1 37.4-43.1 50.6-156.9 184.3-167.5 194.5a20.17 20.17 0 00-6.7 15c0 8.5 5.2 16.7 9.6 21.3 6.6 6.9 34.8 33 40 28 15.4-15 18.5-19 24.8-25.2 9.5-9.3-1-28.3 2.3-36s6.8-9.2 12.5-10.4 15.8 2.9 23.7 3c8.3.1 12.8-3.4 19-9.2 5-4.6 8.6-8.9 8.7-15.6.2-9-12.8-20.9-3.1-30.4s23.7 6.2 34 5 22.8-15.5 24.1-21.6-11.7-21.8-9.7-30.7c.7-3 6.8-10 11.4-11s25 6.9 29.6 5.9c5.6-1.2 12.1-7.1 17.4-10.4 15.5 6.7 29.6 9.4 47.7 9.4 68.5 0 124-53.4 124-119.2S408.5 48 340 48s-121.9 53.37-121.9 119.17zM400 144a32 32 0 11-32-32 32 32 0 0132 32z"
									fill="none"
									strokeLinejoin="round"
									strokeWidth="32"
									stroke="currentColor"
								/>
							</svg>
						</span>
						<input
							className={`${
								error && error["password"] ? "border-red-500" : ""
							} block w-full min-w-0 flex-1 tracking-tight rounded-none rounded-r-lg border border-gray-300 bg-gray-50 py-4 p-2.5 text-sm text-gray-900 outline-none`}
							name="password"
							placeholder="************"
							type="password"
							onChange={handleChange("password")}
							value={credentials.password}
						/>
					</div>
				</div>
				<div className="grid items-center justify-between gap-4 md:flex">
					<div className="flex items-center gap-1 font-medium">
						<p>New user?</p>
						<Link href="/auth/register">
							<div className="duration-300 hover:text-purple-800 tracking-tight cursor-pointer hover:underline">
								Register
							</div>
						</Link>
					</div>
					<Link href="#">
						<div className="duration-300 hover:text-orange-600 cursor-pointer tracking-tight hover:underline">
							Forgot Password?
						</div>
					</Link>
				</div>
				<button
					className="rounded bg-purple-600 p-3 px-10 tracking-tight font-semibold text-lg text-white duration-300 hover:bg-purple-800"
					type="submit"
				>
					{isLoading ? "Please wait..." : "Submit"}
				</button>
			</div>

			{response && response?.message?.includes("inactive") ? (
				<Link href="/auth/activate">
					<div className="animate__animated animate__slideInDown flex justify-center w-full mt-5 cursor-pointer">
						<div className="rounded text-center w-full bg-gray-600 p-3 px-10 tracking-tight text-lg font-semibold text-white duration-300 hover:bg-gray-800">
							Activate account
						</div>
					</div>
				</Link>
			) : (
				""
			)}
		</form>
	);
};

export default LoginPageTemplate;
