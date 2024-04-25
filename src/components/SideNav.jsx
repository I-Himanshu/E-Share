import React, { useEffect, useState } from 'react'
import { MdBookOnline, MdClose, MdContacts, MdFeedback, MdHome, MdMenu, MdOutlineMore, MdOutlineRoomService, MdPrivacyTip } from "react-icons/md";
import { Link } from 'react-router-dom';
export const SideNav = ({
  isOpen = false
}) => {
  const [open, setOpen] = useState(isOpen);
  const menuItems = [
    {
      title: 'Home',
      icon: MdHome,
      link: '/'
    },
    {
      title: 'About',
      icon: MdOutlineMore,
      link: '/about'
    },
    {
      title: 'Contact',
      icon: MdContacts,
      link: '/contact'
    },
    {
      title: 'Services',
      icon: MdOutlineRoomService,
      link: '/services'
    },
    {
      title: "Features",
      icon: MdFeedback,
      link: "/features"
    },
    {
      title: "Privacy",
      icon: MdPrivacyTip,
      link: "/privacy"
    }
  ]
  const [currentPath, setCurrentPath] = useState("");
  useEffect(()=>{
    setCurrentPath(window.location.pathname)
  },[window.location])
  return (
    <div className='flex flex-col bg-[#999] sticky left-0 top-0 h-screen  pt-5 p-2'>

      <span className='text-white text-4xl cursor-pointer' onClick={() => setOpen(!open)}
      >
        {
          open ? <MdClose className={'text-white text-4xl ml-2 cursor-pointer float-right ' + (
            open ? 'rotate-180' : ''
          )} /> : <MdMenu className='text-white text-4xl ml-2 cursor-pointer' />
        }
      </span>

      <ul className={'flex flex-col gap-4 mt-5 '}>
        {
          menuItems.map((item, index) => (
            <Link key={index} className={'md:px-4 px-2 py-2 rounded-lg flex justify-center items-center duration-200 ' + (
              currentPath === item.link ? 'bg-blue-500' : 'bg-white hover:bg-blue-500 cursor-pointer'
            )
            + (
              open ? ' w-full ' : '  w-12 md:w-20'
            )
          }
              to={item.link}
            >
              <item.icon className='inline md:text-2xl text-lg' />
              { open && <span className={'text-black font-semibold text-lg ml-1 md:pr-24 ' + (
                open ? 'inline-block' : 'hidden '
              )}>{item.title}</span>}
            </Link>
          ))
        }
      </ul>
    </div>
  )
}
