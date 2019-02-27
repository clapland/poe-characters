import React from 'react';
import {connect} from 'react-redux';

import {fetchCharacter} from '../actions';

class CharacterPage extends React.Component {
    componentDidMount() {
        this.props.fetchCharacter(this.props.match.params.character, this.props.match.params.account)
    }

    renderCharacter() {
        if(!this.props.characterInfo.character) {
            return;
        }

        const character = this.props.characterInfo.character;
        const items = this.props.characterInfo.items;

        console.log(character);
        console.log(items);

        return (
            <div className="ui list">
                <div className="item">{character.name}</div>
                {items.map((item) => {
                    return <div className="item" key={item.id}>{item.name}</div>
                })}
            </div>
        );
    }

    render() {
        return <div>{this.renderCharacter()}</div>;
    }
}

const mapStateToProps = (state) => {
    return {characterInfo: state.characterInfo}
}

export default connect(mapStateToProps,{fetchCharacter})(CharacterPage);