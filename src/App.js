import { IoCreateOutline } from 'react-icons/io5';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { GrPowerReset } from 'react-icons/gr';
import './fonts/American Retro.ttf';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="main">
        <div className="container">
          <h1>Todo list</h1>
          <div className="wrapp">
            <div className="myInput">
              <input
                className="inputText"
                type="text"
                placeholder="header..."
              />
              <button className="create">
                <IoCreateOutline />
              </button>
            </div>
            <div className="myInput">
              <input
                className="inputText"
                type="text"
                placeholder="my task..."
              />
              <button className="create">
                <IoCreateOutline />
              </button>
            </div>
            <div className="btnReset">
              <button className="btn">
                <GrPowerReset />
              </button>
            </div>
            <div className="tasks">
              <div className="task">
                <input
                  className="inputRadio"
                  type="radio"
                  value="1"
                  name="nameradio"
                />
                <div className="taskText">
                  <div>Header</div>
                  <div>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  </div>
                </div>
                <button className="delete">
                  <RiDeleteBin6Fill />
                </button>
              </div>
              <div className="task">
                <input
                  className="inputRadio"
                  type="radio"
                  value="1"
                  name="nameradio"
                />
                <div className="taskText">
                  <div>Header</div>
                  <div>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  </div>
                </div>
                <button className="delete">
                  <RiDeleteBin6Fill />
                </button>
              </div>
              <div className="task">
                <input
                  className="inputRadio"
                  type="radio"
                  value="1"
                  name="nameradio"
                />
                <div className="taskText">
                  <div>Header</div>
                  <div>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  </div>
                </div>
                <button className="delete">
                  <RiDeleteBin6Fill />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
