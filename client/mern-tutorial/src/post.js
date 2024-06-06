import React from 'react'
import './App.css';

export default function Post() {
  return (
    <div>
        <div className='post'>
        <div className='image'>
        <img
         src='https://images.pexels.com/photos/8438865/pexels-photo-8438865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        />
        </div>
        <div className='texts'>
        <h2>great robot for performing makeups</h2>
        <p className='info'>
         <a className='author'>Brigg Olsen</a>
         <time>2023-01-16 16:45</time>
        </p >
        <p className='summary'>The skull of a prehistoric "giant goose" has been discovered in Australia.It belongs to a now extinct giant flightless bird that weighed 230kg (36 stone) - about five times as much as an emu.</p>
        </div>
        </div>
    </div>
  )
}
