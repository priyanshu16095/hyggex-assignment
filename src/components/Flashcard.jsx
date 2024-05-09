import React, { useState } from 'react';
import Hero from './Hero';
import HomeIcon from '@mui/icons-material/Home';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function Flashcard() {
    const [selectedCard, setSelectedCard] = useState('Flashcards');
    const data = [
        {
            name: 'Flashcards',
            children: [
                { name: 'Mathematics' },
                { name: 'Economics' },
                { name: 'Chemistry' },
                { name: 'English' },
            ]
        },
        {
            name: 'Mathematics',
            children: [
                { name: 'Relations And Functions' },
                { name: 'Trignometry' },
                { name: 'Calculus' },
                { name: 'Functions' },
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
            {selectedCard === 'Relations And Functions' && <Hero />}
            </div>
        </div>
    );
}

export default Flashcard;
