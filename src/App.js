
import ReactDOM from "react-dom/client";
import './App.css';
import React from 'react';
import Forgot from './forgot';
import Login from "./login"
import {BrowserRouter , Router, Route,Routes} from 'react-router-dom';
import{getDocs} from 'firebase/firestore';
import SignUp from './signup';
import AddTodo from "./AddTodo";
import Todo from "./Todo";
import {
  collection,
  query,
  onSnapshot,
  doc,

  deleteDoc,
} from "firebase/firestore";
import { db } from "./config/firebase";



function App() {
  const [todos, setTodos] = React.useState([]);

  React.useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let todosArray = [];
      querySnapshot.forEach((doc) => {
        todosArray.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArray);
    });
    return () => unsub();
  }, []);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "todos", id));
  };

return(
  <div className="App">
   <BrowserRouter>
   <Routes>
    <Route exact path="/" element={<Login/>}/>
    <Route path="/signup" element={<SignUp/>}/>
    <Route  path="/forgot" element={<Forgot/>}/>
    <Route  path="/forgot" element={<Forgot/>}/>
    <Route path="/AddTodo" element={<AddTodo/>}/>
   </Routes>
   </BrowserRouter>
</div>
);
}

 



export default App;
