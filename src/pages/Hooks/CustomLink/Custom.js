import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomLink({ children, to }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    return (
      <div>
        <Link
          style={{backgroundColor: match ? '#f8a428':"transparent" ,color: match ? "white" : "white", textDecoration: match ? "none" : "none" , height: match ? "50px" : "50px" , width: "120px", padding:"15px 10px" }}
          to={to}          
        >
          {children}
        </Link>
        
      </div>
    );
  }
  export default CustomLink;