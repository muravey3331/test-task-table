import React, {Component} from 'react';

//components
import TableHeaders from './TableHeaders';
import TableBody from './TableBody';

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sortedCol: "",
            sortType: ""
        };
        this.sortTable = this.sortTable.bind(this);
        this.setSortParams = this.setSortParams.bind(this);
        this.headers = this.props.data.headers;
        this.data = this.props.data.data
    }

    setSortParams(index) {
        if (!this.state.sortType || this.state.sortType === 'desc' || this.state.sortedCol !== index) {
            this.setState(
                {
                    sortType: 'asc',
                    sortedCol: index
                }
            )
        } else if (this.state.sortType === 'asc') {
            this.setState(
                {
                    sortType: 'desc',
                    sortedCol: index
                }
            );
        }
    }

    sortTable() {
        if (this.state.sortedCol !== '' && this.state.sortType !== '') {
            const {sortType, sortedCol} = this.state;
            this.data.sort((a, b) => {
                switch (sortType) {
                    case 'asc':
                        return (a[sortedCol] < b[sortedCol]) ? -1 : (a[sortedCol] > b[sortedCol]) ? 1 : 0;
                    case 'desc':
                        return (a[sortedCol] > b[sortedCol]) ? -1 : (a[sortedCol] < b[sortedCol]) ? 1 : 0;
                    default:
                        return 0;
                }
            });
        }
    }

    render() {
        this.sortTable();
        return (
            <div>
                <table>
                    <TableHeaders headers={this.headers}
                                  setSortParams={this.setSortParams}
                                  sortedCol={this.state.sortedCol}
                                  sortType={this.state.sortType}/>
                    <TableBody data={this.data}/>
                </table>
            </div>
        )
    }
    ;
}

export default Table;