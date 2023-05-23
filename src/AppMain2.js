import React, { Component, Fragment } from 'react'
import Dream from './component/Dream';
import Car from './component/Car';
import Counter from './component/Counter';

class AppMain extends Component{
    render(){
        return(
            <Fragment>
                아이1:<Dream />
                아이2:<Dream dream="소방관"/>
                어른1:<Car car="포르쉐" />

                <Counter />
            </Fragment>
        );
    }
}
export default AppMain;