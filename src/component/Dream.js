import React from 'react'

class Dream extends React.Component{
    static defaultProps={
        dream:'중산층'
    }
    render(){
        return(
            <div>
                장래희망은 
                <b>{this.props.dream}</b>입니다.
            </div>
        );
    }
}
// Dream.defaultProps={
//     dream:'중산층'
// };
export default Dream;