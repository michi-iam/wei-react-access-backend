import { Link } from "react-router-dom";



export default function MyLink(to, text, classNames=null) {
    if(! classNames){ classNames="btn btn-link text-decoration-none" }else{
        classNames="text-decoration-none " + classNames;
    }
    return <Link className={ classNames } to={ to }>{ text }</Link>
}
