import React, { Component } from 'react'
import shuffle from 'lodash.shuffle'

import './App.css'

import Card from './Card'
import GuessCount from './GuessCount'
import Hall0Fame, { FAKE_HOF } from './HallOfFame'

const SIDE = 6
const SYMBOLS = '😀🎉💖🎩🐶🐱🦄🐬🌍🌛🌞💫🍎🍌🍓🍐🍟🍿'

class App extends Component {
  cards = this.generateCards()

  generateCards() {
    // soit résult un tableau vide
    const result = []
    // soit la taille égal à  36 cartes 
    const size = SIDE * SIDE
    // on initialise le jeu en le melangeant
    const candidates = shuffle(SYMBOLS)
    // tant que la taille du tableau est inférieur à 36 alors on 
    while (result.length < size) {
      // on initialise une constante qui le dernier élément de la liste des symboles
      const card = candidates.pop()
      // et on push les symboles deux fois dans le tableau
      result.push(card, card)
    }
    // et on retourne le tableau dont le contenu sort de façon aléatoire
    return shuffle(result)
  }

  handleCardClick(card) {
    console.log(card, 'clicked')
  }

  render() {
    const won = new Date().getSeconds() % 2 === 0
    return (
      <div className="memory">
        <GuessCount guesses={0} />
        {this.cards.map((card, index) => (
          <Card
            card={card}
            feedback="visible"
            key={index}
            onClick={this.handleCardClick}
          />
        ))}
        {won && <Hall0Fame entries={FAKE_HOF} />}
      </div>
    )
  }
}

export default App