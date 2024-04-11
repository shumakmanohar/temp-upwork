import { Divider } from "@nextui-org/react";
import Task from "./Task";
type Props = {};

const DialogBox = (props: Props) => {
	return (
		<div className="w-[370px] h-[326px] rounded-md shadow-lg p-5">
			<Task />
			<Divider className="my-4" />
			{[1, 2, 3, 4].map((_k) => (
				<Task text={`Page ${_k++}`} key={_k} />
			))}
			<Divider className="my-4" />
			<button className="w-full bg-[#FFD84D] hover:bg-[#FFCE22] transition-all duration-200 py-2 rounded-md">
				Done
			</button>
		</div>
	);
};

export default DialogBox;
