import React, {useState} from 'react';
import useAsyncStorageCRUD from "./useAsyncStorageCRUD";

export default function useNewToDoManage() {
    const [title, titleChange] = useState("");
    const [description, descriptionChange] = useState("");

    const {toDoCreate} = useAsyncStorageCRUD();

    const fieldsTab = [{
        value: title,
        onChange: (e) => titleChange(e),
        placeholder: "Name of the task to do",
    },
        {
            value: description,
            onChange: (e) => descriptionChange(e),
            placeholder: "Description (optionnal)",
        },
    ];

    async function handleSubmit() {
        if (title.length === 0) {
            return alert("The task requires a title");
        }
        await toDoCreate({title, description, checked: false});
        titleChange("");
        descriptionChange("");
    }

    return {fieldsTab, handleSubmit};
}

