import { useEffect, useState } from "react";
import axios from "axios";
import PageHeader from "./PageHeader";
import { useNavigate } from "react-router-dom";

export default function NoteList() {
	const [notes, setNotes] = useState<Note[]>([]);
	const navigate = useNavigate();

	useEffect(() => {
		axios
			.get("/notes")
			.then((response) => setNotes(response.data))
			.catch((error) => console.error(error));
	}, []);

	return (
		<div>
			<PageHeader />
			{notes.map((note) => (
				<div key={note.id} onClick={() => navigate(`/notas/${note.id}`)}>
					{note.titulo}
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
