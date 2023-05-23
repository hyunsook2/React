import React, { Component } from "react";

class InputForm extends Component {
    state = {
        name:''
        ,telno:''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onMake(this.state);
        this.setState({
            name:''
            ,telno:''
        })
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input placeholder="이름" value={this.state.name} 
                    onChange={this.handleChange}  
                    name="name" />
                <input placeholder="전화번호" value={this.state.telno} 
                    onChange={this.handleChange} 
                    name="telno" />
                <button type="submit">등록</button>
            </form>
        )
    }
}
export default InputForm;