import React from 'react'

const Header = ({status, setStatus}) => {
  return (
    <div className='header p5'>
        <div className="header__logo">
            Logo
        </div>
        <div className="header__list">
            <div className="header__item" onClick={()=>{
              setStatus("noob")
            }} style={{color: `${status==="noob"? "white":""}`, borderBottom:  `${status==="noob"? "1px solid":""}`}}>noob</div>
            <div className="header__item" onClick={()=>{
              setStatus("midle")
            }} style={{color: `${status==="midle"? "white":""}`, borderBottom:  `${status==="midle"? "1px solid":""}`}}>midle</div>
            <div className="header__item" onClick={()=>{
              setStatus("expert")
            }} style={{color: `${status==="expert"? "white":""}`, borderBottom:  `${status==="expert"? "1px solid":""}`}}>expert</div>
        </div>
        <div className="header__login">
            Login
        </div>
    </div>
  )
}

export default Header