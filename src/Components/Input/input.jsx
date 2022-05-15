import { useRef, useEffect } from 'react'

export default function Input(props) {
  const input = useRef()

  useEffect(()=> {
    input.current.focus()
  }, [])

  return (
    <div className="input-wrapper mt-10">
      <textarea 
        className="textarea textarea-secondary w-6/12 block h-48 mx-auto text-3xl"
        onChange={(e)=> props.handleTyping(e.target.value)} 
        defaultValue={props.userInput}
        ref={input}
      >
      </textarea>
    </div>
  )
}