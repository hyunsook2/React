import React, {Component, Fragment} from "react";
import InputForm from "./component/Input";
import TelInfoList from "./component/TelInfoList";

class AppMain extends Component{
    id = 2
    state={
        infoBook: [
            {id:0,name:'카리나',telno:'010-1111-2222'}
            ,{id:1,name:'김우빈',telno:'010-2222-3333'}
        ],
        keyword:''
    }
    handleMake = (data)=>{
        const {infoBook} = this.state;
        this.setState({
            infoBook:infoBook.concat({id:this.id++,...data})
        })
    }
    handleDelete = (id) => {
        const {infoBook} = this.state;
        this.setState({
            infoBook:infoBook.filter(info=>info.id !==id)
        })
    }
    handleUpdate = (id,data)=>{
        const {infoBook} = this.state;
        this.setState({
            infoBook:infoBook.map( info => 
                id===info.id?{...info,...data}:info)
        })
    }
    handleChange = (e) => {
        this.setState({keyword:e.target.value});
    }
    render(){
        const {infoBook,keyword} = this.state;
        const filteredList = infoBook.filter(
            info => info.name.indexOf(keyword) !== -1
        );
        return(
            <Fragment>
                <InputForm onMake={this.handleMake} />
                <p>
                    <input 
                        placeholder="검색 할 이름을 입력하세요.." 
                        onChange={this.handleChange}
                        value={keyword}
                    />
                </p>
                <TelInfoList data={filteredList} 
                    onDelete={this.handleDelete} 
                    onUpdate={this.handleUpdate}
                />
            </Fragment>
        );
    }
}
export default AppMain;