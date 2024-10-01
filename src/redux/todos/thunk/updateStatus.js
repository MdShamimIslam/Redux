import { toggled } from "../actions";

const updateStatus = (todoId, currentStatus) => {
    return async (dispatch) => {
        try {
            const res = await fetch(`http://localhost:9000/todos/${todoId}`, {
                method: "PATCH",
                body: JSON.stringify({
                    completed: !currentStatus,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
               
            });

            if (!res.ok) {
                throw new Error(`Todo with ID ${todoId} not found`);
            }

            const todo = await res.json();
            dispatch(toggled(todo.id));
        } catch (error) {
            console.error("Error updating todo:", error.message);
        }
    };
};


export default updateStatus;