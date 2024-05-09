import React, { useState } from 'react';
import RelationAndFunctions from './other-components/RelationAndFunctions';
import HomeIcon from '@mui/icons-material/Home';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function Flashcards() {
    const [selectedCard, setSelectedCard] = useState('Flashcards');
    const data = [
        {
            title: 'cards',
            name: 'Flashcards',
            children: [
                { name: 'Mathematics' },
                { name: 'Economics' },
                { name: 'Chemistry' },
                { name: 'English' },
            ]
        },
        {
            title: 'sub-cards',
            name: 'Mathematics',
            children: [
                { name: 'Relations And Functions', children: <RelationAndFunctions /> },
                { name: 'Trignometry' },
                { name: 'Calculus' },
                { name: 'Functions' },
            ]
        },
        {
            title: 'sub-cards',
            name: 'Economics',
            children: [
                { name: 'Accounts', children: <RelationAndFunctions /> },
                { name: 'Income' },
                { name: 'GDP' },
                { name: 'Exports' },
            ]
        },
        {
            name: 'Chemistry',
            children: [
                { name: 'Haloalkanes' },
                { name: 'Electrochemistry' },
                { name: 'Redox' },
                { name: 'Alcohols' },
            ]
        },
    ];

    return (
        <div className='flashcard flex-v'>
            <div className="breadcrumb flex-h">
                <HomeIcon /> 
                <NavigateNextIcon /> 
                <p className="link">Flashcards</p>
                <NavigateNextIcon /> 
                <p className="link">Mathematics</p>
                <NavigateNextIcon /> 
                <p className="link">Relations And Functions</p>
            </div>

            <div>
            {data.map((item, index) => {
                if (item.name === selectedCard) {
                    return (
                        <div key={index} className='flashcard__option flex-v'>
                            <p className="title gradient-text">{item.name}</p>
                            {item.children && item.children.map((child, childIndex) => (
                                <p className="link pointer" key={childIndex} onClick={() => setSelectedCard(child.name)}>{child.name}</p>
                            ))}
                        </div>
                    );
                }
                return null;
            })}
            {selectedCard === 'Relations And Functions' && <RelationAndFunctions />}
            </div>
        </div>
    );
}

export default Flashcards;
