import React from "react";

interface InputProps {
    id : string;
    onChange : any;
    value: string;
    label: string;
    type?: string;
    placeholder: string;
}

const Input: React.FC<InputProps> = ({
    id,
    onChange,
    value,
    label,
    type,
    placeholder,
}) => {
    return (
        <div className="flex flex-col mb-[16px] w-full">
            <label className="text-[14px] text-white font-opensans mb-[8px]" htmlFor={id}>
                {label}
            </label>
            
            <input 
                id={id}
                value={value}
                type={type}
                onChange={onChange}
                placeholder={placeholder}
                className="rounded-[10px] font-opensans text-[16px] bg-primaryvariant1 p-[16px] text-white placeholder:text-placeholder focus:outline-[1px] focus:outline-white focus:shadow-[0_0_15px_rgba(255,255,255,0.2)]"
            />
        </div>
    )
}

export default Input;