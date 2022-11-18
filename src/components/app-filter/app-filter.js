import { useDispatch, useSelector } from 'react-redux';
import { onFilteringEmployees } from '../../services/actions';
import './app-filter.sass';

const AppFilter = () => {
    const dispatch = useDispatch();
    const {activeFilter} = useSelector(state => state.filtration);

    const buttonList = [
        {name: 'all', label: 'Все сотрудники'},
        {name: 'rise', label: 'На повышение'},
        {name: 'bigSalary', label: 'З/П больше 1000$'}
    ];
    const buttons = buttonList.map(({name, label}) => {
        const clazz = activeFilter === name ? 'btn-light' : 'btn-outline-light';

        return <button 
            type='button'
            key={name}
            data-name={name}
            className={`btn ${clazz}`}
            onClick={event => dispatch(onFilteringEmployees(event.target.getAttribute('data-name')))}>
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