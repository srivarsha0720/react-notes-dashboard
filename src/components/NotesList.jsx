import { useContext } from "react";
import {NotesContext} from "../context/NotesContext";
function NotesList(){
    const {notes,selected,setSelected}=useContext(NotesContext);
    return(
        <ul>
            {notes.map((note,index)=>(
                <li
                key={index}
                onClick={()=>setSelected(index)}
                style={{
                    cursor:"pointer",
                    background:selected===index?"yellow":"white"
                }}
                >
                    {note}
                </li>
            ))}
        </ul>
    );
}
export default NotesList;