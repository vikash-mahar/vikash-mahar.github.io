import { useState, useCallback, useEffect, useRef } from 'react'
import React from 'react';
import { NavLink ,Link } from 'react-router-dom';


export default function Project1() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
      
    }

    setPassword(pass)


  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])
  return (
    <div className=''>

    <div className='my-8'>
      <h2 className='text-4xl text-center'>Password Generator</h2>
    </div>
    <div className="w-full  max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
        />
        <button
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
        
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
      
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
              setNumberAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Special Characters</label>
      </div>
    </div></div>

    <div className='mx-8 my-14'>
      <div className='text-xl'>
        <h4>A password generator is a tool that creates strong, random passwords. These passwords are typically composed of a combination of uppercase and lowercase letters, numbers, and symbols, making them difficult for hackers to guess or brute force.</h4>
      </div>

      <div className='text-2xl my-10'>
        <h5>Here's why using a password generator is important:</h5>
        <ul className='text-xl my-3 '>
          <li className='my-1 mt-5'><u><b>Security:</b></u> Strong, unique passwords are essential for protecting your online accounts from unauthorized access.</li>
          <li className='my-1'><u><b>Convenience:</b></u> Password generators can help you avoid the hassle of creating and remembering complex passwords manually.</li>
          <li className='my-1'><u><b>Variety:</b></u> They can generate passwords with different lengths and complexity levels to suit your specific needs.</li>
        </ul>
      </div>

      <div className='text-2xl my-10'>
        <h5>Here's how password generators work:</h5>
        <ul className='text-xl my-3'>
          <li className='my-1 mt-5'><b>Create passwords</b></li>
          <p>Password generators use algorithms to create random passwords using a combination of numbers, letters, and symbols</p>
          <li className='my-1 mt-5'><b>Customize passwords</b></li>
          <p>You can customize the password complexity by including or excluding certain characters. For example, you can specify the length of the password, whether it should include uppercase or lowercase letters, numbers, and symbols, and whether it should be easy to say or read.</p>
          <li className='my-1 mt-5'><b>Evaluate password strength</b></li>
          <p>Some password generators check the generated password against a standard to evaluate its strength. For example, LastPass uses the zxcvbn library to check the strength of the generated password</p>
        </ul>
      </div>


    </div>

    

    
</div>
    
  )
}

 