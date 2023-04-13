import React from 'react'

interface ButtonProps {
    type: string;
    label: string;
}

const Button: React.FC<ButtonProps> = ({
    type,
    label
}) => {
  return (
    <button className={`rounded-[10px] flex-1 ms:flex-initial px-[32px] py-[16px] text-[16px] font-opensans text-white font-bold uppercase ${type === 'primary'? 'primary-button' : 'secondary-button'}`}>
        {label}
    </button>
  )
}

export default Button