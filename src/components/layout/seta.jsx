import React from 'react';
import { FiChevronLeft } from "react-icons/fi";
import "../../styles/layout/seta.css"
import { Link } from 'react-router-dom'

function Seta() {

    return (
            <Link to="/">
            <div className="divSeta">
                <FiChevronLeft></FiChevronLeft>
            </div>
            </Link>
    );
  }
  
  export default Seta;
  