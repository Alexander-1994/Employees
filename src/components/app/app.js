import { Component } from 'react';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.sass';

const App = () => {
    return (
        <div className='app'>
            <AppInfo />

            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>
                                                                        
            <EmployeesList />                               
            <EmployeesAddForm />
        </div>
    )
}

/* class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [                                                    
                {name: 'John S.', salary: 800, increase: false, rise: false, id: 1},
                {name: 'Alex K.', salary: 7000, increase: false, rise: false, id: 2},
                {name: 'Ann C.', salary: 800, increase: false, rise: false, id: 3},
                {name: 'Oleg A.', salary: 3000, increase: false, rise: false, id: 4},
                {name: 'Dvitriy S.', salary: 1700, increase: false, rise: false, id: 5},
                {name: 'Kianu R.', salary: 20000, increase: false, rise: false, id: 6}
            ],
            term: '',
            filter: 'all'
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
            const newElem = {name, salary, increase: false, rise: false, id: this.maxId++};
            return {
                data: [...data, newElem]
            }
        })
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    }

    searchEmp = (items, enter) => {
        if (enter.length === 0) {
            return items
        } else {
            const reg = new RegExp(`${enter}`, 'i');

            return items.filter(elem => elem.name.match(reg))
        }
    }

    onUpdateSearch = (enter) => {
        this.setState({
            term: enter
        })
    }

    filterPost = (items, filter) => {
        switch (filter) {
            case 'rise':
                return items.filter(elem => elem.rise);
            case 'bigSalary':
                return items.filter(elem => elem.salary > 1000)
            default: 
                return items;
        }
    }

    onFilterSelect = (filterMode) => {
        this.setState({
            filter: filterMode
        })
    }

    render() {
        const {data, term, filter} = this.state;
        const visibleData = this.filterPost(this.searchEmp(data, term), filter);

        return (
            <div className='app'>
                <AppInfo 
                data={data} />
    
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch} />
                    <AppFilter filter={filter} onFilterSelect={this.onFilterSelect} />
                </div>
                                                                            
                <EmployeesList 
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp} />                               
                <EmployeesAddForm
                    onAdd={this.createItem} />
            </div>
        )
    }
} */

export default App;