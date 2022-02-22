import { createGlobalStyle } from "styled-components";

const GlopleStyled = createGlobalStyle`
  

  :root{
    --mainColor : #FFDD33;
    --secoundColor :#572BD9;
    --white: #fff;
    --dark : #222;
    --lightBlue:#7E92AC;
  }
  ::-webkit-scrollbar {
  width: 10px;
  
}
/* Track */
::-webkit-scrollbar-track {
  background: var(--dark);
  width: 20px;
  border: none;
}
/* Handle */
::-webkit-scrollbar-thumb {
  background: var(--secoundColor); 
  border-radius: 10px;
  height: 20px
}

  body
  {
   font-family: 'Poppins', sans-serif; 
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      
  }
  ul{
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  
  
  `;

export default GlopleStyled;
