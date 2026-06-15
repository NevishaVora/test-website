import { ReactNode } from "react"

// Constant data..
export interface IRoutesChild {
    name: string,
    child: {
        name: string,
        path: string,
        image: string
    }[]
}

export interface IRoutes {
    name: string
    path: string,
    child?: IRoutesChild[] | undefined
};

export interface IFeaturesData {
    icon: ReactNode,
    name: string,
    details: string
}

export interface IFooterRoutes {
    name: string,
    path: string,
}

export interface IHireDeveloperField {
    label: string,
    value: string
}

export interface IServiceData {
    name: string
    details: string,
    image: string
}

export interface IInformationData {
    email: string,
    address: string,
    addressLink: string,
    addressIframLink: string,
    contactNumber: string,
}

export interface ITechnologiesChild {
    id: number,
    image: string,
    name: string,
}

export interface ITechnologies {
    name: string,
    label: string,
    child: ITechnologiesChild[]
}

export interface IWhoWeAreData {
    image: ReactNode,
    title: string,
    details: string
}

export interface IStepsData {
    image: ReactNode,
    title: string,
    details: string
}

export interface IAchievementData {
    icons: ReactNode,
    digit: string,
    title: string,
}

export interface ITechnologiesPagesList {
    title: string,
    details: string
}

export interface ITechnologiesPagesData {
    name: string,
    label: string,
    details: string,
    list: ITechnologiesPagesList[]
}

export interface ITeamData {
    id: string;
    name: string;
    image: string;
    role: string;
    description: string;
    skills: {
        professionalSkills: string[];
        additionalSkills: string[];
    };
    languages: {
        name: string;
        level: string;
        percentage: number;
    }[];
    experience: {
        companyName: string;
        startDate: string;
        endDate: string;
        role: string;
        description: string;
    }[];
    education: {
        collageName: string,
        degree: string,
        startDate: string,
        endDate: string,
    },
    certifications: {
        id: string;
        title: string,
        image: string,
        description: string,
        organization: string,
        startDate: string,
        endDate: string,
    }[] | null,
    portfolios: {
        projectName: string,
        industry: string,
        url: string | null,
        portfolioImages: string[] | [],
        technologies: string[] | [],
        description: string,
        role: string,
        startDate: string | null,
        endDate: string | null,
    }[]
}

// Mobile Drawer Components
export interface IMobileDrawerProps {
    drawerToggle: boolean,
    setDrawerToggle: (drawerToggle: boolean) => void
}

// About Rules Components
export interface IBannerProps {
    route: string,
    name: string,
    title: string
}

// Breadcrumb Components
export interface IBreadcrumbProps {
    route: string,
    name: string,
}

// Service Page
export interface IServiceProps {
    params: { technology: string }
}

export interface IImageSliderProps {
    data: File[] | string[],
    slideIndex: number,
    setSlideIndex: (slideIndex: number) => void,
    setShowSlider: (showSlider: boolean) => void,
}
