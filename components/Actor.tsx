import React from 'react'
import Image from 'next/image';

interface ActorProps {
    avatar: string;
    realName: string;
    movieName: string;
    key: number;
}

const Actor: React.FC<ActorProps> = ({avatar, realName, movieName,key}) => {
  return (
    <div key={key} className='flex items-center'>
        <Image alt="Actor Image" src={avatar} className='w-[62px] h-[62px] object-cover rounded-full'/>
        <div className='flex flex-col ml-[16px]'>
            <p className='text-white font-bold mb-[4px] whitespace-nowrap overflow-hidden'>{realName}</p>
            <p className='text-text whitespace-nowrap'>{movieName}</p>
        </div>
    </div>
  )
}

export default Actor