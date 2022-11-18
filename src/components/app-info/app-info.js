import { useSelector } from 'react-redux';
import './app-info.sass';

const AppInfo = () => {
    const {list} = useSelector(state => state.persons);

    return (
        <div className="app-info">
            <h1>Учёт сотрудников в компании ООО СПЕКТР</h1>
            <h2>Общее число сотрудников: {list.length}</h2>
            <h2>Премию получат: {list.filter(elem => elem.increase === true).length}</h2>
        </div>
    )
}

export default AppInfo;