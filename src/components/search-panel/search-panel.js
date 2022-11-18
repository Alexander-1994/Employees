import { useDispatch, useSelector } from 'react-redux';
import { onSearchEmployee } from '../../services/actions';
import './search-panel.sass';

const SearchPanel = () => {
    const dispatch = useDispatch();
    const {enter} = useSelector(state => state.filtration);

    return (
        <input 
            type="text" 
            className='form-control search-input' 
            placeholder='Найти сотрудника'
            value={enter}
            onChange={event => dispatch(onSearchEmployee(event.target.value))} />
    )
}

export default SearchPanel;