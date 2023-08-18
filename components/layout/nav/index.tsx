import Link from "next/link";
import React from "react";
import useAuth from "../../../hooks/auth";

const Navbar = () => {
	const { logout, isAuth } = useAuth();
	function showNotificationPane() {
		const notificationContent = document.getElementById("notificationContent");
		const notifcationContainer = document.getElementById("notifcationContainer");
		document.body.classList.toggle("overflow-hidden");
		if (notifcationContainer && notificationContent) {
			notifcationContainer.classList.toggle("hidden");
			// notificationContent.classList.toggle('translate-x-[500%]');
		}
	}
	return (
		<nav className="mb-5 flex items-center justify-between bg-white p-3 px-4 shadow-lg sm:px-8">
			<Link href="/">
				<div className="rounded bg-purple-400 p-2 px-4 duration-300 cursor-pointer">
					<h1 className="text-4xl font-bold uppercase text-white md:text-5xl">p</h1>
				</div>
			</Link>
			<ul className="flex items-center gap-4">
				<div className="group relative flex items-center gap-4 rounded-full p-3 duration-300 hover:text-white hover:shadow-xl">
					<svg
						className="cursor-pointer hover:text-white"
						height="30"
						viewBox="0 0 512 512"
						width="30"
					>
						<path d="M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1 117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48zm126.42 327.25a4 4 0 01-6.14-.32 124.27 124.27 0 00-32.35-29.59C321.37 329 289.11 320 256 320s-65.37 9-90.83 25.34a124.24 124.24 0 00-32.35 29.58 4 4 0 01-6.14.32A175.32 175.32 0 0180 259c-1.63-97.31 78.22-178.76 175.57-179S432 158.81 432 256a175.32 175.32 0 01-46.68 119.25z" />
						<path d="M256 144c-19.72 0-37.55 7.39-50.22 20.82s-19 32-17.57 51.93C191.11 256 221.52 288 256 288s64.83-32 67.79-71.24c1.48-19.74-4.8-38.14-17.68-51.82C293.39 151.44 275.59 144 256 144z" />
					</svg>
					<div className="absolute right-[-4em] top-10 hidden group-hover:block md:right-0 md:w-60">
						<div className="grid w-full gap-4 rounded bg-white p-3 shadow-xl shadow-purple-100 duration-300">
							{isAuth ? (
								<>
									<Link className="" href="#profile">
										<li className="flex w-full items-center gap-6 rounded bg-purple-800 p-3 px-5 text-center text-white duration-300 hover:bg-purple-600">
											<svg
												className="ionicon"
												height="25px"
												viewBox="0 0 512 512"
												width="25px"
											>
												<path
													d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z"
													fill="none"
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="32"
													stroke="white"
												/>
												<path
													d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z"
													fill="none"
													stroke-miterlimit="10"
													stroke-width="32"
													stroke="white"
												/>
											</svg>
											Dashboard
										</li>
									</Link>
									<Link className="" href="/">
										<li className="flex w-full items-center gap-6 rounded bg-purple-800 p-3 px-5 text-center text-white duration-300 hover:bg-purple-600">
											<svg
												className="ionicon"
												height="25px"
												viewBox="0 0 512 512"
												width="25px"
											>
												<path
													d="M262.29 192.31a64 64 0 1057.4 57.4 64.13 64.13 0 00-57.4-57.4zM416.39 256a154.34 154.34 0 01-1.53 20.79l45.21 35.46a10.81 10.81 0 012.45 13.75l-42.77 74a10.81 10.81 0 01-13.14 4.59l-44.9-18.08a16.11 16.11 0 00-15.17 1.75A164.48 164.48 0 01325 400.8a15.94 15.94 0 00-8.82 12.14l-6.73 47.89a11.08 11.08 0 01-10.68 9.17h-85.54a11.11 11.11 0 01-10.69-8.87l-6.72-47.82a16.07 16.07 0 00-9-12.22 155.3 155.3 0 01-21.46-12.57 16 16 0 00-15.11-1.71l-44.89 18.07a10.81 10.81 0 01-13.14-4.58l-42.77-74a10.8 10.8 0 012.45-13.75l38.21-30a16.05 16.05 0 006-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16 16 0 00-6.07-13.94l-38.19-30A10.81 10.81 0 0149.48 186l42.77-74a10.81 10.81 0 0113.14-4.59l44.9 18.08a16.11 16.11 0 0015.17-1.75A164.48 164.48 0 01187 111.2a15.94 15.94 0 008.82-12.14l6.73-47.89A11.08 11.08 0 01213.23 42h85.54a11.11 11.11 0 0110.69 8.87l6.72 47.82a16.07 16.07 0 009 12.22 155.3 155.3 0 0121.46 12.57 16 16 0 0015.11 1.71l44.89-18.07a10.81 10.81 0 0113.14 4.58l42.77 74a10.8 10.8 0 01-2.45 13.75l-38.21 30a16.05 16.05 0 00-6.05 14.08c.33 4.14.55 8.3.55 12.47z"
													fill="none"
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="32"
													stroke="white"
												/>
											</svg>
											Settings
										</li>
									</Link>
									<div
										onClick={logout}
										className="cursor-pointer rounded bg-red-800 p-3 px-5 text-white duration-300 hover:bg-red-600"
									>
										<li className="flex w-full items-center gap-6">
											<svg
												className="ionicon"
												height="25px"
												viewBox="0 0 512 512"
												width="25px"
											>
												<path
													d="M192 176v-40a40 40 0 0140-40h160a40 40 0 0140 40v240a40 40 0 01-40 40H240c-22.09 0-48-17.91-48-40v-40"
													fill="none"
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="32"
													stroke="white"
												/>
												<path
													d="M288 336l80-80-80-80M80 256h272"
													fill="none"
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="32"
													stroke="white"
												/>
											</svg>
											Logout
										</li>
									</div>
								</>
							) : (
								<>
									<Link className="" href="/auth/login">
										<li className="cursor-pointer w-full rounded bg-purple-800 p-3 px-5 text-center text-white duration-300 hover:bg-purple-600">
											Login
										</li>
									</Link>
									<Link className="" href="/auth/register">
										<li className="cursor-pointer w-full rounded bg-purple-800 p-3 px-5 text-center text-white duration-300 hover:bg-purple-600">
											Register
										</li>
									</Link>
								</>
							)}
						</div>
					</div>
				</div>
				{isAuth ? (
					<>
						<button
							className="relative flex cursor-pointer items-center gap-4 rounded-full p-3 duration-300 hover:shadow-xl"
							id="showNotificationBtn"
							onClick={showNotificationPane}
						>
							{/* <span className="absolute right-2 top-3 rounded-full bg-red-500 p-1"></span> */}
							<svg height="30" viewBox="0 0 512 512" width="30">
								<path
									d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
									fill="none"
									stroke-miterlimit="10"
									stroke-width="32"
									stroke="currentColor"
								/>
								<path d="M365.2 313c-16.33-19.34-27.86-27.47-27.86-80.8 0-48.86-25.78-66.23-47-74.67a11.39 11.39 0 01-6.34-6.68C280.29 138.6 269.88 128 256 128s-24.31 10.6-28 22.86a11.35 11.35 0 01-6.33 6.68c-21.24 8.46-47 25.8-47 74.67 0 53.33-11.54 61.46-27.87 80.8-6.77 8-.65 23 11.19 23H354C365.77 336 371.94 321 365.2 313zM220.24 352a4 4 0 00-4 4.42C218.49 375.14 235.11 384 256 384c20.67 0 37.14-9.15 39.66-27.52a4 4 0 00-4-4.48z" />
							</svg>
						</button>
						<div
							className="hidden w-full duration-300 ease-in-out"
							id="notifcationContainer"
						>
							<div
								className="fixed left-0 top-0 h-full w-full overflow-hidden bg-black bg-opacity-50"
								onClick={showNotificationPane}
							></div>
							{/* <div className="duration-300 ease-in-out" id="notificationContent">
                        @component('components.notifications.index', [
                            'notifications' => auth()->user()->notifications,
                        ])
                        @endcomponent
                    </div> */}
						</div>
					</>
				) : (
					<></>
				)}
			</ul>
		</nav>
	);
};

export default Navbar;
