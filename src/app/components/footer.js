// tells the compiler that this is a client side file
"use client"

//import statements
import {usePathname} from 'next/navigation';
import Link from 'next/link'

export default function Footer() {
    /*
    This function is responsible for rendering the footer of the website.
    Contains the home, insights, resources, and community links. It utilizes svg icons and
    the usePathname hook to determine the current page.
    */

    let path = usePathname().slice(1);
    
    //svg icons for the footer
    let elements = {
        home: {svg : <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 21V13.6C9 13.0399 9 12.7599 9.109 12.546C9.20487 12.3578 9.35785 12.2049 9.54601 12.109C9.75993 12 10.04 12 10.6 12H13.4C13.9601 12 14.2401 12 14.454 12.109C14.6422 12.2049 14.7951 12.3578 14.891 12.546C15 12.7599 15 13.0399 15 13.6V21M2 9.5L11.04 2.72C11.3843 2.46181 11.5564 2.33271 11.7454 2.28294C11.9123 2.23902 12.0877 2.23902 12.2546 2.28295C12.4436 2.33271 12.6157 2.46181 12.96 2.72L22 9.5M4 8V17.8C4 18.9201 4 19.4802 4.21799 19.908C4.40974 20.2843 4.7157 20.5903 5.09202 20.782C5.51985 21 6.0799 21 7.2 21H16.8C17.9201 21 18.4802 21 18.908 20.782C19.2843 20.5903 19.5903 20.2843 19.782 19.908C20 19.4802 20 18.9201 20 17.8V8L13.92 3.44C13.2315 2.92361 12.8872 2.66542 12.5091 2.56589C12.1754 2.47804 11.8246 2.47804 11.4909 2.56589C11.1128 2.66542 10.7685 2.92361 10.08 3.44L4 8Z" stroke={path == "" ? "#FFFFFF": "#DB999E"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>, link: "./"},
        insights : {svg : <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V3M6 15L10 11L14 15L20 9M20 9V13M20 9H16" stroke={path == "insights" ? "#FFFFFF": "#DB999E"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>, link: "./insights"},
        resources : {svg : <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 19V6.2C4 5.0799 4 4.51984 4.21799 4.09202C4.40973 3.71569 4.71569 3.40973 5.09202 3.21799C5.51984 3 6.0799 3 7.2 3H16.8C17.9201 3 18.4802 3 18.908 3.21799C19.2843 3.40973 19.5903 3.71569 19.782 4.09202C20 4.51984 20 5.0799 20 6.2V17H6C4.89543 17 4 17.8954 4 19ZM4 19C4 20.1046 4.89543 21 6 21H20M9 7H15M9 11H15M19 17V21" stroke={path == "resources" ? "#FFFFFF": "#DB999E"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>, link: "./resources"},
        community : {svg : <svg className = "" fill={path == "community" ? "#FFFFFF": "#DB999E"}  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3.5 8a5.5 5.5 0 118.596 4.547 9.005 9.005 0 015.9 8.18.75.75 0 01-1.5.045 7.5 7.5 0 00-14.993 0 .75.75 0 01-1.499-.044 9.005 9.005 0 015.9-8.181A5.494 5.494 0 013.5 8zM9 4a4 4 0 100 8 4 4 0 000-8z"/><path d="M17.29 8c-.148 0-.292.01-.434.03a.75.75 0 11-.212-1.484 4.53 4.53 0 013.38 8.097 6.69 6.69 0 013.956 6.107.75.75 0 01-1.5 0 5.193 5.193 0 00-3.696-4.972l-.534-.16v-1.676l.41-.209A3.03 3.03 0 0017.29 8z"/></svg>, link: "./community"}
    }

    // each individual footer component comes from this component
    function FooterComponenet(props){
        let link = props.link.slice(2)
        let style = (path == link) ? " text-white" : "text-[#DB999E]"

        return (<Link href={props.link} className= {"flex-col gap-2 " + style} >
                    {/* <Image className = "m-auto" alt={props.name} width={24} height={24}></Image> */}
                    <div className = "m-auto w-16">{props.src}</div>
                    <div className = "text-xs text-center" >{props.name}</div>
                </Link>)
    }

    return (
        <div className="flex justify-around bottom-0 pb-8  w-full">
                <FooterComponenet link = {elements.home.link} src={elements.home.svg} name = "Home" />
                <FooterComponenet link = {elements.insights.link} src={elements.insights.svg} name = "Insights" />
                <FooterComponenet link = {elements.resources.link} src={elements.resources.svg} name = "Resources" />
                <FooterComponenet link = {elements.community.link} src={elements.community.svg} name = "Community"/>
        </div>
    );
    }