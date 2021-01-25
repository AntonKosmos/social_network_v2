import React, {useState} from 'react';
import style from './Paginator.module.css'

export const Paginator = (props) => {
    let pages = [];
    let totalPagesCount = Math.ceil(props.totalItemsCount / props.pageSize);
    for (let i = 1; i <= totalPagesCount; i++) {
        pages.push(i);
    }

    let [currentPortion, setCurrentPortion] = useState(1); // текущая порция

    let totalPortion = Math.ceil(totalPagesCount / props.portionSize); // общее количество порции ( по 5 )
    let leftCurrentPortion = (currentPortion - 1) * props.portionSize + 1; // левая гранциа порции
    let rightCurrentPortion = currentPortion * props.portionSize; // правая граница порции

    return <div>
        {
            currentPortion > 1 &&  <button onClick={ () => setCurrentPortion(currentPortion - 1) }>PREV</button>
        }
        {
            pages
                .filter(p => p >= leftCurrentPortion && p <= rightCurrentPortion)
                .map((p) => {
                return <button className={props.currentPage === p ? style.selectPage : null}
                               key={p}
                               onClick={() => props.onPageSelect(p)}> {p}</button>
            })
        }
        {
            currentPortion < totalPortion && <button onClick={ () => setCurrentPortion(currentPortion + 1)}>NEXT</button>
        }
    </div>
};