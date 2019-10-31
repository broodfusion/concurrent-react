// Simple Data-fetching
// 💯 extract complicated bits to getPikachu

// http://localhost:3000/isolated/exercises-final/01-extra.1

import React from 'react'
import fetchPokemon from '../fetch-pokemon'
import {ErrorBoundary} from '../utils'

// if you want to make an actual network call for the pokemon
// the uncomment the following line.
// window.fetch.restoreOriginalFetch()

let pikachu
let pikachuError
let pikachuPromise = fetchPokemon('pikachu').then(
  p => (pikachu = p),
  e => (pikachuError = e),
)

function getPikachu() {
  if (pikachuError) {
    throw pikachuError
  }
  if (!pikachu) {
    throw pikachuPromise
  }
  return pikachu
}

function Pikachu() {
  const pikachu = getPikachu()
  return <pre>{JSON.stringify(pikachu, null, 2)}</pre>
}

function App() {
  return (
    <div
      style={{
        height: 300,
        width: 300,
        overflow: 'scroll',
        backgroundColor: '#eee',
        borderRadius: 4,
        padding: 10,
      }}
    >
      <ErrorBoundary>
        <React.Suspense fallback={<div>Loading Pikachu...</div>}>
          <Pikachu />
        </React.Suspense>
      </ErrorBoundary>
    </div>
  )
}

/*
🦉 Elaboration & Feedback
After the instruction, copy the URL below into your browser and fill out the form:
http://ws.kcd.im/?ws=Concurrent%20React&e=TODO&em=
*/

////////////////////////////////////////////////////////////////////
//                                                                //
//                 Don't make changes below here.                 //
// But do look at it to see how your code is intended to be used. //
//                                                                //
////////////////////////////////////////////////////////////////////

export default App