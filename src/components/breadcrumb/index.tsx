"use client"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Breadcrumbs, capitalize } from "@mui/material";
import { IBreadcrumbProps } from '@src/types';
import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumb = ({ route, name }: IBreadcrumbProps) => {
    const pathname = usePathname()
    return (
        <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
        >
            <Link key="1" color="inherit" href="/">
                <div className="flex justify-center items-center text-[16px] font-semibold hover:text-[--primary-theme-color] hover:underline  transition-all ease-in-out duration-500 ">
                    <HomeOutlinedIcon /> <span>Home</span>
                </div>
            </Link>,
            <Link href={route}>
                <span className={`text-[16px] font-semibold hover:text-[--primary-theme-color] hover:underline transition-all ease-in-out duration-500 ${pathname === route && "!text-[--primary-theme-color] underline"}`}>{capitalize(name)}</span>
            </Link>
        </Breadcrumbs>
    )
}

export default Breadcrumb