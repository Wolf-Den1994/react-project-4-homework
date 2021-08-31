import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import './Counter.css';
import {store} from "../../index";

const Counter = ({ counter, inc, dec, rst }) => {
    console.log(store.getState())
  return (
    <div className="wrapper">
      <p id="counter">{counter}</p>
      <div className="btns">
        <button id="inc" className="btn" onClick={inc} />
        <button id="dec" className="btn" onClick={dec} />
        <button id="rst" className="btn" onClick={rst} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  counter: state.counter,
});

export default connect(mapStateToProps, actions)(Counter);
