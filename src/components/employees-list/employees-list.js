import { useHttp } from '../../services/hooks/http.hook';
import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { employeesSelector } from '../../services/selectors';
import { employeesFetching, employeesFetched, employeesError, onDelEmployee, onToggleValueEmployee } from '../../services/actions';
import EmployeesListItem from '../employees-list-item/employees-list-item';
import './employees-list.sass';

const EmployeesList = () => {     
    const visibleEmployees = useSelector(employeesSelector);
    const {request} = useHttp();
    const dispatch = useDispatch(); 
    const {listLoading} = useSelector(state => state.persons);

    useEffect(() => {
        dispatch(employeesFetching());
        request('http://localhost:3001/data')
            .then(data => dispatch(employeesFetched(data)))
            .catch(() => dispatch(employeesError()))
    }, []);

    const onDelete = useCallback(id => {
        request(`http://localhost:3001/data/${id}`, 'DELETE')
            .then(() => dispatch(onDelEmployee(id)))
            .catch(error => console.log(error))
    }, [request]);

    const onToggleValuePerson = (id, value) => dispatch(onToggleValueEmployee(id, value));
    
    if (listLoading === 'loading') {
        return <h2>Загрузка...</h2>
    } else if (listLoading === 'error') {
        return <h2>Непредвиденная ошибка! Попробуйте позже</h2>
    }

    const createListPersons = arr => {
        if (arr.length === 0) {
            return <h2>Сотрудники отсутствуют</h2>
        }
        return arr.map(item => {
            const {id, ...itemProps} = item;
            return <EmployeesListItem 
                key={id} 
                {...itemProps} 
                onDelete={() => onDelete(id)}
                onToggleValuePerson={event => onToggleValuePerson(id, event.currentTarget.getAttribute('data-toggle'))} />    
            })                                                          
    }

    const elements = createListPersons(visibleEmployees);

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
};

export default EmployeesList;