import { Outlet } from "react-router-dom";

/**
 * General Layout
 */

function RootLayout() {
	return (
		<>
			<main>
				<Outlet />
			</main>
		</>
	);
}

export default RootLayout;
