import { heroes } from './../data/heroes';

export default function (state, action) {
  switch (action.type) {
    case 'roundstart':
      return {
        ...state, roundState: {
          word: heroes[state.results.length].name,
          cells: '',
          image: heroes[state.results.length].image,
          started: true,
          finished: false,
          played: true,
          paused: false,
        }
      };
    case 'match':
      return {
        ...state, roundState: {
          ...state.roundState, cells:
            state.roundState.cells += action.payload
        }
      };
    case 'addresult':
      return { ...state, results: [...state.results, action.payload] };
    case 'pausetoggle':
      return { ...state, roundState: { ...state.roundState, paused: !state.roundState.paused } }
    case 'roundover':
      return {
        ...state, roundState: {
          word: '',
          cells: '',
          image: null,
          started: true,
          played: false,
          paused: false,
          finished: true,
        }
      };
    case 'volume':
      return { ...state, volume: action.payload }
    case 'theme':
      return { ...state, theme: action.payload }
    default:
      return state;
  }
}