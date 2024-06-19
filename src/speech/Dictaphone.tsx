import "regenerator-runtime/runtime";
import SpeechRecognition, {
	useSpeechRecognition,
} from "react-speech-recognition";
import axios from "axios";
import { useState } from "react";
import PageHeader from "../components/PageHeader";

function Dictaphone() {
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
		axios.post("/summary", { text: transcript });
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
				<h1>Speech to Text Converter</h1>
				<div>{subtitles}</div>
				<div>
					<button onClick={handleStartStop}>
						{isListening ? "Parar de escuchar..." : "Empezar a grabar..."}
					</button>
					<button
						onClick={handleSave}
						disabled={isListening || transcript.length == 0}
					>
						Guardar
					</button>
				</div>
			</div>
		</>
	);
}

export default Dictaphone;
