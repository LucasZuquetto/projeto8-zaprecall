import './style.css';
import QuestionClosed from './QuestionClosed';
import QuestionOpen from './QuestionOpen'
import react from 'react'
import Answer from './Answer';


export default function Questions(){
    const [GetQuestion1, setGetQuestion1] = react.useState(true)
    const [GetQuestion2, setGetQuestion2] = react.useState(true)
    const [GetQuestion3, setGetQuestion3] = react.useState(true)
    const [GetQuestion4, setGetQuestion4] = react.useState(true)
    const [GetAnswer1, setGetAnswer1] = react.useState(true)
    const [GetAnswer2, setGetAnswer2] = react.useState(true)
    const [GetAnswer3, setGetAnswer3] = react.useState(true)
    const [GetAnswer4, setGetAnswer4] = react.useState(true)

    return(
        <>
        <div className='questionsList'>
            {
                GetQuestion1 ? (
                    <QuestionClosed index='1' GetQuestion1={GetQuestion1} setGetQuestion1={setGetQuestion1}/>
                ) : GetAnswer1 ? (
                    <QuestionOpen index='1' GetAnswer1={GetAnswer1} setGetAnswer1={setGetAnswer1}/>
                ) : (
                    <Answer index ='1'/>
                )
            }
            {
                GetQuestion2 ? (
                    <QuestionClosed index='2' GetQuestion2={GetQuestion2} setGetQuestion2={setGetQuestion2}/>
                ) : GetAnswer2 ? (
                    <QuestionOpen index='2' GetAnswer2={GetAnswer2} setGetAnswer2={setGetAnswer2}/>
                ) : (
                    <Answer index ='2'/>
                )
            }
            {
                GetQuestion3 ? (
                    <QuestionClosed index='3' GetQuestion3={GetQuestion3} setGetQuestion3={setGetQuestion3}/>
                ) : GetAnswer3 ? (
                    <QuestionOpen index='3' GetAnswer3={GetAnswer3} setGetAnswer3={setGetAnswer3}/>
                ) : (
                    <Answer index ='3'/>
                )
            }
            {
                GetQuestion4 ? (
                    <QuestionClosed index='4' GetQuestion4={GetQuestion4} setGetQuestion4={setGetQuestion4}/>
                ) : GetAnswer4 ? (
                    <QuestionOpen index='4' GetAnswer4={GetAnswer4} setGetAnswer4={setGetAnswer4}/>
                ) : (
                    <Answer index ='4'/>
                )
            }
        </div>
        </>
    )
}
