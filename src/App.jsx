import NotesProvider from "./context/NotesContext";
import NotesInput from "./components/NotesInput";
import NotesList from "./components/NotesList";
import NotesCount from "./components/NotesCount";
function App(){
    return(
        <NotesProvider>
            <h1>Notes Dashboard</h1>
            <NotesInput/>
            <NotesCount/>
            <NotesList/>
        </NotesProvider>
    );
}
export default App;