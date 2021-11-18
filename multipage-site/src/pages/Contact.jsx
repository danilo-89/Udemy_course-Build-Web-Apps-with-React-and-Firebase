import { useLocation } from "react-router-dom";

const Contact = () => {

    const queryString = useLocation().search;
    console.log(queryString);

    const queryParams = new URLSearchParams(queryString);
    const name = queryParams.get("name");


    return (
        <div>
            <h2>Hey {name}, contact us!</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur a placeat iste debitis voluptate qui assumenda labore necessitatibus illo ab. Sapiente omnis ipsam autem! Facere.</p>
        </div>
    );
}

export default Contact;