import './style.css';
import QuestionClosed from './QuestionClosed';
import QuestionOpen from './QuestionOpen'
import react from 'react'

export default function Questions(){
    return(
        <>
        <div className='questionsList'>
            <QuestionClosed index='1' />
            <QuestionClosed index='2' />
            <QuestionClosed index='3' />
            <QuestionClosed index='4' />
            <QuestionClosed index='5' />
            <QuestionClosed index='6' />
            <QuestionClosed index='7' />
            <QuestionClosed index='8' />
        </div>
        </>
    )
}
