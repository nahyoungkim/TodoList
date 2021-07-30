import React, {useContext} from "react";
import { FlatList } from "react-native";
import Styled from 'styled-components/native';
import { TodoListContext } from "~/Context/TodoListContext";
import EmptyItem from './EmptyItem';
import TodoItem from './TodoItem';

const Container = Styled(FlatList)`
`;

interface Props{}

const TodoList = ({ } : Props) => {
    const { TodoList, removeTodoList} = useContext<ITodoListContext>(TodoListContext);
    return(
        <Container
            data = {TodoList}
            keyExtractor={(item,index) => {
                return 'todo-${index}';
            }}
            ListEmptyComponent = {<EmptyItem/>}
            renderItem={({item,index}) =>(
                <TodoItem
                    text = {item as string}
                    onDelete ={()=> removeTodoList(index)}
                />
            )}
            contentContainerStyle ={TodoList.length === 0 && {flex:1}}
            />
    );
};

export default TodoList;