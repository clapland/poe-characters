import React from 'react';
import {connect} from 'react-redux';

import {fetchLadder} from '../actions';

class LadderPage extends React.Component {
    componentDidMount() {
        this.props.fetchLadder();
    }

    renderList = () => {
        return this.props.ladder.map(entry => {
            return (
                <tr key={entry.rank}>
                    <td data-label="Rank">{entry.rank}</td>
                    <td data-label="Name">{entry.character.name}</td>
                    <td data-label="Class">{entry.character.class}</td>
                </tr>
            )
        });
    }

    render() {
        if(!this.props.ladder) {
            return <div>Loading</div>
        }
        return (
            <table className="ui celled table">
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Class</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderList()}
                </tbody>
            </table>
        )
    }
}

const mapStateToProps = (state) => {
    return {ladder: state.ladder.entries}
}

export default connect(mapStateToProps, {fetchLadder})(LadderPage);