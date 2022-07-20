import React, { useState, useEffect } from 'react';

const Timer = (props) => {
  const [seconds, setSeconds] = useState(30);
  const [isActive, setIsActive] = useState(false);

  const onStart=()=>{
    if(props.isActive ===true){
      setIsActive(true);
    }else{
      setIsActive(false);
    }
  }
  function reset() {
    setSeconds(30);
    setIsActive(false);
  }
  useEffect(() => {
    setIsActive(props.isActive);
    let interval = null;
    if (isActive && seconds !== 0) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds - 1);
      }, 1000);
    } else if (!isActive && seconds !== 30) {
      clearInterval(interval);
    } else if(isActive && seconds ===0){
      clearInterval(interval);
      props.turnOff();
    }
    return () => clearInterval(interval);
  });
	
  return (
    <div className="app">
      <div className="time">
        {seconds}s
      </div>
      {/* <div className="row">
        <button className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`} onClick={toggle}>
          {isActive ? 'Pause' : 'Start'}
        </button>
        <button className="button" onClick={reset}>
          Reset
        </button>
      </div> */}
    </div>
  );
};

export default Timer;