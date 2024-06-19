import PageHeader from "./PageHeader";
import artImage from "../assets/artImage.png";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import defaultImg from "../assets/defaultImg.webp";
import noteIcon from "../assets/noteIcon.png";

export default function NoteDetails() {
	const { id } = useParams<{ id: string }>();
	const [note, setNote] = useState<Note>();

	useEffect(() => {
		axios
			.get(`/notes/${id}`)
			.then((response) => {
				// Handle the response data here
				setNote(response.data);
				console.log(response.data);
			})
			.catch((error) => {
				// Handle the error here
				console.error(error);
			});
	}, [id]);

	return (
		<div>
			<PageHeader />
			<div className="flex gap-4 p-4 items-center bg-slate-100">
				<img src={artImage} className="w-10" />
				<p>Estas son las notas de la clase</p>
			</div>
			<div className="flex gap-4 p-4 items-center">
				<img src={noteIcon} className="w-10" />
				<img src={noteIcon} className="w-10" />
			</div>
			<div
				className="flex flex-col gap-2 p-4 
            "
			>
				<p>{`Fecha: ${note?.fecha}`}</p>
				<p>{note?.titulo}</p>
			</div>
			<div className="flex gap-4 p-4 items-center">
				<p>{note?.texto}</p>
			</div>
			<div className="flex justify-center">
				<img src={defaultImg} className="w-full" />
			</div>
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
