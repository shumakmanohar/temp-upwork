import { Checkbox } from "@nextui-org/react";

type Props = {
	text?: string;
};

const Task = ({ text = "All Pages" }: Props) => {
	return (
		<div className="flex  justify-between my-4 items-center font-normal">
			<p className="text-[#1F2128]">{text} </p> <Checkbox size="lg"></Checkbox>
		</div>
	);
};

export default Task;
