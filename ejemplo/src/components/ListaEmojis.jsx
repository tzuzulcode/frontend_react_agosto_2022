import React from 'react'

let emojis = ["🍪","👎","😎"]

export default function ListaEmojis() {

    const parrafosEmoji = []

    for (let i = 0; i < emojis.length; i++) {
        parrafosEmoji.push(<p key={emojis[i]}>{emojis[i]}</p>)
    }

    // parrafosEmoji -> [<p key="🍪">🍪</p>,<p key="👎">👎</p>,<p key="😎">😎</p>]

  return (
    <div>
        {parrafosEmoji}
    </div>
  )
}

