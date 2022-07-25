import setinha from '../../assets/setinha.png'

let flashcardsGame = []

function shuffleArray(){
    const flashcards = [
        {question: 'O que é JSX?', answer: 'Uma extensão de linguagem do JavaScript'},
        {question: 'O React é __', answer: 'uma biblioteca JavaScript para construção de interfaces'},
        {question: 'Componentes devem iniciar com __?', answer: 'letra maiúscula'},
        {question: 'Podemos colocar __ dentro do JSX', answer: 'expressões'},
        {question: 'O ReactDOM nos ajuda __ ', answer: 'interagindo com a DOM para colocar componentes React na mesma'},
        {question: 'Usamos o npm para __', answer: 'gerenciar os pacotes necessários e suas dependências'},
        {question: 'Usamos props para __', answer: 'passar diferentes informações para componentes '},
        {question: 'Qual a resposta para a Vida, o Universo e Tudo o Mais?', answer: '42'}
    ]
    
    function randomNumber(){
        return Math.random() - 0.5
    }
    flashcards.sort(randomNumber)
    for(let i = 0; i < 5; i++){
        flashcardsGame.push(flashcards[i])
    }
}
shuffleArray()

export default function QuestionOpen({index, GetAnswer1, setGetAnswer1, GetAnswer2, GetAnswer3, GetAnswer4, setGetAnswer2, setGetAnswer3, setGetAnswer4}){
    function getAnswer({index}){
        if(index === '1'){
            setGetAnswer1(!GetAnswer1)
        }else if(index === '2'){
            setGetAnswer2(!GetAnswer2)
        }else if(index === '3'){
            setGetAnswer3(!GetAnswer3)
        }else if(index === '4'){
            setGetAnswer4(!GetAnswer4)
        }
    }

    return(
        <>
            <div className='questionOpen'>
                <p>{flashcardsGame[index].question}</p>
                <img src={setinha} alt='setinha' onClick={() => getAnswer({index})}/>
            </div>
        </>
    )
}
