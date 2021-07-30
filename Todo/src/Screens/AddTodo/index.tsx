import React, {useState} from "react";

import AddButton from './AddButton';
import TodoInput from './TodoInput';

interface Props{}

const AddTodo = ({}:Props) => {
    const [showInput, setShowInput] = useState<boolean>(false);

    return(
        <>
        <AddButton onPress = {()=> setShowInput(true)}/>
        {showInput && <TodoInput hideTodoInpu = {()=> setShowInput(false)}/>}
        </>
    );
};

export default AddTodo;