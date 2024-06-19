import BackButton from "./BackButton";
import { BsThreeDots } from "react-icons/bs";

export default function PageHeader() {
	return (
		<div className="m-4 flex justify-between items-center">
			<BackButton />
			<BsThreeDots size={30} color="#9c9c9c" />
		</div>
	);
}
