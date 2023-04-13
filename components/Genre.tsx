import React from 'react'

interface GenreProps{
    title: String
}

const Genre: React.FC<GenreProps> = ({title}) => {
  return (
    <p className='bg-primaryvariant1 rounded-[4px] text-white text-[12px] font-opensans px-[10px] py-[4px] w-fit'>{title}</p>
  )
}

export default Genre
