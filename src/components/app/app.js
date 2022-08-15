import { Component } from 'react';
import './../app-info/app-info'
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [                                                    
                {name: 'John S.', salary: 800, id: 1},
                {name: 'Alex K.', salary: 7000, id: 2},
                {name: 'Ann C.', salary: 2000, id: 3},
                {name: 'Oleg A.', salary: 3000, id: 4},
                {name: 'Dvitriy S.', salary: 1700, id: 5},
                {name: 'Kianu R.', salary: 20000, id: 6}
            ]
        };
        this.maxId = this.state.data.length + 1;
    }

    deleteItem = (id) => {
        this.setState(({data}) => ({
            data: data.filter(elem => elem.id !== id)
        }))
    }

    createItem = (name, salary) => {
        this.setState(({data}) => {
            const newElem = {name, salary, id: this.maxId++};
            return {
                data: [...data, newElem]
            }
        })
    }

    render() {
        const {data} = this.state;

        return (
            <div className='app'>
                <AppInfo />
    
                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>
                                                                            
                <EmployeesList 
                    data={data}
                    onDelete={this.deleteItem} />                               
                <EmployeesAddForm
                    onAdd={this.createItem} />
            </div>
        )
    }
}

export default App;