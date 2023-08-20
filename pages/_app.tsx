import { AppProps } from "next/app";
import "../public/styles/globals.css";
import "animate.css";
// import "../public/styles/nprogress.css";
import "nprogress/nprogress.css";
import "animate.css/animate.min.css";
import "react-toastify/dist/ReactToastify.css";
import React, { useEffect } from "react";
import NProgress from "nprogress";
import { useRouter } from "next/router";
import Head from "next/head";
import Layout from "../components/layout";
import { ToastContainer } from "react-toastify";
// import {
// 	Hydrate,
// 	QueryClient,
// 	QueryClientProvider,
// } from "@tanstack/react-query";

const MyApp = ({ Component, pageProps }: AppProps) => {
	const router = useRouter();
	// const [queryClient] = React.useState(() => new QueryClient());
	useEffect(() => {
		const handleStart = (url: string) => {
			NProgress.start();
		};
		const handleStop = () => {
			NProgress.done();
		};

		router.events.on("routeChangeStart", handleStart);
		router.events.on("routeChangeComplete", handleStop);
		router.events.on("routeChangeError", handleStop);

		return () => {
			router.events.off("routeChangeStart", handleStart);
			router.events.off("routeChangeComplete", handleStop);
			router.events.off("routeChangeError", handleStop);
		};
	}, [router]);

	// function isDarkTheme() {
	// 	if (typeof window !== "undefined" && window.matchMedia) {
	// 		return window.matchMedia("(prefers-color-scheme: dark)").matches;
	// 	}
	// 	return false;
	// }

	return (
		<Layout>
			<ToastContainer />
			<Head>
				<meta charSet="UTF-8" />
				<meta content="width=device-width, initial-scale=1.0" name="viewport" />
				<title>Posty</title>
				{/* <title>Posty ({1 + " new notification"})</title> */}
			</Head>
			<Component {...pageProps} />
		</Layout>
	);
	// return (
	// 	<QueryClientProvider client={queryClient}>
	// 		<Hydrate state={pageProps.dehydratedState}>
	// 			<SidebarProvider>
	// 				<Layout>
	// 					<Head>
	// 						<title>Techsity Inc</title>
	// 						{/* {isDarkTheme() ? (
	// 					<link rel="icon" href="/assets/favicon_dark.ico" />
	// 				) : (
	// 					<link rel="icon" href="/assets/favicon.ico" />
	// 				)} */}
	// 						<link rel="icon" href="/assets/favicon.ico" type="image/x-icon" />
	// 						{/* <meta
	// 				name="description"
	// 				content="Techsity is a technology-focused education and training institution that provides skills development programs for individuals who want to start or advance their tech careers. Our mission is to bridge the skills gap in the tech industry by providing high-quality education and practical experience to our students."
	// /> */}
	// 						<meta
	// 							name="keywords"
	// 							content="Techsity, Software engineering, web development, software development, Technology, Data, Data science, product management, product design, cloud computing programming, cyber security, Artificial Intelligence, Technology skills, tech training"
	// 						/>
	// 						<meta name="author" content="Techsity" />
	// 						<meta
	// 							name="viewport"
	// 							content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
	// 						/>
	// 					</Head>
	// 					<Component {...pageProps} />
	// 				</Layout>
	// 			</SidebarProvider>
	// 		</Hydrate>
	// 	</QueryClientProvider>
	// );
};

export default MyApp;
