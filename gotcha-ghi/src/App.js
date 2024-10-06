import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CardComponent from './card/CardComponent.js';
import './App.css';

export default function App() {
  return (
    <>
    <CardComponent />
      <BrowserRouter>
        <div className="container">
          <div className='header-box'>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}