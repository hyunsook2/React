import React from 'react'

function Hello(props){
    return(
        <div style={{color:props.color}}>
            <b>Hello</b>World!
            <p>안녕하세요. {props.name}</p>
        </div>
    );
}
function Hello2({name,color}){
    return(
        <div style={{color}}>안녕하세요.{name}</div>
    );
}
Hello2.defaultProps={ name : '무명' }

export {Hello,Hello2};