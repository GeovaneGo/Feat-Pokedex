import styled from "styled-components";

export const Root = styled.div`    
    padding: 10px;

    @media (min-width: 600px){        
        padding: 10px 100px; 
    }

    @media (min-width: 900px){        
        padding: 10px 150px;
    }

    @media (min-width: 1270px){        
        padding: 10px 200px;
    }

    @media (min-width: 1520px){         
        padding: 10px 250px;  
}
`
export const MainDiv = styled.div`
    min-height: 592px;
    display: grid;
    grid-template-columns: 1fr;
    margin: 20px ;
    border-radius: 10px;
    border-color: gray;
    border-style: solid;
    
    @media (min-width: 600px){    
    grid-template-columns: 1fr;    
    }

    @media (min-width: 900px){     
    grid-template-columns: 1fr 1fr; 
    }

    @media (min-width: 1270px){    
    grid-template-columns: 1fr 1fr; 
    }

    @media (min-width: 1520px){     
    grid-template-columns: 1fr 1fr; 
    }
`

export const DefaultImg = styled.img`
    width: 100%;    
    width: 300px;
    margin: auto;
    transition: ease all 0.5s;

    @media (min-width: 600px){
        width: 300px;
    }

    @media (min-width: 900px){   
        width: 300px;
    }

    @media (min-width: 1270px){  
        width: 380px; 
    }

    @media (min-width: 1520px){
        width: 480px;
    }
`;

export const DivContent = styled.div`
    margin: auto;
    padding: 20px;
`

export const DivContainer = styled.div `
    display: flex;
`
