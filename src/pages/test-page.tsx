import TodolistItem from "../entities/TodolistItem/TodolistItem";


const testData = {
    id: '111',
    addedDate: '',
    order: 1,
    title: 'Title'
}
export const TestPage = () => {
    return (
        <div className={'Container'}>
            <TodolistItem todolist={testData}/>
            <TodolistItem todolist={testData}/>
            <TodolistItem todolist={testData}/>
            <TodolistItem todolist={testData}/>
            <TodolistItem todolist={testData}/>
            <TodolistItem todolist={testData}/>
            <TodolistItem todolist={testData}/>
            <TodolistItem todolist={testData}/>
        </div>
    );
};

export default TestPage;