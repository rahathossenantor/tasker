import { FaStar } from "react-icons/fa";

export default function Task({ task }) {
    return (
        <tr className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2">
            <td>
                {task.isFavorite ? (
                    <FaStar className="text-yellow-400" />
                ) : (
                    <FaStar className="text-gray-400" />
                )}
            </td>
            <td>{task.title}</td>
            <td>
                <div>{task.description}</div>
            </td>
            <td>
                <ul className="flex justify-center gap-1.5 flex-wrap">
                    {task.tags.map((tag, index) => (
                        <li key={index}>
                            <span
                                className={`inline-block h-5 whitespace-nowrap rounded-[45px] bg-[#1C92FFB0] px-2.5 text-sm capitalize text-[#F4F5F6]`}
                            >
                                {tag}
                            </span>
                        </li>
                    ))}
                </ul>
            </td>
            <td className="text-center">{task.priority}</td>
            <td>
                <div className="flex items-center justify-center space-x-3">
                    <button className="text-red-500 cursor-pointer">
                        Delete
                    </button>
                    <button className="text-blue-500 cursor-pointer">
                        Edit
                    </button>
                </div>
            </td>
        </tr>
    );
}
