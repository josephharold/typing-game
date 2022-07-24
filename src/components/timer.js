import React, { useState, useEffect } from 'react';

const Timer = (props) => {
  const [seconds, setSeconds] = useState(30);
  const [isActive, setIsActive] = useState(false);
  function reset() {
    setSeconds(30);
    setIsActive(false);
  }
  useEffect(() => {
    let interval = null;
    if (isActive && seconds !== 0) {
      interval = setInterval(() => {
        props.onTick(seconds-1);
        setSeconds(seconds => seconds - 1);
      }, 1000);
    } else if (!isActive && seconds !== 30) {
      clearInterval(interval);
    } else if(isActive && seconds ===0){
      clearInterval(interval);
      reset();
      props.setIsFinished();
    }
    return () => clearInterval(interval);
  },[isActive, seconds]);
  useEffect(()=>{
    if(!props.isActive){
      setSeconds(30);
    }
    setIsActive(props.isActive);
  },[props.isActive, props.setIsFinished])
  return (
    <div className="w-1/12">
      <span>
        {seconds}
      </span>
      <span>
        s
      </span>
    </div>
  );
};

export default Timer;