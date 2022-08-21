import { Component } from 'react';
import './employees-add-form.css';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        };
    }
    
    onValueChange = (e) => {                                                        /* данный метод будет брать данные с инпутов форм и с ними формировать новый объект состояния */
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const {name, salary} = this.state;
        
        if (name.length >= 2 && +salary > 99) {
            this.props.onAdd(name, salary);
            this.setState({
                name: '',
                salary: ''
            })
        } else {
            alert(`
                Ввод некорректный! Примечания: 
                1. Имя сотрудника должно быть минимум из 2 букв
                2. Минимальная з/п сотрудника - 100$
            `)
        }
    }

    render() {
        const {name, salary} = this.state;

        return (
            <div className="app-add-form">
                <h3>Добавить нового сотрудника</h3>
                <form className="add-form d-flex"
                    onSubmit={this.onSubmit}>
                    <input 
                        type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?"
                        name="name"
                        value={name}
                        onChange={this.onValueChange} />
                    <input 
                        type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?"
                        name="salary"
                        value={salary}
                        onChange={this.onValueChange} />
                    <button
                        type="submit"
                        className="btn btn-outline-light">
                            Добавить
                    </button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;