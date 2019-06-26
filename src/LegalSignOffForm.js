import React from 'react';

class LegalSignOffForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {value : ''}
	}

    async saveLegalSignOff() {
        var url = 'https://segl-credit-func.azurewebsites.net/api/HttpTriggerLegalSignOff'
        var body = JSON.stringify({client_name: 'test'})
        console.log(body)
        console.log(url)
		var response = await fetch(url, {
            method: 'POST',
            mode: 'cors',
            body: body
		})
        console.log(response)
        if (response.ok === true) {
            this.setState({value: "upload successful!"});
        } else {
            this.setState({value: "upload failed!"});
        }
    }

    submitFormHandler = event => {
        event.preventDefault();
        this.saveLegalSignOff();
    }
      
      render() {
        return (
            <div>      
              <form onSubmit={this.submitFormHandler}>
                <div>
                  <input type="text" name="name" ref="name" />
                </div>
                <div>
                  <input type="text" name="name" ref="name" />
                </div>
                <div>
                  <input type="text" name="name" ref="name" />
                </div>
                <button> 
                    Submit
                </button>
              </form>
              <p>{this.state.value}</p>
            </div>
        );
      }
}

export default LegalSignOffForm;
