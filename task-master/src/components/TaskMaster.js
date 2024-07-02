import React, {useState} from "react";
import {Table, Button} from "react-bootstrap";

const TaskMaster = () =>{
    const initialTasks = [
        {id: 1, name: 'Étude de marché', status: 'Completed', progress: 100},
        {id: 2, name: 'Écriture des spécifications', status: 'In Progress', progress: 91},
        {id: 3, name: 'Design du produit', status: 'In Progress', progress: 67},
        {id: 4, name: 'Développement', status: 'In Progress', progress: 42},
        {id: 5, name: 'Tests', status: 'In Progress', progress: 0},
        {id: 6, name: 'Marketing et vente', status: 'To Do', progress: 0}
    ]

    const [tasks, setTasks] = useState(initialTasks);
    const [filteredTasks, setFilteredTasks] = useState(initialTasks);

    const sortTasks = () => {
        const sortedTasks = [...filteredTasks].sort((a, b) => a.name.localeCompare(b.name));
        setFilteredTasks(sortedTasks);
    };

    const filterTasks = (status) => {
        if (status === 'All') {
            setFilteredTasks(tasks);
        } else {
            const filtered = tasks.filter(task => task.status === status);
            setFilteredTasks(filtered);
        }
    };

    const calculateAverageProgress = () => {
        const totalProgress = tasks.reduce((acc, task) => acc + task.progress, 0);
        return (totalProgress / tasks.length).toFixed(2);
    };

    return (
        <div className="container mt-5">
            <h1>Task Manager</h1>
            <Button variant="primary" onClick={sortTasks} className="me-2">Sort Alphabetically</Button>
            <Button variant="secondary" onClick={() => filterTasks('To Do')} className="me-2">To Do</Button>
            <Button variant="secondary" onClick={() => filterTasks('In Progress')} className="me-2">In Progress</Button>
            <Button variant="secondary" onClick={() => filterTasks('Completed')} className="me-2">Completed</Button>
            <Button variant="secondary" onClick={() => filterTasks('All')} className="me-2">All</Button>
            <h2 className="mt-3">Average Progress: {calculateAverageProgress()}%</h2>
            <Table striped bordered hover className="mt-3">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Status</th>
                    <th>Progress</th>
                </tr>
                </thead>
                <tbody>
                {filteredTasks.map(task => (
                    <tr key={task.id}>
                        <td>{task.id}</td>
                        <td>{task.name}</td>
                        <td>{task.status}</td>
                        <td>{task.progress}%</td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </div>
    );
};

export default TaskMaster;