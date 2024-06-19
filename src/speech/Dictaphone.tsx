import "regenerator-runtime/runtime";
import SpeechRecognition, {
	useSpeechRecognition,
} from "react-speech-recognition";
import axios from "axios";

function Dictaphone() {
	const startListening = () =>
		SpeechRecognition.startListening({ continuous: true, language: "es-ES" });
	const stopListening = () => SpeechRecognition.stopListening();

	const { transcript, browserSupportsSpeechRecognition } =
		useSpeechRecognition();

	const subtitles = transcript.split(" ").slice(-10).join(" ");

	if (!browserSupportsSpeechRecognition) {
		return alert("no browsersupport");
	}

	const handleSave = () => {
		axios.post("http://localhost:5000/summary", {});
	};

	return (
		<>
			<div>
				<h1>Speech to Text Converter</h1>
				<p>
					Note: To copy written text, firstly click once on the white board
					after clicking Stop button.
				</p>
				<div>{subtitles}</div>
				<div>{transcript}</div>
				<div>
					<button onClick={startListening}>Start</button>
					<button onClick={stopListening}>Stop</button>
				</div>
			</div>
		</>
	);
}

export default Dictaphone;
