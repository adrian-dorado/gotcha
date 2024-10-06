import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';
import CardComponent from './card/CardComponent.js';
import './App.css';

export default function App() {
  return (
    <>
      <CardComponent />
      <BrowserRouter>
      </BrowserRouter>
    </>
  );
}