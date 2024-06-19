import "regenerator-runtime/runtime";
import Dictaphone from "./speech/Dictaphone";
import { RouterProvider, createHashRouter } from "react-router-dom";
import RootLayout from "./pages/Root";
import NoteList from "./components/NoteList";

/**
 * General routing
 */
const router = createHashRouter([
	{
		path: "/",
		element: <RootLayout />,
		id: "root",
		children: [
			{
				index: true,
				element: <Dictaphone />,
			},
			{
				path: "notes",
				element: <NoteList />,
			},
		],
	},
]);

function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
