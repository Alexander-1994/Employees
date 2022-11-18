export const employeesFetching = () => ({type: 'EMPLOYEES_FETCHING'});
export const employeesFetched = data => ({type: 'EMPLOYEES_FETCHED', payload: data});
export const employeesError = () => ({type: 'EMPLOYEES_FETCHING_ERROR'});
export const onAddEmployee = data => ({type: 'EMPLOYEES_ADD_PERSON', payload: data});
export const onDelEmployee = id => ({type: 'EMPLOYEES_DEL_PERSON', payload: id});
export const onToggleValueEmployee = (id, value) => ({type: 'EMPLOYEE_TOGGLE_VALUE', payload: id, attribute: value}); 

export const onSearchEmployee = value => ({type: 'EMPLOYEE_SEARCH', payload: value});
export const onFilteringEmployees = value => ({type: 'EMPLOYEES_FILTERING', payload: value});