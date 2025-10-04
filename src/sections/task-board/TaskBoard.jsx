import { useState } from "react";
import TaskActions from "./TaskActions";
import TaskLists from "./TaskLists";
import TaskModal from "./TaskModal";
import TaskSearchBox from "./TaskSearchBox";

const tasksData = [
    {
        id: crypto.randomUUID(),
        title: "Integration API",
        description:
            "Connect an existing API to a third-party database using secure methods and handle data exchange efficiently.",
        tags: ["Web", "Python", "API"],
        priority: "High",
        isFavorite: true,
    },
    {
        id: crypto.randomUUID(),
        title: "API Data Synchronization with Python",
        description:
            "Implement a Python solution to synchronize data between an API and a third-party database securely, optimizing data exchange.",
        tags: ["Data Synchronization", "Python", "API"],
        priority: "High",
        isFavorite: false,
    },
    {
        id: crypto.randomUUID(),
        title: "Efficient Web API Connectivity in Python",
        description:
            "Develop a Python-based solution for connecting an API to a third-party database securely, focusing on efficient data handling and exchange.",
        tags: ["Web", "Python", "API"],
        priority: "High",
        isFavorite: false,
    },
    {
        id: crypto.randomUUID(),
        title: "Data Handling",
        description:
            "Integrate a web API with a third-party database using secure methods, focusing on seamless data exchange and data integrity.",
        tags: ["Web", "Python", "Security"],
        priority: "High",
        isFavorite: true,
    },
];

export default function TaskBoard() {
    const [tasks, setTasks] = useState(tasksData);
    const [showTaskModal, setShowTaskModal] = useState(false);
    const [modalMode, setModalMode] = useState("create");
    const [taskToUpdate, setTaskToUpdate] = useState(null);

    const handleSaveTask = (newTask) => {
        if (modalMode === "create") {
            setTasks((prevTasks) => [...prevTasks, newTask]);
        } else if (modalMode === "update") {
            setTasks((prevTasks) =>
                prevTasks.map((task) =>
                    task.id === taskToUpdate.id ? newTask : task
                )
            );
        }

        setShowTaskModal(false);
    };

    const handleCloseModal = () => {
        setShowTaskModal(false);
        setTaskToUpdate(null);
    };

    return (
        <section className="mb-20" id="tasks">
            {showTaskModal && (
                <TaskModal
                    onSaveTask={handleSaveTask}
                    taskToUpdate={taskToUpdate}
                    modalMode={modalMode}
                    onClose={handleCloseModal}
                />
            )}
            <div className="container m-auto">
                <TaskSearchBox />
                <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
                    <TaskActions
                        onOpenTaskModal={() => setShowTaskModal(true)}
                    />
                    <TaskLists
                        tasks={tasks}
                        onUpdate={(task) => {
                            setTaskToUpdate(task);
                            setModalMode("update");
                            setShowTaskModal(true);
                        }}
                        onDelete={(id) => {
                            setTasks((prevTasks) =>
                                prevTasks.filter((task) => task.id !== id)
                            );
                        }}
                    />
                </div>
            </div>
        </section>
    );
}
