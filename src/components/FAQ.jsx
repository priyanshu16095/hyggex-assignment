import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function FAQ() {
    const [selected, setSelected] = useState(-1)

    function hanldeClick(index) {
        if (selected === index) {
            setSelected(-1)
            return
        }
        setSelected(index)
    }

    const data = [
        { question: 'Can education flashcards be used for all age groups?', answer: 'Education flashcards are adaptable tools that can cater to a wide range of age groups. From preschoolers learning basic vocabulary to high school students preparing for standardized tests, flashcards serve as effective aids for reinforcing concepts and memorizing information. ' },
        { question: 'How do education flashcards work?', answer: 'Education flashcards typically work by presenting information or concepts on one side of a card and related content or cues on the other side.' },
        { question: 'Can education flashcards be used for test preparation?', answer: 'This is a flashcard' },
    ]
    return (
        <div className='faq flex-v'>

            <p className="title gradient-text">FAQ</p>

            <div className="cards flex-v">
            {data && data.map((item, index) => {
                return (
                    <div className='card flex-v' key={index}>
                        <div className="card__header flex-s pointer" onClick={() => hanldeClick(index)}>
                            <p className="font">{item.question}</p>
                            {selected === index? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                        </div>
                        {selected === index ? <p>{item.answer}</p> : null}
                    </div>
                );
            })}
            </div>

        </div>
    )
}

export default FAQ
