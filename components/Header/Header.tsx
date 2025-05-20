'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'My Experience', href: '#experience' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' }
  ]
  const [activeLink, setActiveLink] = useState(window.location.hash)
  const socialLinks = [
    {
      name: 'linkedin',
      href: 'https://www.linkedin.com/in/hossam-halawa17011999?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
    },
    {
      name: 'twitter',
      href: '#'
    },
    {
      name: 'instagram',
      href: '#'
    }
  ]
  return (
    <header
      className={`top-0 fixed shadow-md py-7 w-full z-[9999] transition-colors duration-300 ${
        scrolled ? 'bg-[#1A1A1A]' : 'bg-[#1A1A1A80]'
      }`}
    >
      <div className='container'>
        <div className='flex justify-between items-center w-full'>
          <Image
            src={'/logo.svg'}
            alt='logo'
            width={100}
            height={100}
            className='object-contain'
          />
          <div className='flex items-center gap-x-4 p-2 border border-primary rounded-full'>
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                onClick={() => setActiveLink(link.href)}
                className={`${
                  activeLink === link.href
                    ? 'bg-primary text-white'
                    : 'hover:bg-[#3B395280] text-white'
                } px-[40px] py-[20px] rounded-full text-[20px] transition duration-300`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className='flex items-center gap-x-4'>
            {socialLinks.map((social, index) => (
              <Link
                key={index}
                href={social.href}
                className='flex justify-center items-center bg-[#3B395280] hover:bg-primary rounded-full w-[42px] h-[42px] transition duration-300'
              >
                <Image
                  src={`/${social.name}.svg`}
                  alt={social.name}
                  width={20}
                  height={20}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
