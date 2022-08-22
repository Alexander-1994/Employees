import { Component } from 'react';
import './search-panel.sass';

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onSearch = (e) => {
        const enter = e.target.value;
        this.setState({
            term: enter
        });
        this.props.onUpdateSearch(enter)
    }

    render() {
        return (
            <input 
                type="text" 
                className='form-control search-input' 
                placeholder='Найти сотрудника'
                value={this.state.term}
                onChange={this.onSearch} />
        )
    }
}

export default SearchPanel;