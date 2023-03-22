import React, {useEffect} from 'react';

import { ToDoList } from '../ToDoList';

import styles from './index.module.scss';


export const App: React.FC = () => {
    return (
        <div>
            <ToDoList />
        </div>
    );
}