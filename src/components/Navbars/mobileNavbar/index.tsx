"use client"
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import RemoveIcon from '@mui/icons-material/Remove';
import { Collapse, List, ListItemButton } from '@mui/material';
import { Logos, Routes } from '@src/constant';
import { IMobileDrawerProps, IRoutesChild, IRoutes } from '@src/types';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const MobileDrawer = ({ drawerToggle, setDrawerToggle }: IMobileDrawerProps) => {
    const [tabOpenIndex, setTabOpenIndex] = useState<null | number>(null);
    const [childTabOpenIndex, setChildTabOpenIndex] = useState<null | number>(null);
    const router = useRouter();

    const handleTabClick = (index: number) => setTabOpenIndex((prevIndex: null | number) => (prevIndex === index ? null : index));

    const handleChildTabClick = (index: number) => setChildTabOpenIndex((prevIndex: null | number) => (prevIndex === index ? null : index));

    const sideNavCloseHandler = () => setDrawerToggle(false)

    return (
        <div className={`${drawerToggle && 'bg-[--shadow-color] lg:hidden fixed w-[100%] !h-[100vh]'}`}>
            <div className={`fixed top-0 left-0 w-[320px] !h-[100vh] bg-[--white] transition-all ease-in-out duration-500 overflow-y-auto ${drawerToggle ? 'translate-x-0' : 'translate-x-[-100%]'}`}>
                <div className="flex justify-between items-center pb-4 pt-6 px-4">
                    <CloseIcon fontSize="medium" className="" onClick={sideNavCloseHandler} />
                    <div className='w-20 sm:hidden ml-7'>
                        <Image src={Logos.verticalBlackLogo} alt='logo' width={100} height={100} className='w-[100%] object-contain' />
                    </div>
                </div>
                <List component="nav" className='space-y-3'>
                    {Routes.map((val: IRoutes, index: number) => (
                        <div key={index} className='w-full '>
                            <ListItemButton >
                                <div className={`flex items-center justify-between w-full border-b-2 border-[#CCD3D1] hover:text-[--primary-theme-color] pb-2 hover:border-[--primary-theme-color] transition-all ease-in-out duration-500 tracking-wider `} onClick={() => {
                                    if (val?.child) {
                                        handleTabClick(index)
                                    } else {
                                        router.push(val.path)
                                        sideNavCloseHandler()
                                    }
                                }} >
                                    <li className='!text-[20px] capitalize !font-semibold'>{val.name}</li>
                                    {val?.child && <span>{tabOpenIndex === index ? <ExpandLess /> : <ExpandMore />}</span>}
                                </div>
                            </ListItemButton>
                            {val?.child &&
                                <Collapse in={tabOpenIndex === index} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                        {val?.child?.map((childRoute: IRoutesChild, idx: number) => {
                                            return (
                                                <div key={idx}>
                                                    <ListItemButton>
                                                        <div className={`flex items-center justify-between w-full border-b-2 border-[#CCD3D1] hover:text-[--primary-theme-color] pb-[6px] hover:border-[--primary-theme-color] transition-all ease-in-out duration-500 tracking-wider ml-2`}  >
                                                            <li className='!text-[15px] capitalize !font-medium' onClick={() => {
                                                                handleChildTabClick(idx)
                                                                sideNavCloseHandler()
                                                            }}>{childRoute.name} </li>
                                                            {childRoute?.child && <div onClick={() => {
                                                                handleChildTabClick(idx)
                                                            }}>
                                                                <span>{childTabOpenIndex === idx ? <RemoveIcon /> : <AddIcon />}</span>
                                                            </div>}
                                                        </div>
                                                    </ListItemButton>
                                                    {childRoute?.child &&
                                                        <Collapse in={childTabOpenIndex === idx} timeout="auto" unmountOnExit>
                                                            <List component="div" disablePadding className='space-y-2'>
                                                                {childRoute?.child?.map((subChild: { name: string, path: string, image: string }, i: number) => {
                                                                    return (
                                                                        <ListItemButton key={i}>
                                                                            <div className={`w-full hover:text-[--black] tracking-wider ml-5`} onClick={() => {
                                                                                router.push(subChild.path)
                                                                                sideNavCloseHandler()
                                                                                setTabOpenIndex(null)
                                                                                setChildTabOpenIndex(null)
                                                                            }} >
                                                                                <li className={`flex items-center space-x-2 !text-sm capitalize text-[--gray]`}>
                                                                                    <Image src={subChild.image} alt='tech-logo' width={1000} height={1000} className='object-contain w-5' />
                                                                                    <span>{subChild.name}</span>
                                                                                </li>
                                                                            </div>
                                                                        </ListItemButton>
                                                                    )
                                                                })}
                                                            </List>
                                                        </Collapse>}
                                                </div>
                                            )
                                        })}
                                    </List>
                                </Collapse>
                            }
                        </div>
                    ))}
                </List>
            </div>
        </div >
    )
}

export default MobileDrawer