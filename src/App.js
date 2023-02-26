import { Route, Routes } from "react-router-dom";
import Main from "./pages/main/Main";
import HistoryTodo from "./pages/history/HistoryTodo";
import './App.css'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/history' element={<HistoryTodo/>}/>
      </Routes>
    </div>
  );
}

export default App;
