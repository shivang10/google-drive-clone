import React from "react";
import AddIcon from '@material-ui/icons/Add';
import "../../styles/newFile.css";

const NewFile = () => {
    return (
        <div className="newFile">
            <div className="newFile__container">
                <AddIcon/>
                <p>New</p>
            </div>
        </div>
    )
}

export default NewFile;