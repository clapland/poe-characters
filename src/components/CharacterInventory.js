import React from 'react';

import './CharacterInventory.css'

const CharacterInventory = ({character, items}) => {
    const renderInventory = () => {
        console.log(items);
        const weapon = items.filter((item) => {return item.inventoryId === "Weapon"})[0]
        const body = items.filter((item) => {return item.inventoryId === "BodyArmour"})[0]
        const helm = items.filter((item) => {return item.inventoryId === "Helm"})[0]
        const offhand = items.filter((item) => {return item.inventoryId === "Offhand"})[0]
        const boots = items.filter((item) => {return item.inventoryId === "Boots"})[0]
        const gloves = items.filter((item) => {return item.inventoryId === "Gloves"})[0]
        const belt = items.filter((item) => {return item.inventoryId === "Belt"})[0]
        const amulet = items.filter((item) => {return item.inventoryId === "Amulet"})[0]
        const ring1 = items.filter((item) => {return item.inventoryId === "Ring"})[0]
        const ring2 = items.filter((item) => {return item.inventoryId === "Ring2"})[0]
        const flasks = items.filter((item) => {return item.inventoryId === "Flask"})

        console.log(ring1);
        return (
            <div className="inventory">
                <div className="itemContainer weapon"><span className="helper"><img className="image" alt={weapon.name} key={weapon.id} src={weapon.icon} /></span></div>
                <div className="itemContainer helm"><img className="image" alt={helm.name} key={helm.id} src={helm.icon} /></div>
                <div className="itemContainer body"><img className="image" alt={body.name} key={body.id} src={body.icon} /></div>
                <div className="itemContainer weapon2"><img className="image offhandSmall" alt={offhand.name} key={offhand.id} src={offhand.icon} /></div>
                <div className="itemContainer boots"><img className="image" alt={boots.name} key={boots.id} src={boots.icon} /></div>
                <div className="itemContainer gloves"><img className="image" alt={gloves.name} key={gloves.id} src={gloves.icon} /></div>
                <div className="itemContainer belt"><img className="image" alt={belt.name} key={belt.id} src={belt.icon} /></div>
                <div className="itemContainer amulet"><img className="image" alt={amulet.name} key={amulet.id} src={amulet.icon} /></div>
                <div className="itemContainer ring1"><img className="image" alt={ring1.name} key={ring1.id} src={ring1.icon} /></div>
                <div className="itemContainer ring2"><img className="image" alt={ring2.name} key={ring2.id} src={ring2.icon} /></div>
                <div className="itemContainer flask flask1"><img className="image" alt={flasks[0].name} key={flasks[0].id} src={flasks[0].icon} /></div>
                <div className="itemContainer flask flask2"><img className="image" alt={flasks[1].name} key={flasks[1].id} src={flasks[1].icon} /></div>
                <div className="itemContainer flask flask3"><img className="image" alt={flasks[2].name} key={flasks[2].id} src={flasks[2].icon} /></div>
                <div className="itemContainer flask flask4"><img className="image" alt={flasks[3].name} key={flasks[3].id} src={flasks[3].icon} /></div>
                <div className="itemContainer flask flask5"><img className="image" alt={flasks[4].name} key={flasks[4].id} src={flasks[4].icon} /></div>
            </div>
        )
    }

    return renderInventory();
}

export default CharacterInventory;  