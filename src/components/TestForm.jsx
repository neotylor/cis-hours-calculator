import React, { useEffect } from 'react'
import { useState } from 'react'

export default function TestForm(props) {
  const [text, setText] = useState('');
  const [result, setResult] = useState({ calculateHours: 0, getWorkingHours: { hours: 0, minutes: 0 } });

  useEffect(() => {
    const data = text.extractTimes()
    const calculateHours = data
      .reduce((acc, item) => acc + getTime(item), 0)
      .calculateHours(data.length);

    const getWorkingHours = calculateHours.getWorkingHours();
    if (calculateHours !== 0) {
      document.body.style.backgroundColor = calculateHours < 0 ? '#650808' : '#063806';
      setResult({
        calculateHours,
        getWorkingHours
      });
    } else {
      setResult({ calculateHours: 0, getWorkingHours: { hours: 0, minutes: 0 } });
      document.body.style.backgroundColor = '#ffffff';
    }
  }, [text])


  return (
    <div className='secondBox'>
      <h2 style={{ color: props.mode === 'light' ? '#777777' : '#ffcd39' }}>{props.title2}</h2>
      <div className="mb-3">
        <textarea className="form-control" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#212529', color: props.mode === 'light' ? 'black' : 'white' }} onChange={e => setText(e.target.value)} value={text} id="mybox1" rows="8"></textarea>
      </div>
      { console.log(result?.calculateHours, "asdasdasd") }
      { result?.calculateHours !== 0 && <>
        <img src={ result?.calculateHours < 0 ? './fail.gif': './pass.gif'} alt='Result'/>
        <h2 style={{ color: props.mode === 'light' ? '#777777' : '#ffcd39' }}>Hours Summary</h2>
        <p style={{ color: props.mode === 'light' ? 'white' : 'white' }}>{`${result?.calculateHours < 0 ? 'Lagging Behind' : 'Ahead By'} => ${result?.getWorkingHours?.hours} Hours : ${result?.getWorkingHours?.minutes} minutes`}</p>
      </>
      }
    </div>
  )
}

export function getTime(str) {
  const split = str.replace('hrs', '').replace('min', '').split(',');
  return split.length === 2 ?
    (parseInt(split?.[0]?.trim()) * 60) + parseInt(split[1]?.trim()) :
    split.length === 1 ?
      parseInt(split?.[0]?.trim()) :
      0
}
