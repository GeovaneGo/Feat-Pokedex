import styled from "styled-components";

export const Root = styled.div`
    min-height: 100dvh;
`

export const DefaultLabel = styled.strong`    
    color: #1d2839;
    font-size: 20px;
    justify-self: center;
    height: 24px;
`; 

export const MainHeader = styled.header`
    background-color: #DC143C;
    height: 80px;   
    display: flex;
    grid-template-columns: 1fr;   
    
    padding: 10px 80px;
    
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
`;

export const Mainfooter = styled.footer`
    background-color: #DC143C;
    height: 50px;     
    bottom:0;
    width:100%;
    clear: both;
    position: relative;
`;

export const ImgBanner = styled.div`
    display: grid;   
    height: 60px;
    width: auto;
    padding: 4px;
    background: url(${props=>props.bgimage}) center;
    background-size: cover;
    background-repeat: no-repeat;
    text-align: center;
    transform: rotate(${props=>props.rotate}deg);
    margin-top: ${props=>props.margintop};
`

export const GridWrapper = styled.div`
    display: grid;
    padding: 50px 80px;
    min-height: 73.5dvh;
    grid-template-columns: 1fr;

    @media (min-width: 600px){        
        grid-template-columns: 1fr 1fr;
        padding: 50px 100px;
    }

    @media (min-width: 900px){        
        grid-template-columns: 1fr 1fr 1fr;
        padding: 50px 150px;
    }

    @media (min-width: 1270px){        
        grid-template-columns: 1fr 1fr 1fr 1fr;
        padding: 50px 200px;
    }

    @media (min-width: 1520px){      
        padding: 50px 250px;     
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
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
    display: flex;
    margin: auto;
`;

export const GridContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 20px;
    min-height: 350px;
    min-width: 240px;
    max-width: 300px;
`;

export const ShowMoreBtn = styled.button`
    width: 26dvh;
    height: 52px;
    border-radius: 25px;
    background-color: #afd8e1;
    border: none;
    box-shadow: 0px 0px 2px black;
`

export const DefaultIcon = styled.img`
    width: 30px; 
    margin-top: -7px;
    margin-right: 10px;
`;
