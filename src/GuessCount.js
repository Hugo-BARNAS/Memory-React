import React from 'react'

import './GuessCount.css'
// GuessCount reçoit une prop : guesses
const GuessCount = ({ guesses }) =>
    <div className="guesses">
        {guesses}
    </div>

export default GuessCount
