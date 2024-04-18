import React from 'react'
import { Link } from 'react-router-dom';
import './nopageModule.css'


export  function NoPage() {
  return (
    <>
    <div style={{fontSize:'400px'}}>
      404
    </div>
      <div style={{fontSize:'100px'}}>
        НЕТУ ТАКОЙ СТРАНИЦЫ
      </div>
      <button style={{ fontSize: '52px', backgroundColor: '#74A8C8', border: 'none', textDecoration: 'none' }}>
        <Link to="/" style={{ color: 'inherit' }}>Домой</Link>
      </button>

    </>
  )
}
