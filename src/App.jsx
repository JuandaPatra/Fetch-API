import React from "react";
import { Container, Image } from "react-bootstrap";
import axios from "axios";
import "./App.css"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    axios.get(`https://run.mocky.io/v3/97eb6747-589a-4b7b-9111-62bbd213492b`).then((res) => {
      // console.log(res.data.result);
      this.setState({ data: res.data.result });
    });
  }
  render() {
    return (
      <div className="App">
        <div className="flex">
            {this.state.data.map((item, index) => {
              return (
                <div  className="flex-item" key={index}>
                  <div>
                    <Image src={item.image} style={{ width: "120px" }} rounded />
                  </div>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.content}</p>
                  </div>
                </div>
              );
            })}
          {/* <div style={{paddingTop:"1vh", paddingBottom:"1vh",}} className="flex-cont">
          </div> */}
        </div>
      </div>
    );
  }
}
export default App;
