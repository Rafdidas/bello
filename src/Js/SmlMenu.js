import React from "react";
import { Link } from "react-router-dom";

const SmlMenu = ({ navCategory, cateMenu }) => {
    const filterCate = cateMenu.find((category) => category.mid === navCategory);
    
    return(
        <ul className="sml_menu">
            
            {filterCate && filterCate.sml ?
                filterCate.sml.map(function(item, index){
                    return(
                        <li key={index}>
                            <Link to={'/'}>{ item }</Link>
                        </li>
                    )
                })
                : null
            }
            
        </ul>
    )
}

export default SmlMenu;