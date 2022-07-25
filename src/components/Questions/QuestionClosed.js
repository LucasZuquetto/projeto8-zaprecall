export default function QuestionClosed(props){
    return(
        <div className='questionClosed'>
            <span>Pergunta {props.index}</span>
            <ion-icon name="play-outline" ></ion-icon>
        </div>
    )
}