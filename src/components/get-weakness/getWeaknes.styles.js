import styled from "styled-components";

export const PokeIconsBg = styled.div`
    font-size: 14px;
    border-radius: 5px;
    width: ${props=>props.iconbgwidth}; ;
    padding: 10px;
    display: flex;
    align-items: center;
    margin: 4px;
    background-color: ${props=>props.bgcolor};
    height:  ${props=>props.iconbgheight}; //24
    margin: auto;
    box-shadow: 0px 0px 5px #ff0000;
`;

export const TypesGrid = styled.div`
    display: grid;
    justify-content: center;
    min-width: 210px;
    margin-top: 25px;      
    padding: 0 50px;
    grid-template-columns: 1fr 1fr;
    gap: 5px;
    @media (min-width: 600px){        
        padding: 0 50px;
        grid-template-columns: 1fr 1fr 1fr 1fr ;
    }

    @media (min-width: 900px){        
        padding: 0 50px;
    grid-template-columns: 1fr 1fr 1fr;
    }

    @media (min-width: 1270px){        
        padding: 0 50px;
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }

    @media (min-width: 1520px){      
        padding: 0 90px;     
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
`;

export const TypeLabel = styled.label`
    text-align: center;
    margin: 4px;
    font-size: ${props=>props.fontSize};;
`;

export const PokeIcons = styled.img`
    width: ${props=>props.iconwidth}; //15
    margin: 4px;
    margin-left:6px
`;