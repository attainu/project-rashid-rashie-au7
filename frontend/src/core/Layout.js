import React from 'react';
import Search from "./Search"
// import "../style.css";
import SlideShow from '../components/SlideShow'

    const Layout = ({
        title='Shop-in',
        description='Desc',
        children,
        className
         }) => (
       <div className="mb-2" > 
                 <SlideShow/>
            <div className={className}>{children}</div>  
           
        </div>
    ); 

export default Layout;