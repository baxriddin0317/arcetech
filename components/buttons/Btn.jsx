import React from 'react'

function Btn({className, children, href}) {
  return (
    <div className={`${className} p-1 bg-gradient-to-l from-fromBlue to-toBlue rounded-xl`}>
      <button className={`w-full hover:bg-gradient-to-l hover:from-fromBlue hover:to-toBlue  bg-black py-21 rounded-xl`}>
        <a href={href && href} className="text-xl">
        {children}
        </a>
      </button>
    </div>
  )
}

export default Btn