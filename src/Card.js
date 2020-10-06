
import React from 'react'

import './Card.css'

const HIDDEN_SYMBOL = '❓'

// composant Card reçoit 3 props card, feedback et onClick
const Card = ({ card, feedback, onClick }) => (
    // Incrustation de la valeur feedback
    <div className={`card ${feedback}`} onClick={() => onClick(card)}>
        <span className="symbol">
            {feedback === 'hidden' ? HIDDEN_SYMBOL : card}
        </span>
    </div>
)


export default Card