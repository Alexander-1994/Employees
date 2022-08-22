import './app-filter.sass';

const AppFilter = (props) => {
    const buttonList = [
        {name: 'all', label: 'Все сотрудники'},
        {name: 'rise', label: 'На повышение'},
        {name: 'bigSalary', label: 'З/П больше 1000$'}
    ];
    const buttons = buttonList.map(({name, label}) => {
        const active = props.filter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light';

        return <button 
            type='button'
            key={name}
            className={`btn ${clazz}`}
            onClick={() => props.onFilterSelect(name)}>
                {label}
            </button>
    })
    
    return (
        <div className="btn-group">
            {buttons}
        </div>
    )
}

export default AppFilter;