import './style.css';
import QuestionClosed from './QuestionClosed';
import QuestionOpen from './QuestionOpen'
import react from 'react'


export default function Questions(){
    const [GetQuestion1, setGetQuestion1] = react.useState(true)
    const [GetQuestion2, setGetQuestion2] = react.useState(true)
    const [GetQuestion3, setGetQuestion3] = react.useState(true)
    const [GetQuestion4, setGetQuestion4] = react.useState(true)

    return(
        <>
        <div className='questionsList'>
            {
                GetQuestion1 ? (
                    <QuestionClosed index='1' GetQuestion1={GetQuestion1} setGetQuestion1={setGetQuestion1}/>
                ) : (
                    <QuestionOpen index='1'/>
                )
            }
            {
                GetQuestion2 ? (
                    <QuestionClosed index='2' GetQuestion2={GetQuestion2} setGetQuestion2={setGetQuestion2}/>
                ) : (
                    <QuestionOpen index='2'/>
                )
            }
            {
                GetQuestion3 ? (
                    <QuestionClosed index='3' GetQuestion3={GetQuestion3} setGetQuestion3={setGetQuestion3}/>
                ) : (
                    <QuestionOpen index='3'/>
                )
            }
            {
                GetQuestion4 ? (
                    <QuestionClosed index='4' GetQuestion4={GetQuestion4} setGetQuestion4={setGetQuestion4}/>
                ) : (
                    <QuestionOpen index='4'/>
                )
            }
            
            
        </div>
        </>
    )
}
