
"use strict"
import React from "react"
import Link from "next/link"
import '../../styles/main.scss';
import {Link as NextLink} from '../../routes'
class Header extends React.Component{
    render(){
        debugger;
        const title = this.props.title
        return(
        <React.Fragment>
            <p>{title}</p>
            {this.props.children}
        <Link href="/"><a style={{fontSize:'20px'}}>Home</a></Link>

        <Link href="/about"><a>About</a></Link>
        
        <Link href="/blogs"><a>Blogs</a></Link>
        
        <Link href="/cv"><a>Curriculum</a></Link>
        
        <Link href="/portfolios"><a>Portfolios</a></Link>
        <NextLink route="/test/1">Test 1 </NextLink> 
        <NextLink route="test" params ={{id:'2'}}>Test 2 </NextLink>      
        <style jsx>{`
        a {
         font-size:20px;
        };
        .CustomClass{
            color:red;
        }
      `}</style>
        </React.Fragment>     
        )
    }
}
export default Header;