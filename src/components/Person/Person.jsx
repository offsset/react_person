import React from 'react';

function getMessedge(human) {
  return human.isMarried
    ? `${human.partnerName} is my ${(human.sex === 'm')
      ? 'wife' : 'husband'}` : 'I am not married';
}

function getAge(ageHuman) {
  if (ageHuman.age) {
    return (
      <p className="Person__age">
        I am
        {' '}
        {ageHuman.age}
      </p>
    );
  }

  return null;
}

export const Person = ({ person }) => (
  <section className="Person">
    <h2 className="Person__name">
      My name is
      {' '}
      {person.name}
    </h2>
    {getAge(person)}
    <p className="Person__partner">
      { getMessedge(person)
       }
    </p>
  </section>

);