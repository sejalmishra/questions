import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const [questions, setQuestions] = useState(data);
  return <main>
    <article>
    <div className='container'>
      <h2>Questions And Answers About Login</h2>
      <section className='info'>
      {questions.map((question) => {
        return <SingleQuestion key={question.id} {...question} />
      })}
      </section>
      </div>
    </article>
  </main>
  ;
}

export default App;


