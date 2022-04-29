import * as React from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";
import { useState } from 'react'
import axios from "axios";
import "./Canvas.css";
import { NavLink } from "react-router-dom"
import swal from 'sweetalert';

const styles = {
  border: "0.0625rem solid #9c9c9c",
  borderRadius: "0.25rem"
};



const Canvas = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prediction: "",
      predictionProgress: '',
			predBtnCountdown: 0,
      email: "",
      fullname: "",
      btn_state: false
    }
    this.canvas = React.createRef(this);
    this.fileUploadHandler = this.fileUploadHandler.bind(this);
  }

  handleEmailChange = evt => {
    this.setState({ email: evt.target.value });
  };

  handleNameChange = evt => {
    this.setState({ fullname: evt.target.value });
  };

  handleSubmit = () => {
    const { email, fullname } = this.state;
    const fd = new FormData();
    fd.append("version", '2.0')
    fd.append("email", email)
    fd.append("fullname", fullname)
    axios.post("mintfont/", fd, {
        headers: {
            "content-type": "multipart/form-data"
        }
    }).then((result) => {
      swal("Nfont Sent!", "Your Font has been minted successfully and Check your mail, Use it Wisely", "success");
      console.log(result.text);
    },
    (error) => {
      swal("Not Sent!", "Sorry About That, My Fault!", "failure");
      console.log(error.text);
    });
  };


  async fileUploadHandler(img, name, email) {

    this.setState({
        predictionProgress: 'Your Font is being Generated, please wait...',
    })

    function dataURItoBlob(dataURI) {
        // convert base64/URLEncoded data component to raw binary data held in a string
        const arr = dataURI.split(',')
        const mime = arr[0].match(/:(.*?);/)[1]
        const bstr = atob(arr[1])
        let n = bstr.length
        const u8arr = new Uint8Array(n)
        while (n) {
          u8arr[n - 1] = bstr.charCodeAt(n - 1)
          n -= 1 // to make eslint happy
        }
        return new File([u8arr], { type: mime })
    }

    // Get canvas from html
    // var canvasInput = document.getElementById("react-sketch-canvas");

    // Convert canvas image to Base64
    // var canvasImg = canvasInput.toDataURL();

    // Convert the Base64 image to binary
    var file = dataURItoBlob(img);
    const fd = new FormData();
    fd.append("image", fd);
    fd.append("file", file)
    fd.append("version", '2.0')
    fd.append("email", email)
    fd.append("fullname", name)

    var response = await axios.post("handwriting/", fd, {
        headers: {
            "content-type": "multipart/form-data"
        }
    });
    

    this.setState({
        prediction: response.data,
        status: response.status,
        predictionProgress: '',
    });

    // console.log(this.state.prediction)

    
    const secCountdown = function () {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve()
            }, 1000)
        })
    }

    async function init() {
        try {
            await secCountdown()
        }
        catch (err) {
            console.log('error: ', err)
        }
    }

    let time = 20

    this.setState({
        predBtnCountdown: time
    })

    do {
        await init()
        time--
        this.setState({
            predBtnCountdown: time
        })
        
    } while(time > 0)
    
}

  render() {
    const disablePredBtn = this.state.predictionProgress === '' 
			&& this.state.predBtnCountdown === 0 ? false : true

		const predCountdown = this.state.predBtnCountdown === 0 ? '' : `: ${this.state.predBtnCountdown}`
    const { email, fullname } = this.state;
    const isEnabled = email.length > 0 && fullname.length > 0;
    

    return (
      <div>
        <ReactSketchCanvas
          ref={this.canvas}
          strokeWidth={16}
          strokeColor="black"
          style={styles}
          width="300px"
          height="300px"
        />
        <div>
        <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Enter email"
          value={this.state.email}
          onChange={this.handleEmailChange}
        />
        <input
          type="fullname"
          placeholder="Enter your Name"
          value={this.state.fullname}
          onChange={this.handleNameChange}
        /> 
     
      </form> 
        </div>
        <button
          type="submit"
					name="action"
					disabled={disablePredBtn || !isEnabled}
          onClick={() => {
            this.canvas.current.exportImage("svg")
              .then(data => {
                this.fileUploadHandler(data, this.state.fullname, this.state.email)
                this.setState({btn_state: true})
              })
              .catch(e => {
                console.log(e);
              });
          }}
        >
          Generate Font{predCountdown}
        </button>
        <button
          onClick={() => {
            this.canvas.current.resetCanvas();
          }}
        >
          Reset
        </button>
        <button
          onClick={() => {
            this.canvas.current.undo();
          }}
        >
          Undo
        </button>
        <div>
        {this.state.predictionProgress ? (
					<div className="waiting-for-prediction">
						<h5>{this.state.predictionProgress}</h5>
						<div className="progress">
							<div className="indeterminate blue darken-1"></div>
						</div>
					</div>
				) : (
					<img style={{height: '22px', marginLeft: '20px',marginTop: '40px', marginBottom: '20px'}} src={`data:image/jpeg;base64,${this.state.prediction}`}/>
					)}
          </div>
        
        <div>
        <button
        disabled={!this.state.btn_state && !disablePredBtn}
        onClick={this.handleSubmit}
        >
          Mint Font
        </button>
        </div>
        
        <div className="mt-3">
					<button>
					<NavLink to={'/services/payment'} className="btn waves-effect waves-light blue darken-1 submit-prediction">
						{'Proceed To Payment'}
					</NavLink>
					</button>
				</div>
      </div>
    );
  }
};
export default Canvas