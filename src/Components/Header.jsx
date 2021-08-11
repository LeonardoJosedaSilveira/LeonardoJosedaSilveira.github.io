import React from 'react';
import ProfilePicture from './ProfilePicture'
import ProfileDescription from './ProfileDescription';

export default function Header() {
  return (
    <div className='Header'>
      <ProfilePicture />
      <ProfileDescription />
    </div>
  )
}
