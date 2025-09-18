import todo from "./model.js"

export const getAllTodo = async () => {
    const todos = await todo.find().exec();
    return todos;
}

export const addTodo = async (data) => {
    const newData = new todo(data);
    return newData.save();
}

export const deleteTodo = async (id) => {
    return todo.deleteOne({_id: id}).exec()
}

export const updateTodo = async (id, data) => {
    return todo.updateOne({_id: id}, data).exec();
}