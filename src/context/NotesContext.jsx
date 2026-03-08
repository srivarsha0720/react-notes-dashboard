import { createContext,useState,useEffect } from "react";
export const NotesContext=createContext();
const NotesProvider=({children})=>{
    const [notes,setNotes]=useState(()=>{
        const saved=localStorage.getItem("notes");
        return saved ? JSON.parse(saved) : [];
    });
    const [selected,setSelected]=useState(null);
//    useEffect(()=>{
//     const saved=localStorage.getItem("notes");
//     if (saved){
//         setNotes(JSON.parse(saved));
//     }
//    },[]);
       useEffect(()=>{
        localStorage.setItem("notes",JSON.stringify(notes));
    },[notes]);
    const addNote=(text)=>{
        setNotes([...notes,text]);
    };
    return(
        <NotesContext.Provider value={{notes,addNote,selected,setSelected}}>
            {children}
        </NotesContext.Provider>
    );
};
export default NotesProvider;