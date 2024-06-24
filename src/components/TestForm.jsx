import React from 'react'
import { useState } from 'react'

export default function TestForm(props) {
    // const handleUpClick = ()=>{
    //     let newText = text.toUpperCase();
    //     setText(newText)
    //     props.showAlert("Converted to Uppercase","success","warning");
    // }
    // const handleOnChange = (event)=>{
    //     setText(event.target.value);
    // }
    // const handleLowClick = () => {
    //     let lowertxt = text.toLowerCase();
    //     setText(lowertxt);
    //     props.showAlert("Converted to Lower","success","warning");
    // }
    // const handleClear = ()=>{
    //     let textbox = '';
    //     setText(textbox);
    //     props.showAlert("Cleared the text","success","warning");
    // }
    // const handleRemoveSpace=()=>{
    //    let removeTxt = text.replace(/\s+/g, ' ').trim();
    //    setText(removeTxt);
    //    props.showAlert("Trimmed the text","success","warning");
    // }
    // const handleCopyTxt=()=>{
    //     let copyText = document.getElementById("mybox");
    //     // copyText.select();
    //     navigator.clipboard.writeText(copyText.value);
    //     props.showAlert("Copied the text","success","warning");
    // }
    // const [text,setText] = useState('');

    const [text1,setText1] = useState('');
    const [text2,setText2] = useState('');
    const [image,setImage] = useState('');
    const handleOnChange1 = (event)=>{
        setText1(event.target.value);
        let val = event.target.value;
        let str = val.replace(/\s*,\s*/g, ",");
        str = str.replace(/\s+/g,'');
        str = str.split('min').join('min ');
        const myArray = str.split(" ");
        var hours = 0;
        var minutes = 0;
        var remminutes = 0;
        myArray.map((cell, i) => {
            if (cell !== '0min') {
                if(cell !== ''){
                    remminutes += 8;
                    var arr = cell.split(",");
                    var split = arr[0].replace('hrs','');
                    hours += parseInt(split);
                    console.log(`split: ${split}`);
                    var split1 = arr[1].replace('min','');
                    minutes += parseInt(split1);
                    console.log(`split1: ${split1}`);
                }
            }
        });
        var minHours = Math.floor(minutes / 60);
        var minminutes = minutes % 60;
        var newHours = minHours + hours;
        var remHours = newHours - remminutes;
        if (remHours < 0) {
            console.log('condition');
            let negremHours = Math.abs(remHours);
            // negremHours = negremHours.toFixed(2);
            negremHours = negremHours+'.60';
            let negreMinutes = 1+'.'+minminutes;
            let remHoursneg = negremHours - negreMinutes;
            remHoursneg = remHoursneg.toFixed(2);
            remHoursneg = remHoursneg.toString();
            let arr1 = remHoursneg.split(".");      
            document.body.style.backgroundColor = '#650808';
            setText2(`Lagging Behind => ${arr1[0]} Hours : ${arr1[1]} minutes`);
            setImage('./fail.gif');
        }else{    
            document.body.style.backgroundColor = '#063806';   
            setText2(`Ahead By => ${remHours} Hours : ${minminutes} minutes`);
            setImage('./pass.gif');
        }
    }
    return (
        <>
            {/* <div className='firstBox'>
                <div className={props.paddingVal}>
                    <h1 style={{color:props.mode === 'light'?'#777777':'#ffcd39'}}>{props.title}</h1>
                    <div className="mb-3">
                        <textarea className="form-control" style={{backgroundColor:props.mode === 'light'?'white':'#212529',color:props.mode === 'light'?'black':'white'}} onChange={handleOnChange} value={text} id="mybox" rows="8"></textarea>
                    </div>
                    <button disabled={text.length === 0} className="btn btn-primary me-2 my-1" onClick={handleUpClick}>Text to Upper case</button>
                    <button disabled={text.length === 0} className="btn btn-success me-2 my-1" onClick={handleLowClick}>Text to Lower case</button>
                    <button disabled={text.length === 0} className="btn btn-warning me-2 my-1" onClick={handleRemoveSpace}>Remove Extra Space</button>
                    <button disabled={text.length === 0} className="btn btn-info me-2 my-1" onClick={handleCopyTxt}>Copy Text</button>
                    <button disabled={text.length === 0} className="btn btn-danger me-2 my-1" onClick={handleClear}>Clear</button>
                </div>
                <h2 style={{color:props.mode === 'light'?'#777777':'#ffcd39'}}>Your Text Summary</h2>
                <p style={{color:props.mode === 'light'?'black':'white'}}>{text.split(/\s/).filter((element)=>{ return element.length !== 0 }).length} Words and {text.length} Characters</p>
                <p style={{color:props.mode === 'light'?'black':'white'}}>{0.008 *text.split(" ").filter((element)=>{ return element.length !== 0 }).length} Minutes to Read</p>
                <h2 style={{color:props.mode === 'light'?'#777777':'#ffcd39'}}>Preview</h2>
                <p style={{color:props.mode === 'light'?'black':'white'}}>{text.length>0?text:"Nothing To Preview"}</p>
            </div> */}
            <div className='secondBox'>
                <h2 style={{color:props.mode === 'light'?'#777777':'#ffcd39'}}>{props.title2}</h2>
                 <div className="mb-3">
                    <textarea className="form-control" style={{backgroundColor:props.mode === 'light'?'white':'#212529',color:props.mode === 'light'?'black':'white'}} onChange={handleOnChange1} value={text1} id="mybox1" rows="8"></textarea>
                </div>
                <img src={image} />
                <h2 style={{color:props.mode === 'light'?'#777777':'#ffcd39'}}>Hours Summary</h2>
                <p style={{color:props.mode === 'light'?'white':'white'}}>{text2}</p>
            </div>
        </>
    )
}
