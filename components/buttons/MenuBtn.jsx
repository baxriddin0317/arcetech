import React from 'react'
import Link from "next/link"
// headless ui import
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'

function MenuBtn({menu}) {
  return (
    <>
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="text-white text-xl">
                    {menu.title}
                </Menu.Button>
            </div>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
            <Menu.Items className="absolute -right-50 w-56 mt-4 bg-gray-900 p-5">
                {menu.items && menu.items.map((m,i) => (
                    <Menu.Item key={i} className="hover:shadow-light-shadow p-2" as="div">
                     {({ active }) => (
                        <Link href={m.href} className="">
                            <a className="block">{m.name}</a>
                        </Link>
                      )}
                    </Menu.Item>
                ))}
            </Menu.Items>
            </Transition>
        </Menu>
    </>
  )
}

export default MenuBtn