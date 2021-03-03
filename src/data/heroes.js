import blaze from './images/blaze.png';
import magenta from './images/magenta.png';
import george from './images/george.png';
import peppa from './images/peppa.png';
import marshall from './images/marshall.png';
import ryder from './images/ryder.png';
import { shuffleArray } from './../utils/utils';

export const heroes = [
  // {
  //   name: 'marshall',
  //   image: marshall,
  // },
  // {
  //   name: 'george',
  //   image: george,
  // },
  // {
  //   name: 'blaze',
  //   image: blaze,
  // },
  // {
  //   name: 'magenta',
  //   image: magenta,
  // },
  {
    name: 'peppa',
    image: peppa,
  },
  {
    name: 'ryder',
    image: ryder,
  },
]

const shuffledHeroes = heroes.map((hero) => {
  return shuffleArray(hero.name.split('').map((char, index) => ({ char, index })));
});

if (!localStorage.getItem('shuffledHeroes')) {
  localStorage.setItem('shuffledHeroes', JSON.stringify(shuffledHeroes));
}
