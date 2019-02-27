import React from 'react';
import {connect} from 'react-redux';

import {fetchCharacter} from '../actions';
import CharacterInventory from './CharacterInventory';

class CharacterPage extends React.Component {
    componentDidMount() {
        this.props.fetchCharacter(this.props.match.params.character, this.props.match.params.account)
    }

    renderCharacter() {
        if(!this.props.characterInfo.character) {
            return <div>Loading!</div>;
        }

        const character = this.props.characterInfo.character;
        const items = this.props.characterInfo.items;

        return (
            <CharacterInventory items={items} character={character} />
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