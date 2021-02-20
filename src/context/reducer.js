import { initialState } from './initialState';

const roundOverState = {
  roundgoes: false,
  roundpaused: false,
  roundover: true,
}

export default function (state, action) {
  switch (action.type) {
    case 'init':
      return { ...state, balloons: action.payload.name, image: action.payload.image };
    case 'match':
      return { ...state, cells: state.cells += action.payload };
    case 'addresult':
      return { ...state, results: [...state.results, action.payload] };
    case 'pausetoggle':
      return { ...state, roundpaused: !state.roundpaused }
    case 'roundover':
      return { ...state, ...roundOverState, round: state.round++ };
    case 'roundstart':
      return { ...initialState, round: state.round, results: state.results };
    default:
      return state;
  }
}