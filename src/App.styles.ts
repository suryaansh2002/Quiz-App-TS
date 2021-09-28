import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html{
    height:100%;

}
body{
   background-image: (linear-gradient(#0000,#ffff));
   background-image: linear-gradient(to bottom, black , white);
   background-image: linear-gradient(to bottom, rgb(0, 0, 0) , rgba(25, 255, 255, 0.804));
   background-image: linear-gradient(to bottom, rgb(7, 15, 51) , rgba(25, 255, 255, 0.804));
   background-image: linear-gradient(to bottom, rgb(7, 15, 51) , rgba(18, 187, 187));
   opacity:0.8;





}
*{
    box-sizing:border-box;
    font-family:'Catamaran', sans-serif;
}
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: #fff;
  }
  .score {
    color: #fff;
    font-size: 2rem;
    margin: 0px;
  }

  h1,
  .score {
    font-family: "Scheherazade New", serif;
    background-image: linear-gradient(180deg, #fff, #1aa1b3);
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #0384a1);
    font-size: 70px;
    text-align: center;
    margin: 20px;
  }

  .score {
    font-size: 2rem;
    font-weight: 200;
  }

  .start,
  .next {
    cursor: pointer;
    background: linear-gradient(180deg, #fff, #e5b885);
    border: 2px solid #d68150;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0px 40px;
  }

  .start {
    max-width: 200px;
  }
`;
