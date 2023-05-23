import React, { Component } from "react";
import TelInfo from "./TelInfo";

class TelInfoList extends Component {
    static defaultProps={
        data:[],
        onDelete: () => console.warn('onDelete is not defined'),
        onUpdate: () => console.warn('onUpdate is not defined')
    }
    
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.data !== this.props.data;
    }

    render(){
        console.log('render TelInfoList');
        const {data,onDelete,onUpdate}=this.props;
        const list = data.map(
            info => (
                <TelInfo 
                    key={info.id} 
                    info={info} 
                    onDelete={onDelete}
                    onUpdate={onUpdate}
                />
            )
        );

        return(
            <div>{list}</div>
        )
    }
}
export default TelInfoList;