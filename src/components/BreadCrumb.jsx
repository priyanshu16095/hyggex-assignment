import React, { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function Flashcard() {
    const [selectedCard, setSelectedCard] = useState('Flashcards');
    const [breadcrumb, setBreadcrumb] = useState([]);

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

    const handleCardClick = (cardName) => {
        setSelectedCard(cardName);
        const updatedBreadcrumb = [...breadcrumb, cardName];
        setBreadcrumb(updatedBreadcrumb);
    };

    const handleBreadcrumbClick = (index) => {
        const updatedBreadcrumb = breadcrumb.slice(0, index + 1);
        setBreadcrumb(updatedBreadcrumb);
        setSelectedCard(updatedBreadcrumb[index]);
    };

    return (
        <div className='flashcard flex-v'>
            <div className="breadcrumb flex-h">
                <HomeIcon onClick={() => handleBreadcrumbClick(-1)} />
                {breadcrumb.map((item, index) => (
                    <React.Fragment key={index}>
                        <NavigateNextIcon />
                        <p className="link pointer" onClick={() => handleBreadcrumbClick(index)}>{item}</p>
                    </React.Fragment>
                ))}
            </div>

            <div>
                {data.map((item, index) => {
                    if (item.name === selectedCard) {
                        return (
                            <div key={index} className='flashcard__option flex-v'>
                                <p className="title gradient-text">{item.name}</p>
                                {item.children && item.children.map((child, childIndex) => (
                                    <p className="link pointer" key={childIndex} onClick={() => handleCardClick(child.name)}>{child.name}</p>
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
