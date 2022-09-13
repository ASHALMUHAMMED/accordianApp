import {useState} from 'react'
import Accordion from 'react-bootstrap/Accordion';


const Question = ({title,answer}) => {
    const [showAnswer,setShowAnswer] = useState(false);

    const handleClick = () => {
        setShowAnswer(!showAnswer)
    }

  return (
    <Accordion >
    <Accordion.Item eventKey="0">
    <Accordion.Header onClick={handleClick}>{title}</Accordion.Header>
    <Accordion.Body>
         {showAnswer && <p >{answer}</p>}
     </Accordion.Body>
    </Accordion.Item>
    </Accordion>
  )
}

export default Question
