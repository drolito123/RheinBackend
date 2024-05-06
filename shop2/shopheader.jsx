import React from 'react';
import logoimg from '../multimedia/cart.jpg';
import './Products.css';
import { Link } from 'react-router-dom';
import {TextField} from "@mui/material"
import {setup} from "./predict.js";
import { useEffect } from "react";




export default function Headers() {

	useEffect(() => {
		setup();
	}, []);
	
  return (
    <header className='headshop' id="header">
        <Link to='/home' className='ahome'><h2 className='h1shop'>Home</h2></Link>
        <Link to='/shop' className='ahome'><h2 className='h1shop'>Products</h2></Link>
        <div className="search-container">
          <input type="text" placeholder="Search..." className="search-box">
            <TextField id="pred_features" label="Products" />
						<TextField id="pred_labels" disabled label="Products" />
          </input>
          <button type="submit" className="search-button">
            <i className="fa fa-search"></i>
          </button>
        </div>
        <Link to='/cart'><img className="carrito" src={logoimg} alt="carrito"/></Link>
    </header>
  );
};
