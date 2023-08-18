import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		// <Html dir="ltr" className="overflow-x-hidden w-[100vw]">
		<Html dir="ltr" className="">
			<Head></Head>
			{/* <body style={{ width: "100vw" }} className="font-dm_sans-sanserif"> */}
			<body className="bg-zinc-300 antialiased">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
