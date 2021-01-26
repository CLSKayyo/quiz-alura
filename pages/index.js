import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';

import db from '../db.json';
import BackgroundImage from '../src/components/BackgroundImage';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <BackgroundImage backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={event=>{
              event.preventDefault();
              if(name.length > 0){
                router.push(`/quiz?name=${name}`);
              }
              
            }}>
              <input 
                placeholder="Diz aí seu nome" 
                onChange={event=>{
                  setName(event.target.value);
                }}
              />
              <button type="submit" disabled={name.length === 0}>Jogar</button>
            </form>
            <p>{db.description}</p>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>{db.title}</h1>
            <p>{db.description}</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="//github.com/CLSKayyo/quiz-alura" />
    </BackgroundImage>
  );
}
