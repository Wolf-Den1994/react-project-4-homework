import { createStore } from 'redux';

const initialState = {
  counter: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INC':
      return { ...state, counter: state.counter + 1 };
    case 'DEC':
      return { ...state, counter: state.counter - 1 };
    case 'RST':
      return { ...state, counter: 0 };
    default:
      return state;
  }
};

const inc = () => ({ type: 'INC' });
const dec = () => ({ type: 'DEC' });
const res = () => ({ type: 'RST' });

const store = createStore(reducer);

const btnInc = document.querySelector('#inc');
const btnDec = document.querySelector('#dec');
const btnRst = document.querySelector('#rst');
const counter = document.querySelector('#counter');

const updateInc = () => store.dispatch(inc());
const updateDec = () => store.dispatch(dec());
const reset = () => store.dispatch(res());
btnInc.addEventListener('click', updateInc);
btnDec.addEventListener('click', updateDec);
btnRst.addEventListener('click', reset);

const updateCounter = () => (counter.textContent = store.getState().counter);
store.subscribe(updateCounter);
