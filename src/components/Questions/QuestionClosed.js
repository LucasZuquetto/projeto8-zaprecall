

export default function QuestionClosed({index, GetQuestion1, setGetQuestion1, GetQuestion2 , GetQuestion3, GetQuestion4,setGetQuestion2, setGetQuestion3, setGetQuestion4 }){

    function getquestion({index}){
        if(index === '1'){
            setGetQuestion1(!GetQuestion1)
        }else if(index === '2'){
            setGetQuestion2(!GetQuestion2)
        }else if(index === '3'){
            setGetQuestion3(!GetQuestion3)
        }else if(index === '4'){
            setGetQuestion4(!GetQuestion4)
        }
    }

    return(
        <div className='questionClosed'>
            <span>Pergunta {index}</span>
            <ion-icon name="play-outline" onClick={() => getquestion({index})}></ion-icon>
        </div>
    )
}