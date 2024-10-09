import { useState } from 'react'
import React from 'react'

export default function Project1() {
  const [color, setColor] = useState("lavender")
  const [text,settext]=useState("black")

  return (
    <div className=''>
      
      <div className="w-full h-screen duration-200"
        style={{backgroundColor:color}}>

          
<div>
<div className=''>
      <h2 className='text-4xl text-center py-8'>Color Changer</h2>
    </div>

          <div className=' flex flex-wrap justify-center items-center  bottom-12 inset-x-0 px-2 '>
          
            <div className='flex flex-wrap gap-4 justify-center  shadow-lg bg-white px-3 py-2 rounded-3xl  m-10'>
              
              <h2 className='flex items-center'>Background Color:</h2>
              <button onClick={()=> setColor("red")} className='outline-none px-4 py-1 rounded-full ' style={{backgroundColor:"red"}}>Red</button>

              <button onClick={()=> setColor("yellow")} className='outline-none px-4 py-1 rounded-full ' style={{backgroundColor:"yellow"}}>yellow</button>

              <button onClick={()=> setColor("blue")} className='outline-none px-4 py-1 rounded-full ' style={{backgroundColor:"blue"}}>blue</button>

              <button onClick={()=> setColor("green")} className='outline-none px-4 py-1 rounded-full ' style={{backgroundColor:"green"}}>green</button>

              <button onClick={()=> setColor("black")} className='outline-none text-white px-4 py-1 rounded-full ' style={{backgroundColor:"black"}}>black</button>

              <button onClick={()=> setColor("orange")} className='outline-none  px-4 py-1 rounded-full ' style={{backgroundColor:"orange"}}>orange</button>

              <button onClick={()=> settext("violet")} className='outline-none t px-4 py-1 rounded-full ' style={{backgroundColor:"violet"}}>violet</button>




            </div>
            </div>

            <div className=' flex flex-wrap justify-center items-center  bottom-12 inset-x-0 px-2 '>
            <div className='flex flex-wrap gap-4 justify-center  shadow-lg bg-white px-3 py-2 rounded-3xl  mx-10 '>
              
              <h2 className='flex items-center'>Text Color:</h2>
              <button onClick={()=> settext("red")} className='outline-none px-4 py-1 rounded-full ' style={{backgroundColor:"red"}}>Red</button>

              <button onClick={()=> settext("yellow")} className='outline-none px-4 py-1 rounded-full ' style={{backgroundColor:"yellow"}}>yellow</button>

              <button onClick={()=> settext("blue")} className='outline-none px-4 py-1 rounded-full ' style={{backgroundColor:"blue"}}>blue</button>

              <button onClick={()=> settext("green")} className='outline-none px-4 py-1 rounded-full ' style={{backgroundColor:"green"}}>green</button>

              <button onClick={()=> settext("black")} className='outline-none text-white px-4 py-1 rounded-full ' style={{backgroundColor:"black"}}>black</button>

              <button onClick={()=> settext("orange")} className='outline-none  px-4 py-1 rounded-full ' style={{backgroundColor:"orange"}}>orange</button>

              <button onClick={()=> settext("violet")} className='outline-none t px-4 py-1 rounded-full ' style={{backgroundColor:"violet"}}>violet</button>




            </div>
            </div>


            <div className='flex items-center justify-center text-center m-20 text-5xl bg-white p-4 rounded-3xl'>
              <h1 style={{color:text,}}>"Words have the power to both heal and harm. Choose them wisely."</h1></div>
          </div></div>

          <div className='mx-8 my-14'>
      <div className='text-xl'>
        <h4>A color changer for text and background is a tool or function that allows you to modify the colors of text and the background on which it appears. This can be useful for a variety of purposes, such as:</h4>
        <ul className='text-xl mt-10 my-3'>
          <li className='my-1'><u><b>Improving readability:</b></u> By choosing contrasting colors for text and background, you can make the text easier to read.</li>
          <li className='my-1'><u><b>Creating visual interest:</b></u> Using different colors can help to draw attention to specific elements or create a more visually appealing design.</li>
          <li className='my-1'><u><b>Customizing the appearance of text:</b></u> You can use color changers to match text to a specific theme or style.</li>
        </ul>
      </div>

      <div className='text-2xl mt-10 my-8'>
        <h5>Color changers can be found in a wide range of software applications, including:</h5>
        <ul className='text-xl  mt-6 my-3'>
          <li className='my-1'><u><b>Word processors:</b></u>Like Microsoft Word or Google Docs.</li>
          <li className='my-1'><u><b>Text editors: </b></u> Such as Notepad++ or Sublime Text.</li>
          <li className='my-1'><u><b>Web development tools:</b></u> Like HTML editors or CSS styling software.</li>
          <li className='my-1'><u><b>Graphic design programs:</b></u>Like Adobe Photoshop or Canva.</li>
        </ul>
      </div>


    </div>
      </div>
    
  )
}

