import "regenerator-runtime/runtime";
import Dictaphone from "./speech/Dictaphone";
import { RouterProvider, createHashRouter } from "react-router-dom";
import RootLayout from "./pages/Root";
import NoteList from "./components/NoteList";
import Home from "./pages/Home";
import NoteDetails from "./components/NoteDetails";

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
				element: <Home />,
			},
			{
				path: "dictado",
				element: <Dictaphone />,
			},
			{
				path: "notas",
				element: <NoteList />,
			},
			{
				path: "notas/:id",
				element: <NoteDetails />,
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
