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

export const DefaultLabel = styled.strong`    
    color: #6b5353;
    font-size: 20px;
    justify-self: center;
    height: 24px;
`; 