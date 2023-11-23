import styled from "styled-components";

export const MenuDiv = styled.div`    
    padding: 10px 80px;
    background: url("./menu.png") no-repeat fixed center;
    
    @media (min-width: 600px){        
        padding: 10px 100px;        
        background: url("./menu.png") no-repeat fixed center;
    }

    @media (min-width: 900px){        
        padding: 10px 150px;        
        background: url("./menu.png") no-repeat fixed center;
    }

    @media (min-width: 1270px){        
        padding: 10px 200px;        
        background: url("./menu.png") no-repeat fixed center;
    }

    @media (min-width: 1520px){         
        padding: 10px 250px;        
        background: url("./menu.png") no-repeat fixed center;
    }
`;

export const GridMenu = styled.div`   
    display: grid;
    grid-template-columns: 1fr;

    @media (min-width: 600px){        
        grid-template-columns: 1fr ;
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
`;

export const GridItem = styled.div `
    min-width: 200px;
    display: flex;
    margin: auto;
`;

export const DefaultLabel = styled.label`    
    color: #201e1e;
    font-size: 20px;
    font-weight:bold; 
    justify-self: center;
    height: 24px;
    margin-right: 20px;
`; 
