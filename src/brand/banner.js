import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link, NavLink } from "react-router-dom";
import "./style.css";

export default class Banner extends React.Component {
  render() {
    return (
      <div className="banner">
        <div className="brand-title">
          We are a global company with local culture
        </div>
        <ul className="brand-links">
          <div className="link">
            <li>
              <a
                href="https://www.znanylekarz.pl/?_ga=2.39277156.695468746.1530692053-1836590902.1530692053"
                target="_blank"
              >
                znanylekarz
              </a>
            </li>
            <li>
              <a href="//www.doctoralia.es" target="_blank">
                doctoralia
              </a>
            </li>
            <li>
              <a href="//www.miodottore.it" target="_blank">
                miodottore
              </a>
            </li>
            <li>
              <a href="//www.doktortakvimi.com" target="_blank">
                doktortakvimi
              </a>
            </li>
            <li>
              <a href="//www.ismertorvos.hu" target="_blank">
                ismertorvos
              </a>
            </li>
            <li>
              <a href="//www.znamylekar.cz" target="_blank">
                znamylekar
              </a>
            </li>
          </div>
        </ul>
      </div>
    );
  }
}
