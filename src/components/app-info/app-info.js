import './app-info.sass';

const AppInfo = (props) => {
    const {data} = props;

    const counterIncrease = (data) => {
        let counter = 0;
        data.forEach(item => {
            if (item.increase) {
                counter++
            }
        });
        return counter;
    }

    return (
        <div className="app-info">
            <h1>Учёт сотрудников в компании ООО СПЕКТР</h1>
            <h2>Общее число сотрудников: {data.length}</h2>
            <h2>Премию получат: {counterIncrease(data)}</h2>
        </div>
    )
}

export default AppInfo;