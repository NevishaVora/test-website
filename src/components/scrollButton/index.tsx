"use client";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useState } from "react";

const isBrowser = () => typeof window !== 'undefined'
const scrollToTop = () => {
    if (!isBrowser()) return;
    if (typeof window !== 'undefined') {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
};

const ScrollButton = () => {
    const [visible, setVisible] = useState<boolean>(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 250) {
            setVisible(true)
        }
        else if (scrolled <= 250) {
            setVisible(false)
        }
    };
    if (typeof window !== 'undefined') {
        window.addEventListener('scroll', toggleVisible);
    }

    return (
        <button onClick={scrollToTop} className={visible ? 'fixed flex justify-center items-center cursor-pointer rounded-full bg-[--primary-theme-color] text-white hover:bg-[--black] p-1 animate-bounce transition-all duration-500 right-[15px] bottom-5' : "hidden transition-none"}>
            <KeyboardArrowUpIcon fontSize='large' />
        </button>
    )
}

export default ScrollButton
export { scrollToTop };
