import './../app-info/app-info'
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

function App() {
    const data = [                                                      /* Импровизация данных с сервера -> передадим их в компонент EmployeesList в data-пропсе ниже */
        {name: 'John S.', salary: 800, increase: true, id: 111111},
        {name: 'Alex K.', salary: 7000, increase: false, id: 222222},
        {name: 'Ann C.', salary: 2000, increase: true, id: 333333},
        {name: 'Oleg A.', salary: 3000, increase: false, id: 444444},
        {name: 'Dvitriy S.', salary: 1700, increase: false, id: 555555},
        {name: 'Kianu R.', salary: 20000, increase: false, id: 666666}
    ];

    return (
        <div className='app'>
            <AppInfo />

            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>
                                                                        
            <EmployeesList data={data} />                               
            <EmployeesAddForm />
        </div>
    );
}

export default App;