export function Todo (title,description = "",dueDate,priority = 0,notes = "",isCompleted = false) {
    function changeStatus(status) {
        if(status != undefined) {
            isCompleted = status;
        } else {
            isCompleted = !isCompleted;
        }
    }

    return {
        title,
        description,
        dueDate,
        priority,
        notes
    }
};

