import { useEffect, useState } from "react";
import axios from "axios";
import PageHeader from "./PageHeader";
import { useNavigate } from "react-router-dom";
import artImage from "../assets/artImage.png";
import { FiSearch } from "react-icons/fi";
import { MdKeyboardVoice } from "react-icons/md";

export default function NoteList() {
	const [notes, setNotes] = useState<Note[]>([]);
	const navigate = useNavigate();
	const colors = [
		"red-200",
		"blue-200",
		"green-200",
		"yellow-200",
		"purple-200",
		"pink-200",
		"indigo-200",
		"gray-200",
	];

	useEffect(() => {
		axios
			.get("/notes")
			.then((response) => setNotes(response.data))
			.catch((error) => console.error(error));
	}, []);

	const groupedNotes = notes.reduce((acc: any, note) => {
		if (acc[note.materia]) {
			acc[note.materia].push(note);
		} else {
			acc[note.materia] = [note];
		}
		return acc;
	}, {});

	return (
		<div>
			<PageHeader />

			<div className="flex gap-4 p-4 items-center bg-slate-100">
				<img src={artImage} className="w-10" />
				<p>He organizado tus notas</p>
			</div>
			<h1 className="text-3xl p-4">Todas las notas</h1>
			<div className="flex justify-center">
				<div className=" px-4 py-2 flex items-center bg-gray-200 w-5/6 rounded-2xl justify-between text-gray-400">
					<div className="flex items-center gap-4">
						<FiSearch />
						<p>Buscar</p>
					</div>
					<MdKeyboardVoice />
				</div>
			</div>
			<h2 className="text-xl p-4">Hoy...</h2>
			{Object.keys(groupedNotes).map((materia, index) => (
				<div key={materia} className="flex flex-col">
					<h2 className="text-xl px-4">{materia}</h2>
					<hr className={"border-2 mx-4 border-" + colors[index]} />
					{groupedNotes[materia].map((note: Note) => (
						<div
							key={note.id}
							className={"p-4 mx-4 rounded-xl my-4 bg-" + colors[index]}
							onClick={() => navigate(`/notas/${note.id}`)}
						>
							<h3 className="font-bold">{note.titulo}</h3>
						</div>
					))}
				</div>
			))}
		</div>
	);
}

interface Note {
	id: number;
	titulo: string;
	materia: string;
	texto: string;
	fecha: string;
}
