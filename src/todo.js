export function Todo (title,description = "",dueDate,priority = 0,notes = "",isCompleted = false) {
    const id = crypto.randomUUID();

    function changeStatus(status) {
        if(status != undefined) {
            isCompleted = status;
        } else {
            isCompleted = !isCompleted;
        }
    }

    return {
        id,
        title,
        description,
        dueDate,
        priority,
        notes
    }
};

