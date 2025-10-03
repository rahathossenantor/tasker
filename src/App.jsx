import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import TaskBoard from "./sections/task-board/TaskBoard";

export default function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <TaskBoard />
            <Footer />
        </>
    );
}
