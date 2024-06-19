import { Link } from "react-router-dom";

export default function Home() {
	return (
		<div>
			<Link to="/dictado">Grabar clase</Link>
			<Link to="/notas">Tutor</Link>
		</div>
	);
}
