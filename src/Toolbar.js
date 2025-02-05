import React from 'react';

function Toolbar (props) {
    const { filters = [], selected, onSelectFilter } = props;

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
    );
};

export default Toolbar;