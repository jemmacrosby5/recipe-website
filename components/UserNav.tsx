import React from 'react'
import { UserCircle } from "@phosphor-icons/react/dist/ssr";

interface props {
    nickname: string | undefined
    }

export const UserNav = (props: props) => {
  return (
    <a href="/profile">
    <div className='flex gap-2 items-center'>
        <UserCircle size={24}/>
        <p>{props.nickname}</p>
    </div>
    </a>
  )
}

export default UserNav