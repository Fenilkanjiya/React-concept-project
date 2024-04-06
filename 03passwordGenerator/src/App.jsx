import { useCallback, useEffect, useState, useRef } from "react"


function App() {
   const [length, setLength] = useState(8)
   const [allowNumber, setAllowNumber] = useState(false)
   const [allowChar, setAllowChar] = useState(false)
   const [password, setPassword] = useState('')

   const passwordRef = useRef(null)

   const passWordGeneratoe = useCallback(() => {
    let pass = ''
    let char = 'qwertyuioplkjhgfdsazxcvbnmQAZXSWEDCVFRTGBNHYUJMKILOP'
    if(allowChar) char += '!@#$%^&*+'
    if(allowNumber) char += '12345677890'

    for(let i = 1; i < length; i++){
      let str = Math.floor(Math.random() * char.length + 1)
      pass += char.charAt(str)
    }
    setPassword(pass)
   }, [length, allowChar, allowNumber, setPassword])

   const handleCopy = useCallback(() => {
    passwordRef.current?.select();
    navigator.clipboard.writeText(password)
   },[password])

   useEffect(() => {
    passWordGeneratoe()
   }, [allowChar, allowNumber, length])

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 bg-gray-800 text-orange-500 py-3">
     <h1 className='text-white text-center my-3'>Password generator</h1>
     <div className="flex shadow rounded-lg overflow-hidden mb-4 my-3">
      <input type="text" className="outline-none w-full py-1 px-3"
      placeholder="Password"
      value={password}
      ref={passwordRef}
      readOnly />
      <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shaink-0" onClick={handleCopy}>Copy</button>
     </div>
     <div className="flex text-sm gap-x-2">
      <div className="flex items-center gap-x-1">
        <input type="range" min={6} max={100}
        value={length} 
          className="cursor-pointer"
          onChange={(e) => setLength(e.target.value)}
        />
        <label>length: {length}</label>
        <div className="flex text-sm gap-x-2">
        <input type="checkbox" defaultChecked={allowNumber} id="numberInput" onChange={() => setAllowNumber((prev) => !prev)}/>
        <label>Number</label>
        </div>
        <div className="flex text-sm gap-x-2">
        <input type="checkbox" defaultChecked={allowChar} id="charInput" onChange={() => setAllowChar((prev) => !prev)}/>
        <label>Character</label>
        </div>
      </div>
     </div>
    </div>
  )
}

export default App
