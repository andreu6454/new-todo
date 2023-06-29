import React from 'react';
import styles from './InfoPage.module.css'
import ToMainButton from "../../shared/ToMainButton/ToMainButton";

const InfoPage = () => {

    return (
        <div className={styles.InfoPage}>

            <h1>
                F.A.Q.
            </h1>

            <div className={styles.Container}>

                <h2> Описание проекта "Todolists":</h2>

                "Todolists" - это веб-приложение, разработанное для управления списками дел. Оно предоставляет удобный интерфейс, который позволяет пользователям создавать, редактировать и удалять задачи в своих списках дел.
                Основные функциональности "Todolists" включают:

                <p>- - Создание и удаление задач;</p>
                <p>- Отметка задач как выполненных или невыполненных;</p>
                <p>- Фильтрация задач по статусу выполнения;</p>
                <p>- Возможность добавления дополнительных деталей к задачам, таких как описание или дата выполнения;</p>
                <p>- Возможность создания и удаления нескольких списков дел для разных категорий или проектов.</p>

                "Todolists" разработан с использованием <strong>React.js</strong>, <strong>TypeScript</strong> и <strong>CSS модулей</strong> для создания динамического и интуитивно понятного пользовательского интерфейса, дла анимаций использована библиотека <strong>AutoAnimate</strong>, для управления состоянием использован <strong>react-toolkit</strong>.
                Это позволяет пользователям эффективно управлять своими задачами и организовывать свою работу или личные дела.
            </div>

            <div className={styles.LinkContainer}>
                <ToMainButton/>
            </div>

        </div>
    );
};

export default InfoPage;