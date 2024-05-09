import React from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import './style.css'
import ReplayIcon from '@mui/icons-material/Replay';
import CropFreeIcon from '@mui/icons-material/CropFree';
// import { IoChevronBackCircle } from "react-icons/io5";
{/* <IoChevronBackCircle /> */ }
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import { AiOutlineBulb } from "react-icons/ai";
import NavigateNextTwoToneIcon from '@mui/icons-material/NavigateNextTwoTone';
import NavigateBeforeTwoToneIcon from '@mui/icons-material/NavigateBeforeTwoTone';
import { Crop } from '@mui/icons-material';
// import { BubbleChart } from '@mui/icons-material';

function Hero() {
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
                        <div className="hero__equation flex-v">
                            <p className="title">9 + 6 + 7x - 2x - 3</p>
                        </div>
                    </div>

                    <div className="hero__card__bottom flex-s">
                        <ReplayIcon />
                        <div className='hero__card__navi flex-h'>
                            <NavigateBeforeTwoToneIcon className='iconA' />
                            <p className="font">01/10</p>
                            <NavigateNextTwoToneIcon className='iconA' />
                        </div>
                        <Crop />
                    </div>

                </div>

            </div>

            <div className="hero_bottom flex-s">
                <div className="hero__bottom__logo flex-v">
                    <p>Powered by</p>
                    <img src="Component-3.png" width={'100rem'} /></div>
                <div className="hero__bottom__buttom flex-h">
                    <AddCircleIcon className='iconB' />
                    <p className='font gradient-text'>Create Flashcard</p>
                </div>
            </div>

        </div>
    )
}

export default Hero
