
"use strict"
import React from "react"
import Link from "next/link"
import '../../styles/main.scss';
class Header extends React.Component{
    render(){
        debugger;
        const title = this.props.title
        return(
        <React.Fragment>
            <p>{title}</p>
            {this.props.children}
            <p className="CustomClass">P style</p>
            <p className="CustomClassFromFile">P style from a class</p>
        <Link href="/"><a style={{fontSize:'20px'}}>Home</a></Link>
        <Link href="/about"><a>About</a></Link>
        <Link href="/blogs"><a>Blogs</a></Link>
        <Link href="/cv"><a>Curriculum</a></Link>
        <Link href="/portfolios"><a>Portfolios</a></Link>    
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