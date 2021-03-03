import { heroes } from './../data/heroes';
import { themes } from './../data/themes';
import { balloons } from './../data/balloons';

const ROUND_NUM = heroes.length;

class State {
  constructor() {
    this.username = '';
    this.theme = themes[0].bg;
    this.balloon = balloons[0].image;
    this.volume = { music: 0.5, sound: 0.5 };
    this.mode = 'light';
    this.currRound = 0;
    this.roundNumber = ROUND_NUM;
    this.game = false;
    this.total = [];
    this.roundState = {
      auto: false,
      word: heroes[this.currRound].name,
      image: heroes[this.currRound].image,
      cells: '',
      started: true,
      finished: false,
      played: true,
      paused: false,
      currChar: '',
      pressedKey: {},
    };
  }
}

export const initialState = new State();

export const reducer = (state, action) => {
  switch (action.type) {
    case 'username':
      console.log('username');
      return {
        ...state,
        username: action.payload,
      };
    case 'gameload':
      console.log('gameload');
      return {
        ...state,
        game: false,
        roundState: {
          ...state.roundState,
          auto: false,
          cells: '',
          started: true,
          finished: false,
          played: true,
          paused: false,
          currChar: '',
          pressedKey: {},
        },
      };
    case 'gamestart':
      console.log('gamestart');
      return {
        ...state,
        game: true,
        roundState: {
          ...state.roundState,
          word: heroes[state.currRound].name,
          image: heroes[state.currRound].image,
          cells: '',
          started: true,
          finished: false,
          played: true,
          paused: false,
          currChar: '',
          pressedKey: {},
        },
      };

    case 'gameover':
      console.log('gameover');
      return {
        ...initialState,
        gameResults: state.gameResults,
        username: state.username,
        total: [...state.total, state.gameResults],
      };

    case 'roundstart':
      console.log('roundstart');
      return {
        ...state,
        roundState: {
          ...state.roundState,
          word: heroes[state.currRound].name,
          image: heroes[state.currRound].image,
          cells: '',
          started: true,
          finished: false,
          played: true,
          paused: false,
          auto: false,
        }
      };

    case 'roundover':
      console.log('roundover');
      return {
        ...state,
        currRound: state.currRound + 1,
        roundState: {
          ...state.roundState,
          started: false,
          played: false,
          paused: false,
          finished: true,
        }
      };

    case 'match':
      return {
        ...state, roundState: {
          ...state.roundState,
          cells: state.roundState.cells + action.payload,
          currChar: '',
        }
      };

    case 'pausetoggle':
      console.log('pausetoggle');
      return { ...state, roundState: { ...state.roundState, paused: !state.roundState.paused } };

    case 'autoplay':
      console.log('autoplay');
      return { ...state, roundState: { ...state.roundState, auto: action.payload } };

    case 'addresult':
      console.log('addresult');
      return {
        ...state,
        gameResults: { ...state.gameResults, ...action.payload }
      }

    case 'music':
      console.log('music');
      return { ...state, volume: { ...state.volume, music: action.payload } };

    case 'sound':
      console.log('theme');
      return { ...state, volume: { ...state.volume, sound: action.payload } };

    case 'theme':
      console.log('theme');
      return { ...state, theme: action.payload };

    case 'balloon':
      console.log('balloon');
      return { ...state, balloon: action.payload };

    case 'mode':
      console.log('mode');
      return { ...state, mode: action.payload };

    case 'clickOnBallon':
      console.log('clickOnBallon');
      return { ...state, roundState: { ...state.roundState, currChar: action.payload } };

    case 'pressKey':
      console.log('pressKey');
      return { ...state, roundState: { ...state.roundState, pressedKey: action.payload } };

    default:
      console.log('default');
      return state;
  }
}