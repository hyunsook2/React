import React from 'react'
import {Hello,Hello2} from './component/Hello';
import Wrapper from './component/Wrapper';
import './AppMain.css';

function App(){
    const name = 'React';
    const style = {
        backgroundColor:'black',
        color: 'aqua',
        fontSize:24,
        padding: '1rem'
    }
    return(
        <Wrapper>
            {/* 여러줄 주석 */}
            <Hello name='react'
                color='red'
                //한 줄 주석 
            />
            <Hello2 color='orange'/>
            <div style={style}>{name}</div>
            <div className='test-div'></div>
        </Wrapper>
    );
}
export default App;