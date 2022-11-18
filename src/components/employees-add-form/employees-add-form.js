import { useDispatch } from 'react-redux';
import { useHttp } from '../../services/hooks/http.hook';
import { onAddEmployee } from '../../services/actions';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { v4 as uuidv4 } from 'uuid';
import './employees-add-form.sass';

const EmployeesAddForm = () => {    
    const {request} = useHttp();
    const dispatch = useDispatch();

    const onCreate = data => {
        request('http://localhost:3001/data', 'POST', JSON.stringify(data))
            .then(result => dispatch(onAddEmployee(result)))
            .catch(error => console.log(error))
    }

    return (
        <Formik 
            initialValues={{
                name: '',
                salary: ''
            }}
            validationSchema={Yup.object({
                name: Yup.string()
                          .required('Обязятельное поле!')
                          .min(2, 'Имя должно содержать минимум 2 символа'),
                salary:  Yup.number('З/п укажите цифрами')
                            .required('Обязятельное поле!')
                            .min(100, 'Минимальная з/п - 100$')
            })}
            onSubmit={(values, {resetForm}) => {
                const person = {...values, increase: false, rise: false, id: uuidv4()}
                onCreate(person);
                resetForm();
            }}>
            <div className="app-add-form">
                <h3>Добавить нового сотрудника</h3>
                <Form className="add-form d-flex">
                    <div className="fueld-wrapper">
                        <Field 
                            type="text"
                            className="form-control new-post-label"
                            placeholder="Как его зовут?"
                            name="name" />
                        <ErrorMessage className='fueld-error' name="name" component="div" />
                    </div>
                    <div className="fueld-wrapper">
                        <Field 
                            type="number"
                            className="form-control new-post-label"
                            placeholder="З/П в $?"
                            name="salary" />
                        <ErrorMessage className='fueld-error' name="salary" component="div" />
                    </div>
                
                    <button
                        type="submit"
                        className="btn btn-outline-light submit">
                            Добавить
                    </button>
                </Form>
            </div>
        </Formik>
    )
}

export default EmployeesAddForm;