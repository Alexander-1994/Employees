import EmployeesListItem from '../employees-list-item/employees-list-item';
import './employees-list.css';

const EmployeesList = ({data}) => {                                /* сразу диструктурируем массив data из объекта props */    
    const elements = data.map(item => {
        const {id, ...itemProps} = item;

        return <EmployeesListItem key={id} {...itemProps} />       /* ИЛИ: return <EmployeesListItem key={id} name={item.name} salary={item.salary} */
    });                                                            /* -> Метод map вернет видоизмененный массив с данными -> компоненты с пропсами*/

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
};

export default EmployeesList;