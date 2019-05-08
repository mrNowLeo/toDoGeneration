import React, {Component} from 'react';
import Data from './data.js';
import './RandomPhrase.css';

var getRandomPhraze = function() {
  return Data[getRandomInt(0, Data.length)];
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var randomText = getRandomPhraze();
class RandomPhrase extends Component {
  render() {
    return (
      <blockquote>
        <div className="randomPhrase_text">{randomText.text}</div>
        <div className="randomPhrase_writer">- {randomText.writer}</div>
      </blockquote>
    );
  }
}

export default RandomPhrase;
