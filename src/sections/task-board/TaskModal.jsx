import { useState } from "react";

export default function TaskModal({
    onSaveTask,
    modalMode,
    taskToUpdate,
    onClose,
}) {
    const [task, setTask] = useState(
        taskToUpdate || {
            id: crypto.randomUUID(),
            title: "",
            description: "",
            tags: [],
            priority: "",
            isFavorite: false,
        }
    );

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "tags") {
            const tagsArray = value
                .split(",")
                .map(
                    (tag) =>
                        tag.trim().charAt(0).toUpperCase() + tag.trim().slice(1)
                );

            setTask((prevTask) => ({
                ...prevTask,
                tags: tagsArray,
            }));
            return;
        }

        setTask((prevTask) => ({
            ...prevTask,
            [name]: value,
        }));
    };

    return (
        <>
            <div className="bg-black opacity-70 h-full w-full z-10 absolute top-0 left-0"></div>
            <form
                className="mx-auto my-10 w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11 z-10 absolute top-1/4 left-1/3"
                onSubmit={(e) => {
                    e.preventDefault();
                    onSaveTask(task);
                }}
            >
                <h2 className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">
                    {modalMode === "create" ? "Create New Task" : "Update Task"}
                </h2>
                <div className="space-y-9 text-white lg:space-y-10">
                    <div className="space-y-2 lg:space-y-3">
                        <label htmlFor="title">Title</label>
                        <input
                            className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                            type="text"
                            name="title"
                            id="title"
                            value={task.title}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="space-y-2 lg:space-y-3">
                        <label htmlFor="description">Description</label>
                        <textarea
                            className="block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]"
                            type="text"
                            name="description"
                            id="description"
                            value={task.description}
                            required
                            onChange={handleChange}
                        ></textarea>
                    </div>
                    <div className="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20">
                        <div className="space-y-2 lg:space-y-3">
                            <label htmlFor="tags">Tags</label>
                            <input
                                className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                                type="text"
                                name="tags"
                                id="tags"
                                required
                                onChange={handleChange}
                                value={task.tags.join(", ")}
                            />
                        </div>
                        <div className="space-y-2 lg:space-y-3">
                            <label htmlFor="priority">Priority</label>
                            <select
                                className="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5"
                                name="priority"
                                id="priority"
                                onChange={handleChange}
                                value={task.priority}
                                required
                            >
                                <option value="">Select Priority</option>
                                <option value="Low">Low</option>
                                <option value="Medium">Medium</option>
                                <option value="High">High</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="mt-16 flex justify-between lg:mt-20">
                    <button
                        className="rounded bg-red-600 px-4 py-2 text-white transition-all hover:opacity-80 cursor-pointer"
                        onClick={onClose}
                    >
                        Close
                    </button>
                    <button
                        type="submit"
                        className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80 cursor-pointer"
                    >
                        {modalMode === "create"
                            ? "Create New Task"
                            : "Update Task"}
                    </button>
                </div>
            </form>
        </>
    );
}
