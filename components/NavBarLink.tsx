import { title } from 'process'
import React from 'react'
import { NavBarLinkProp } from '@/types'
import { link } from 'fs'

const NavBarLink = ({title, linkstyles, linktype} : NavBarLinkProp) => {
  return (
    <a  className= {`${linkstyles}`} href="#">{title}</a>
  )
}

export default NavBarLink