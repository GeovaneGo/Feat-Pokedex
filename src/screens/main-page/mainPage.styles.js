import styled from "styled-components";

export const Root = styled.div`
    min-height: 100dvh;
`

export const DefaultLabel = styled.strong`    
    color: #6b5353;
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

export const GridContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 20px;
    min-height: 350px;
    min-width: 240px;
    max-width: 300px;
`;
