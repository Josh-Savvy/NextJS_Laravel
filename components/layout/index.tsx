import React from "react";
import Navbar from "./nav";

const Layout = ({ children }: any) => {
	return (
		<div>
			<div className="fixed top-0 z-40 w-full">
				<Navbar />
			</div>
			<main className="mx-4 mb-10 mt-28 sm:mx-8">{children}</main>
		</div>
	);
};

export default Layout;
