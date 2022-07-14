import React from "react";
import { Link } from 'react-router-dom';

export default props => (
    <nav className="navbar navbar-inverse bg-inverse">
        <div className="container">
            <div className="navbar-header">
                <a className="navbar-brand" href="#">
                    <i className="fa fa-calendar-check-o"></i>
                </a>
            </div>
            <div id="navbar" className="navbar-collapse ">
                <ul className="nav navbar-nav">
                    <li><Link to="/aplicacao/listargaleria">Listar Galeria</Link></li>
                    <li><Link to="/aplicacao/criargaleria">Criar Galeria</Link></li>
                </ul>
            </div>
        </div>
    </nav>
)