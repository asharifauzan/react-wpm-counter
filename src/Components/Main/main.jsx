import Head from '../Head/head'
import Body from '../Body/body'
import Result from '../Result/result'
import { useState, useEffect } from 'react'

export default function Main() {
  const quote = "Uh, summa-lumma, dooma-lumma, you assumin' I'm a human What I gotta do to get it through to you I'm superhuman"
  // const quote = "Uh, summa-lumma"

  const [quotes, setQuotes] = useState(quote)
  const [arrayWords, setArrayWords] = useState([])
  const [arrayChars, setArrayChars] = useState([])
  const [charPosition, setCharPosition] = useState(0)
  const [raceStarted, setRaceStarted] = useState(false)
  const [raceEnded, setRaceEnded] = useState(false)
  const [timeStart, setTimeStart] = useState(0)
  const [timeStop, setTimeStop] = useState(0)
  const [userInput, setUserInput] = useState('')

  useEffect(()=> {
    setArrayWords(quotes.split(' '))
  }, [quotes])

  useEffect(()=> {
    setArrayChars(quotes.split(''))
  }, [quotes])

  const handleTyping = word=> {
    setUserInput(word)
    const span = document.querySelectorAll('.quote span')

    if(charPosition === 0 && !raceStarted) {
      setRaceStarted(true)
      setTimeStart(new Date())
    }

    // use 'word' instead
    // since it's synchronus
    if(word === quotes.substring(0, charPosition+1)) {
      span[charPosition].style.color = 'cyan'
      span[charPosition].style.backgroundColor = 'transparent'
      span[charPosition].style.borderBottom = '1px solid transparent'
      setCharPosition(oldState=> oldState + 1)
    } else {
      span[charPosition].style.backgroundColor = 'red'
      span[charPosition].style.borderBottom = '1px solid red'
    }
    
    if(charPosition + 1 === quotes.length) {
      setRaceEnded(true)
      setTimeStop(new Date())
    }
  }

  const duration = ((timeStop - timeStart) / 1000) 
  const xMinute  = duration / 60 // get minute in float
  const wpm      = arrayWords.length * ((Math.ceil(xMinute) * 60) / duration)

  return (
    <div className="container mx-auto w-screen min-h-screen py-16">
      <Head arrayChars={arrayChars} />
      {
        raceEnded ? <Result wpm={wpm} /> : null
      }
      <Body handleTyping={handleTyping} userInput={userInput} />
    </div>
  )
}