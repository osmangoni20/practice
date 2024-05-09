import React, { MouseEvent, ReactNode, createContext, useContext, useRef } from 'react';
import cn from './cn';
import { createPortal } from 'react-dom';
const ModalContext = createContext<TModalContext | null>(null)

type Modal = {
    isOpen: boolean,
    onClose: () => void,
    children: ReactNode
}
type TModalContext = {
    onClose: () => void;
}
type TcloseButton = {
    children?: ReactNode
}
type TMdelHeader = TcloseButton
const Modal = ({ isOpen, onClose, children }: Modal) => {

    const contentRef = useRef<HTMLDivElement>(null)
    const HandleOutClose = (e: MouseEvent) => {
        if (!contentRef.current?.contains(e.target as Node)) {
            onClose()
        }
    }
    return createPortal(<ModalContext.Provider value={{ onClose }}>
        <div onClick={HandleOutClose} className={cn("fixed inset-0 invisible flex justify-center items-center bg-gray-500/75 ",
            { "visible": isOpen }
        )}>
            <div ref={contentRef} className='relative bg-white w-full max-w-sm rounded p-4'>
                <Modal.Header>
                    <h2>New Modal Action</h2>
                    <Modal.CloseButton></Modal.CloseButton>
                </Modal.Header>

                {children}
            </div>
        </div>
    </ModalContext.Provider>, document.getElementById("portal") as Element)
};

export default Modal;

const CloseButton = ({ children }: TcloseButton) => {
    const { onClose } = useContext(ModalContext) as TModalContext
    return (
        <button onClick={onClose} className='absolute right-1 top-1'>
            {
                children ? children :
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    className='size-5 p-0.5 bg-red-600 rounded-sm text-white'
                     fill="none" viewBox="0 0 24 24" strokeWidth="2.5"
                      stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round"
                 d="M6 18 18 6M6 6l12 12" />
                    </svg>

            }

        </button>
    )
}

const Header = ({ children }: TMdelHeader) => {
    return (
        <div className='flex justify-center items-center p-2 mb-3'>
            {children}
        </div>
    )
}
Modal.Header = Header
Modal.CloseButton = CloseButton