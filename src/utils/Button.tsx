import React, { ButtonHTMLAttributes, DetailedHTMLProps, forwardRef } from 'react';
import cn from './cn';

type Tref=HTMLButtonElement
type Tvarient="solid"|"ghost"|"outline";
type TbuttonOptions={
    varient?:Tvarient
}
type Tbutton=DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,HTMLButtonElement>&TbuttonOptions
const Button = forwardRef<Tref,Tbutton>(({className,children, varient="solid",...rest},Ref) => {

    const getVarient=(varient:Tvarient)=>{
        switch (varient) {
            case "solid":
                return "btn-solid";
            case "outline":
                    return "btn-outline";
                    case "ghost":
                        return "btn-ghost"
            default:
                return "btn-solid";
        }
    }
    return (
        <button className={
            cn(
                getVarient(varient),
                className,
            )
        } {...rest} ref={Ref}>
            {children}
        </button>
    );
});

export default Button;