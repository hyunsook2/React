import React from "react";

class Counter extends React.Component{
    state = {
        number : 0,
        error : false
    }
    constructor(props){
        super(props);
        console.log('>>>constructor');
    }
    componentDidMount(){
        console.log('>>>componentDidMount');
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log('>>>shouldComponentUpdate',nextProps,nextState);
        if(nextState.number%5===0) return false;
        return true;
    }
    componentDidUpdate(prevProps,prevState){
        console.log('>>>componentDidUpdate',prevProps,prevState);
    }
    componentDidCatch(error,info){
        console.log('>>> componentDidCatch',error,info);
        this.setState({
            error:true
        });
    }

    handleIncrease=()=>{
        const {number}=this.state;
        this.setState({
            number : number+1
        });
    }
    handleDecrease=()=>{
        this.setState(
            ({number})=>({
                number:number-1
            })
        )
    }
    render(){
        console.log('>>> render');
        if(this.state.error) return (<h1>!!ERROR!!</h1>)
        return(
            <div>
                <h1>Counter</h1>
                <div>value:{this.state.number}</div>
                {this.state.number===7 && <MakeError/>}
                <button onClick={this.handleIncrease}>△</button>
                <button onClick={this.handleDecrease}>▽</button>
            </div>
        )
    }

}
const MakeError=()=>{
    throw(new Error('Make the error'));
}
export default Counter;