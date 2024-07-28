import React from 'react';
import { Link } from 'react-router-dom';
import Footer1 from './Footer1';

export default function Bodymain({ onSubjectClick }) {
  const subjects = [
    { name: "Web - programming", code: "BCSE", id: 1, chatId: 246515},
    { name: "Design", code: "BCSE", id: 2,chatId: 246516},
    { name: "Micro", code: "BCSE", id: 3, chatId: 246517},
    { name: "Theory", code: "BCSE", id: 4, chatId: 246518 },
    { name: "Probability", code: "BCSE", id: 5, chatId:246519},
    { name: "Cao", code: "BCSE", id: 6, chatId:246521 }
  ];

  const handleSubjectClick = (subject) => {
    onSubjectClick(subject);
  };
  
  const subjectItems = subjects.map((subject) => (
    <Link key={subject.id} to={`/subject/${subject.id}/${subject.chatId}`} className='div3' onClick={() => handleSubjectClick(subject)}>
      <h3>{subject.name}</h3>
      <h3>{subject.code}</h3>
    </Link>
  ));
  

  return <div>{subjectItems}
  <Footer1 isVisible={true} /></div>;
}
