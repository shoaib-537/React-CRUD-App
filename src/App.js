import "./App.css";
import Create from "./components/create/Create";
// import Read from "./components/read/Read";
function App() {
  return (
    <div className="main">
      <div>
        <h3>Crud Operations</h3>
        <Create/>
      </div>
      {/* <div style={{marginTop:20}}>
        <Read />
      </div> */}
    </div>
  );
}

export default App;
