import React from 'react';
import {Link} from 'react-router-dom';
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
                    <td data-label="Account">{entry.account.name}</td>
                    <td data-label="Character"><Link to={`/profile/${entry.account.name}/${entry.character.name}`}>{entry.character.name}</Link></td>
                    <td data-label="Class">{entry.character.class}</td>
                </tr>
            )
        });
    }

    render() {
        if(!this.props.ladder) {
            return <div>Loading...</div>
        }
        return (
            <table className="ui celled table">
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Account</th>
                        <th>Character</th>
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