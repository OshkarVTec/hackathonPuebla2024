import { Link } from "react-router-dom";
import homeImg from "../assets/homeImg.png";
import notesImg from "../assets/notesImg.png";
import recordImg from "../assets/recordImg.png";
import learningImg from "../assets/learningImg.png";

export default function Home() {
	return (
		<div className="bg-[#6D57FC] h-screen flex flex-col ">
			<img src={homeImg} className="grow-0" />
			<div className="bg-white rounded-t-3xl h-full">
				<p className="text-3xl p-4 ">
					Comencemos a <span className="text-[#6D57FC]">desarrollar</span>{" "}
					nuestras habilidades
				</p>

				<div className="flex flex-col justify-center">
					<div className="flex items-center p-4 gap-4">
						<img src={learningImg} />
						<p className="text-3xl">Aprendizaje</p>
					</div>
					<Link to="/notas" className="flex items-center p-4 gap-4">
						<img src={notesImg} />
						<p className="text-3xl">Notas</p>
					</Link>
					<Link to="/dictado" className="flex items-center p-4 gap-4">
						<img src={recordImg} />
						<p className="text-3xl">Tomar clase</p>
					</Link>
				</div>
			</div>
		</div>
	);
}
