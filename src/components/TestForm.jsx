import React, { useEffect } from 'react'
import { useState } from 'react'
import { getTime } from '../service/utility';
import ResultTable from './ResultTable';

export default function TestForm(props) {
  const [text, setText] = useState('');
  const [result, setResult] = useState({ calculateHours: null, getWorkingHours: { hours: 0, minutes: 0 }, considerWorkingHours: null });

  useEffect(() => {
    const data = text.extractTimes()
    const calculateHours = data
      .reduce((acc, item) => acc + getTime(item), 0)
      .calculateHours(data.length);

      const getWorkingHours = calculateHours.getWorkingHours();
    if (calculateHours !== null && text.length > 0) {
      // document.body.style.backgroundColor = calculateHours < 0 ? '#650808' : '#063806';
      setResult({
        calculateHours,
        getWorkingHours,
        considerWorkingHours: data && data.length > 0 ? data : null
      });
    } else {
      setResult({ calculateHours: null, getWorkingHours: { hours: 0, minutes: 0 } });
      // document.body.style.backgroundColor = '#ffffff';
    }
  }, [text])


  return (
    <div className='secondBox'>
      <h2 style={{ color: props.mode === 'light' ? '#777777' : '#ffcd39' }}>{props.title2}</h2>
      <div className="mb-3">
        <textarea className="form-control" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#212529', color: props.mode === 'light' ? 'black' : 'white' }} onChange={e => setText(e.target.value)} value={text} id="mybox1" rows="8"></textarea>
      </div>
      {result?.calculateHours !== null && <>
        <img src={result?.calculateHours < 0 ? './fail.gif' : './pass.gif'} alt='Result' />
        <h2 style={{ color: props.mode === 'light' ? '#777777' : '#ffcd39' }}>Hours Summary</h2>
        <p 
          className={`${result?.calculateHours < 0 ? 'text-danger': 'text-success'}`}>
          {`${result?.calculateHours < 0 ? 
            'Lagging Behind' : 
            result?.calculateHours > 0 ? 'Ahead By': 
            'No Ahead/Behind'
            } => ${result?.getWorkingHours?.hours} Hours : ${result?.getWorkingHours?.minutes} minutes`}
        </p>
      </>
      }
      {
        result &&
        result?.considerWorkingHours &&
        <ResultTable {...props } result={result} />
      }
    </div>
  )
}


