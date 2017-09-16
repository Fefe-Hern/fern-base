import React from 'react';

class UserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch('/users',
            {
                method: "POST",
                body: JSON.stringify({
                    username: this.state.value
                }),
                headers: {
                    "Content-Type": "application/json"
                },
            })
            .then((res) => {
                console.log(res);
            }, (err) => {

            });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="username" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}

export default UserForm;