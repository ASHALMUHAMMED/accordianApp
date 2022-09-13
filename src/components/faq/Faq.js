import React from "react";
import { MdPhotoLibrary } from "react-icons/md";
import './Faq.css'
import Question from "./Question";
import { questions } from "./Data";

const Faq = () => {
  return (
    <section className="faq-sec">
      <div className="container faq">
        <div className="title">
          <MdPhotoLibrary size={30} color="orangered" />
          <h2>FAQS</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia
            possimus delectus a soluta ducimus non omnis, sapiente odio
            accusantium nulla architecto velit necessitatibus eos ad. Quos quo
            doloremque ducimus delectus!
          </p>
        </div>
        <div className="questions">
            {questions.map((question) => 
            (
                <Question key={question.id} title={question.title} answer={question.answer}/>
            ))}
           
        </div> 
      </div>

    </section>
  );
};

export default Faq;
