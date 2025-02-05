import React from 'react';

// Сами фильтры отображаются в компоненте без состояния Toolbar, которому от Portfolio мы передаём три свойства:
// filters — список фильтров, название которых совпадает с категориями проектов;
// selected — активный фильтр;
// onSelectFilter(filter) — обработчик события, который реагирует на выбор пользователем одного из фильтров, 
// обработчик принимает один аргумент — строку с названием фильтра.

// Пример:

// <Toolbar
//   filters={["All", "Websites", "Flayers", "Business Cards"]}
//   selected="All"
//   onSelectFilter={(filter) => {console.log(filter);}}/>
// В этом примере при выборе фильтра его название будет выведено в консоль. Например, «Business Cards».

// установить состояние выбранного фильтра в обработчике события, который Portfolio передаёт в свойство onSelectFilter компонента Toolbar

function Toolbar (props) {
    const { filters = [], selected, onSelectFilter } = props
    // console.log(selected)
    // console.log(filters)


    // console.log(filters)

    return (
        <div>
            {filters.map(filter => (
                <button className="filter-button"
                    key={filter}
                    onClick={() => onSelectFilter(filter)}
                    style={{ fontWeight: filter === selected ? 'bold' : 'normal' }}
                >
                    {filter}
                </button>
            ))}
        </div>
    )
}

export default Toolbar