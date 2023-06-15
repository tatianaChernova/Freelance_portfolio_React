import "./styles.css";
import directLinkArrow from "./directLink.png"

const BtnDirectLink = ({link}) => {
    return (
        <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
                        <img className="arrow" src={directLinkArrow} alt="" />
                        Link
                    </a>
    );
}
 
export default BtnDirectLink;