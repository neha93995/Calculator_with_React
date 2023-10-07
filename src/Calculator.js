import './calculator.css'
import {useState} from 'react';
import {SiPowerpages} from 'react-icons/si'

function Calculator()
{

    const [symbol, setSymbol] = useState([{val:"C",type:'allClear'},{val:"del",type:'delete'},{val:"%",type:'num'},{val:"/",type:'num'},{val:7,type:'num'},{val:8,type:'num'},{val:9,type:'num'},{val:'*',type:'num'},{val:4,type:'num'},{val:5,type:'num'},{val:6,type:'num'},{val:'-',type:'num'},{val:1,type:'num'},{val:2,type:'num'},{val:3,type:'num'},{val:'+',type:'num'},{val:<SiPowerpages/>,type:'clearHistory'},{val:0,type:'num'},{val:'.',type:'num'},{val:'=',type:'result'}]);
    const [calString, setCalString] = useState("");
    const [prev, setPrev] = useState([])


    const makeCalculator=(item)=>{
        
        if(item.type==="num")
        {
           setCalString(calString+item.val)
        }
        else if(item.type==='result')
        {
            try {

                let result  = eval(calString)+"";
                let arr = [...prev];
                arr.unshift(calString+"  = "+result);
                setPrev(arr);
                setCalString(result);
            } catch (error) {
                setCalString(error.message)
            }
        }
        else if(item.type==='allClear')
        {
            setCalString("");
        }
        else if(item.type==='delete')
        {
            let a = calString;
        
            a=a.slice(0,-1);
            setCalString(a);
        }
        else if(item.type==='clearHistory')
        {
            setPrev([]);
        }

    }
    return (
        <div className='calculator-container'>
            <div className='calculator-result' >
                <div className='prev-container' >

                    {
                        prev.map((ele,index)=>{
                            return(
                                <div key={index} className='prev'>{ele}</div>
                                )
                            })
                        }
                </div>
                
                <input placeholder='0' value={calString} onChange={(e)=>{setCalString(e.target.value)}}/>
            </div>

            <div className='calculator-button-container' id='button-container'>
                
                {
                    symbol.map((item, index)=>{
                        return (
                            <button  className={`calculator-button btn${index}`} key={index} onClick={()=>makeCalculator(item)}>{item.val}</button>
                        )
                    })
                }
            </div>
        </div>
        
    )

}
export default Calculator;