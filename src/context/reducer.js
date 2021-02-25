import { heroes } from './../data/heroes';
import { themes } from './../data/themes';

export const initialState = {
  theme: themes[0].bg,
  volume: {
    music: 0.5,
    sound: 0.5
  },
  results: [],
  rounds: heroes.length,
  roundState: {
    word: heroes[0].name,
    cells: '',
    image: heroes[0].image,
    played: true,
    paused: false,
    finished: false,
  }
}

export const reducer = (state, action) => {
  switch (action.type) {
    case 'gamerestart':
      console.log(0);
      return { ...initialState };
    case 'roundstart':
      console.log(1);
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
      console.log(2);
      return {
        ...state, roundState: {
          ...state.roundState, cells:
            state.roundState.cells += action.payload
        }
      };
    case 'addresult':
      console.log(3);
      return { ...state, results: [...state.results, action.payload] };
    case 'pausetoggle':
      console.log(4);

      return { ...state, roundState: { ...state.roundState, paused: !state.roundState.paused } }
    case 'roundover':
      console.log(5);

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
    case 'music':
      return { ...state, volume: { ...state.volume, music: action.payload } }
    case 'sound':
      return { ...state, volume: { ...state.volume, sound: action.payload } }
    case 'theme':
      return { ...state, theme: action.payload }
    default:
      return state;
  }
}