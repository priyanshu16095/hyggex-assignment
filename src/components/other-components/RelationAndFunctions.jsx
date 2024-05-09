import React, { useState } from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import '../style.css'
import ReplayIcon from '@mui/icons-material/Replay';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import { AiOutlineBulb } from "react-icons/ai";
import NavigateNextTwoToneIcon from '@mui/icons-material/NavigateNextTwoTone';
import NavigateBeforeTwoToneIcon from '@mui/icons-material/NavigateBeforeTwoTone';
import CropFreeIcon from '@mui/icons-material/CropFree';
import Modal from './Modal';

function Hero() {
    const [selectedItem, setSelectedItem] = useState(0)
    const [data, setData] = useState([
        { id: 0, content: 'Relations and functions actually define a mapping between two sets.' },
        { id: 1, content: 'Relations – A relation R from a non-empty set B is a subset of the cartesian product A × B. The subset is actually derived by describing a relationship between the first element and the second element of the ordered pairs in A × B.' },
        { id: 2, content: 'Functions – A relation f from a set A to a set B is mainly said to be a function if each and every element of set A has one and only one image in set B. In other words, we can also say that no two distinct elements of B have the same pre-image.' },
        { id: 3, content: 'Define a function f: A = {1, 2, 3} → B = {1, 4, 9} such that f(1) = 1, f(2) = 4, f(3) = 9.' },
        { id: 4, content: 'Domain – This is the set of all first elements of the ordered pairs in a relation R from a set A to a set B is called the domain of the relation R.' },
        { id: 5, content: 'Range – This is the set of all second elements of the ordered pairs in a relation R from a set A to a set B is called the range of the relation R.' },
        { id: 6, content: 'Codomain – This is the whole set B in a relation R from a set A to a set B is called the codomain of the relation R.' },
        { id: 7, content: 'There are many or different types of relations and functions that have very specific properties which make them different and unique.' },
        { id: 8, content: 'Empty Relation – A relation is said to be an empty relation, if it has no elements, that is, no element of set A is mapped or linked to any element of A. It is denoted by R = ∅.' },
        { id: 9, content: 'Universal Relation – A relation R in a set A is actually a universal relation if each element of A is related to every element of A, i.e., R = A × A. It is called the full relation.' },
    ])

    console.log(data[selectedItem].content)

    function handleNext(index) {
        if (index === data.length - 1) {
            setSelectedItem(0)
            return
        }
        setSelectedItem(index + 1)
    }
    function handlePrev(index) {
        if(index === 0) {
            setSelectedItem(data.length-1)
            return
        }
        setSelectedItem(index-1)
    }

    const[showModal, setShowModal] = useState(false)

    return (
        <div className='hero flex-v'>

            <p className="title gradient-text">Relations and Functions (Mathematics)</p>

            <div className="hero__center flex-v">

                <div className="hero__card">
                    <div className="hero__center__links flex-h">
                        <p className="link pointer">Study</p>
                        <p className="link pointer">Quiz</p>
                        <p className="link pointer">Test</p>
                        <p className="link pointer">Game</p>
                        <p className="link pointer">Others</p>
                    </div>

                    <div className="hero__card__item flex-v">
                        <div className="hero__card_item__header flex-s">
                            <AiOutlineBulb className='volumeIcon' />
                            <VolumeUpIcon />
                        </div>
                        <div className="hero__card__content">
                            <p className="hero__content title flex-v">{data && data[selectedItem].content}</p>
                        </div>
                    </div>

                    <div className="hero__card__bottom flex-s">
                        <ReplayIcon />
                        <div className='hero__card__navi flex-h'>
                            <NavigateBeforeTwoToneIcon className='iconA' onClick={() => handlePrev(selectedItem)} />
                            <p className="font">{selectedItem+1}/{data.length}</p>
                            <NavigateNextTwoToneIcon className='iconA' onClick={() => handleNext(selectedItem)} />
                        </div>
                        <CropFreeIcon />
                    </div>

                </div>

            </div>

            <div className="hero_bottom flex-s">
                <div className="hero__bottom__logo flex-v">
                    <p>Powered by</p>
                    <img src="Component-3.png" width={'100rem'} /></div>
                <div className="hero__bottom__buttom flex-h">
                    <AddCircleIcon className='iconB' />
                    <button onClick={() => setShowModal(true)} className='font gradient-text'>Create Flashcard</button>
                    {showModal && <Modal onClose={() => setShowModal(false)} />}
                </div>
            </div>

        </div>
    )
}

export default Hero
