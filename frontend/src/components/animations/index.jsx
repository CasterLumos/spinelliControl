import React, { useState } from 'react';
import Lottie from 'react-lottie';
import styled from 'styled-components';

import animationData from './404.json';

const ButtonWrapper = styled.button`
  padding-top: 50vh;
  margin-left: 50vw;
  transform: translate(-50%);
  --size: 100px;
  width: var(--size);
  height: var(--size);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 33px;
  background-color: #fff;
  border: 0;
  cursor: pointer;
  outline: 0;
  border-radius: 100%;
`;

export default function Animation(){

  const [isLiked, setLikeState] = useState(false);
  const [animationState, setAnimationState] = useState({
    isStopped: true, isPaused: false,
    direction: -1,
  });

  const defaultOptions = {
    loop: false,
    autoplay: false, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };


return (
    <>
      <ButtonWrapper onClick={() => {
        const reverseAnimation = -1;
        const normalAnimation = 1;

        setAnimationState({
          ...animationState,
          isStopped: false,
          direction: animationState.direction === normalAnimation 
            ? reverseAnimation
            : normalAnimation,
        })
        setLikeState(!isLiked);
      }}>
        <div className="animation">
          <Lottie
            options={defaultOptions}
            width={250}
            height={250}
            direction={animationState.direction}
            isStopped={animationState.isStopped}
            isPaused={animationState.isPaused}/>
        </div>
      </ButtonWrapper>
      {/* <span>
        {isLiked ? 1 : 0}
      </span> */}
    </>
  );
}