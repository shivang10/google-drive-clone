import React,{useState, useEffect} from "react";
import {db} from "../../firebase";
import "../../styles/filesView.css";

import FileItem from "./FileItem";
import FileCard from "./fileCard";

const FilesView = () => {

    const [files, setFiles] = useState([]);

    useEffect(() => {
        db.collection('myFiles').onSnapshot(snapshot => {
            setFiles(snapshot.docs.map(doc => ({
                id: doc.id,
                item: doc.data()
            })))
        })
    }, []);

    return (
        <div className="filesView">
            <div className="filesView__row">
                {
                    files.slice(0, 5).map(({id, item}) => (
                        <FileCard name={item.caption} />
                    ))
                }
            </div>
            <div className="filesView__titles">
                <div className="filesView__titles--left">
                    <p>Name</p>
                </div>
                <div className="filesView__titles--right">
                    <p>Last Modified</p>
                    <p>Files size</p>
                </div>
            </div>
            {
                files.map(({id, item}) => (
                    <FileItem 
                        id={id} caption={item.caption}
                        timestamp={item.timestamp}
                        fileUrl={item.fileUrl}
                        size={item.size}
                    />
                ))
            }
        </div>
    )
}

export default FilesView