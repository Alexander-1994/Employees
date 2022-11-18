import { createSelector } from 'reselect';

export const employeesSelector = createSelector([
    state => state.persons.list,
    state => state.filtration.activeFilter,
    state => state.filtration.enter
], (persons, filter, enter) => {
    const view = persons.filter(elem => {
        const reg = new RegExp(`${enter}`, 'i');
        
        return elem.name.match(reg);
    })

    if (filter === 'all') {
        return view;
    } else if (filter === 'rise') {
        return view.filter(elem => elem.rise)
    } else if (filter === 'bigSalary') {
        return view.filter(elem => elem.salary > 1000)
    } 

    return view;
});