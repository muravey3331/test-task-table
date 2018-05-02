import React, {Component} from 'react';

//components
import TableHeaders from './TableHeaders';
import TableBody from './TableBody';

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sortedCol: "",
            secondSortedCol: 1,
            sortType: ""
        };
        this.sortTable = this.sortTable.bind(this);
        this.setSortParams = this.setSortParams.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.headers = this.props.data.headers;
        this.data = this.props.data.data;
        this.widths = this.props.widths;
    }

    handleSelectChange(e) {
        this.setState({
            secondSortedCol: e.target.value
        });
        this.sortTable();
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
            const {sortType, sortedCol, secondSortedCol} = this.state;
            this.data.sort((a, b) => {
                switch (sortType) {
                    case 'asc':
                        return (a[sortedCol] > b[sortedCol]) - (a[sortedCol] < b[sortedCol]) || (a[secondSortedCol] > b[secondSortedCol]) - (a[secondSortedCol] < b[secondSortedCol]);
                    case 'desc':
                        return (a[sortedCol] < b[sortedCol]) - (a[sortedCol] > b[sortedCol]) || (a[secondSortedCol] < b[secondSortedCol]) - (a[secondSortedCol] > b[secondSortedCol]);
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
                <div className="select-wrapper">
                    <span>Second sort field:</span>
                    <select name="" defaultValue={1} onChange={this.handleSelectChange}>
                    {this.headers.map((item, index) => {
                        return (
                            <option key={index} value={index} disabled={index === this.state.sortedCol}>{item}</option>)
                    })}
                    </select>
                </div>
                <table>
                    <TableHeaders headers={this.headers}
                                  setSortParams={this.setSortParams}
                                  sortedCol={this.state.sortedCol}
                                  sortType={this.state.sortType}
                                  widths={this.widths}/>
                    <TableBody data={this.data}/>
                </table>
            </div>
        )
    }
    ;
}

export default Table;

