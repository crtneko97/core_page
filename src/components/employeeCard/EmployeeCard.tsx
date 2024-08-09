import React from 'react'
import Image from 'next/image'
import employeeMap from '../../app/utils/employeeMap';
import './employeeCard.scss';

interface EmployeeCardProps {
    avatarKey: keyof typeof employeeMap;
    fullName: string;
    role: string;
    bio: string;
    phone: number;
    email: string;
    linkedin: string;
}

const EmployeeCard: React.FC<EmployeeCardProps>  = ({
    avatarKey,
    fullName,
    role,
    bio,
    phone,
    email,
    linkedin
}) => {
const avatarSrc = employeeMap[avatarKey];

  return (
    <div className='employee-card'>
        <Image src={avatarSrc} alt={`${fullName} avatar`} className='avatar'/>
        <h1>{fullName}</h1>
        <p>{role}</p>
        <p>{bio}</p>
        <p>{phone}</p>
        <p>{email}</p>
        <p>{linkedin}</p>
    </div>
  )
}

export default EmployeeCard