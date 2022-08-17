import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

// Logo
import Logo from "../../public/assets/Group.png";
import MenuBtn from '../buttons/MenuBtn';
// import icons
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"

const menus = [
  {
    id: 1,
    title: "Our Products",
    items: [
      {
        name: "predict",
        href: "/predict"
      },
      {
        name: "search",
        href: "/search"
      }
    ]
  },
  {
    id: 2,
    title: "Solutions",
    items: [
      {
        name: "solution",
        href: "/solutions"
      }
    ]
  },
  {
    id: 3,
    title: "Team",
    href: "/team"
  }
]

function Header() {

  const [ open, setOopen ] = useState(false);

  return (
    <header className='bg-transparent'>
      <div className="max-w-8xl mx-auto px-4 lg:px-1.5 lg:py-5 py-4">
        <div className="flex items-center justify-between">
          {/* logo */}
          <Link href="/" >
            <a ><Image src={Logo} alt="rasmda" /></a>
          </Link>

          {/* nav */}
          <nav className='hidden lg:flex'>
            <ul className='flex items-center gap-12'>
            {menus.map(menu => (
              <li key={menu.id}>
                {menu.items ? <MenuBtn menu={menu} /> :
                  <Link href={menu.href}><a>{menu.title}</a></Link>
                }
              </li>
            ))}
            <li>
              <Link href="/contact">
                <a className='bg-black py-5 px-10 text-xl border border-white rounded-lg hover:bg-white hover:text-black'>
                Talk to Sales
                </a>
              </Link>
            </li>
            </ul>
          </nav>

          {/* humbergur button */}
          <button 
            className='flex lg:hidden bg-bg-button p-3 rounded-sm ' 
            onClick={() => setOopen(!open)}
          >
            <AiOutlineMenu className='text-3xl' />
          </button>
        </div>
      </div>
      

      {/* // mobile menu */}
      <nav className={`bg-black fixed z-100 left-0 w-full h-full duration-700 ${open ? "top-0" : "-top-full"}`}> 
        <div className='flex items-center justify-between py-4 px-4'>
          {/* logo */}
          <Link href="/" >
            <a ><Image src={Logo} alt="rasmda" /></a>
          </Link>

          {/* close btn */}
          <button
            className='flex lg:hidden bg-bg-button p-3 rounded-sm ' 
            onClick={() => setOopen(!open)}
          >
            <AiOutlineClose className='text-3xl'/>
          </button>
        </div>

        <ul className='mx-auto py-5 w-2/5'>
          {menus.map(menu => (
            <li key={menu.id} className="mb-5">
              <h3 className='text-2xl'>
                {menu.href ? <a href={menu.href}>{menu.title}</a> :
                menu.title}
              </h3>
              <div className='flex text-xl flex-col pl-4'>
                {menu.items && menu.items.map((link, i) => (
                  <Link href={link.href} key={i} >
                    <a>{link.name}</a>
                  </Link>
                ))}
              </div>
            </li>
          ))}
          <li>
            <button className='bg-white w-full py-4 text-black text-xl rounded-lg '>
              Talk to Sales
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header