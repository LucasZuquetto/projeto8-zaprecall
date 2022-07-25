import './style.css'

export default function Answer({index}){
    return(
        <>
            <div className='answer'>
                <p>{'Resposta'+index}</p>
            </div>
        </>
    )
}