import "regenerator-runtime/runtime";
import SpeechRecognition, {
	useSpeechRecognition,
} from "react-speech-recognition";
import axios from "axios";
import { useState } from "react";
import PageHeader from "../components/PageHeader";
import artImage from "../assets/artImage.png";
import { FaPlay, FaStop, FaPause } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Dictaphone() {
	const navigate = useNavigate();
	const [isListening, setIsListening] = useState(false);

	const startListening = () => {
		setIsListening(true);
		SpeechRecognition.startListening({ continuous: true, language: "es-ES" });
	};
	const stopListening = () => {
		setIsListening(false);
		SpeechRecognition.stopListening();
	};

	const { transcript, browserSupportsSpeechRecognition } =
		useSpeechRecognition();

	const subtitles = transcript.split(" ").slice(-10).join(" ");

	if (!browserSupportsSpeechRecognition) {
		return <div>No broser support</div>;
	}

	const handleSave = () => {
		stopListening();
		axios.post("/summary", { text: transcript });
		toast.success("Se guardó tu clase");
		navigate("/");
	};

	const handleStartStop = () => {
		if (isListening) {
			stopListening();
		} else {
			startListening();
		}
	};

	return (
		<>
			<div>
				<PageHeader />
				<div className="flex gap-4 p-4 items-center bg-slate-100">
					<img src={artImage} className="w-10" />
					{isListening ? (
						<p>Estoy escuchando...</p>
					) : transcript.length == 0 ? (
						<p>Listo para escuchar...</p>
					) : (
						<p>Escucha pausada</p>
					)}
				</div>
				<div className="h-96 m-4 flex justify-center text-center">
					{subtitles}
				</div>
				<div>
					<div className="flex flex-col gap-4 justify-center items-center">
						<button
							onClick={handleStartStop}
							className="border-2 p-2 bg-slate-200 rounded-md flex  justify-center items-center gap-2 "
						>
							{isListening ? (
								<>
									<FaPause style={{ color: "black" }} />
									<p>Parar de escuchar...</p>
								</>
							) : transcript.length == 0 ? (
								<>
									<FaPlay style={{ color: "green" }} />
									<p>Empezar a grabar...</p>
								</>
							) : (
								<>
									<FaPlay style={{ color: "green" }} />
									<p>Reanudar</p>
								</>
							)}
						</button>
						<button
							onClick={handleSave}
							disabled={transcript.length == 0}
							className={`border-2 p-2 bg-slate-200 rounded-md flex  justify-center items-center gap-2 ${
								transcript.length == 0 ? "bg-slate-300 cursor-not-allowed" : ""
							}`}
						>
							<FaStop
								style={{
									color: transcript.length == 0 ? "grey" : "red",
								}}
							/>
							<p>Terminar clase</p>{" "}
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default Dictaphone;
