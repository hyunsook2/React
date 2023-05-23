import React, { Fragment } from "react";
import ExState from "./component/ExState";

function App(){
    //구조분해 할당
    const arr=[1,2,3,4];
    const [x,y,...z]=arr;
    const [a,b,,c=10]=arr;
    console.log(x,y,z);
    console.log(a,b,c);
    const user={name:'hong',age:10};
    const {name,age}=user;
    const {name:na,age:ag,hoo='none'}=user;
    console.log(name,age);
    console.log(na,ag,hoo);
    const work=[
        {id:1,content:'html',complete:true},
        {id:2,content:'java',complete:false},
        {id:3,content:'css',complete:true},
        {id:4,content:'python',complete:false},
    ]
    const [,{content},{id},{complete}] = work;
    console.log(content,id,complete);
    return(
        <Fragment>
            <ExState />
        </Fragment>
    );
}
export default App;