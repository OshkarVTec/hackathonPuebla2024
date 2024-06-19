import { useEffect, useState } from "react";
import axios from "axios";

export default function NoteList() {
	const [notes, setNotes] = useState<Note[]>([]);

	useEffect(() => {
		axios
			.get("/notes")
			.then((response) => setNotes(response.data))
			.catch((error) => console.error(error));
	}, []);

	return (
		<div>
			{notes.map((note) => (
				<div key={note.id}>{note.content}</div>
			))}
		</div>
	);
}

interface Note {
	id: number;
	content: string;
}
