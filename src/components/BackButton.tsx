import { useNavigate } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";

export default function BackButton() {
	let navigate = useNavigate();
	return <IoChevronBack onClick={() => navigate(-1)} size={24} />;
}
