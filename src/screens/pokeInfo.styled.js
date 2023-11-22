import styled from "styled-components";

export const Root = styled.div`
        min-height: 100dvh;
`

export const PokeLogo = styled.img`
    cursor: pointer;
    &:hover {
        animation: tilt 200ms;
        @keyframes tilt {
            0% {
                transform: translatey(0px);
            }            
            50% {
                transform: translatey(-5px);
            }
            100% {
                transform: translatey(0px);
            }
        }
    }
`

export const PokeInfo = styled.div`    
    height: 80px;
    width: auto;
    padding: 8px;
    background: url(${props=>props.bgimage}) center;
    background-size: cover;
    background-repeat: no-repeat;
    text-align: center;
`
export const DefaultLabel = styled.strong`
    color: ${props=>props.textcolor};    
    margin: ${props=>props.textmargin};    
    font-family: 'Poppins', sans-serif;
    font-size: 45px;
    justify-self: center;
    height: 24px;
`; 

export const PokeContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;

    @media (min-width: 600px){       
        padding: 0 50px;       
        grid-template-columns: 1fr;
    }

    @media (min-width: 900px){        
        padding: 0 100px;
        grid-template-columns: 1fr 1fr;
    }

    @media (min-width: 1270px){        
        padding: 0 200px;
        grid-template-columns: 1fr 1fr;
    }

    @media (min-width: 1520px){      
        padding: 0 250px;     
        grid-template-columns: 1fr  1fr;
    }
`

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

export const DefaultImg = styled.img`
    width: 100%;    
    max-width: 250px;
    max-height: 250px;
    margin: auto;
    transition: ease all 1s;

    @media (min-width: 600px){
        max-width: 380px;
        max-height: 380px;  
    }

    @media (min-width: 900px){   
        max-width: 200px;
        max-height: 200px; 
    }

    @media (min-width: 1270px){  
        max-width: 280px;
        max-height:280px;   
    }

    @media (min-width: 1520px){
        max-width: 380px;
        max-height: 380px;  
    }
`;

export const PokeInfoContainer = styled.div`
    display: flex;
    margin: auto;
    border-radius: 10px;
    width: 320px;
    height: 320px;
    justify-self: center;
    background: url(${props=>props.bgimage}) center;
    background-size: contain;
    background-repeat: no-repeat;
    transition: ease all 1s;

    @media (min-width: 600px){
        width: 500px;
        height: 500px;
    }

    @media (min-width: 900px){   
        width: 300px;
        height: 300px; 
    }

    @media (min-width: 1270px){  
        width: 400px;
        height: 400px;   
    }

    @media (min-width: 1520px){
        width: 500px;
        height: 500px;
    }
`;

export const PokeStatusContainer = styled.div`
    margin: auto;
    border-radius: 10px;
    padding: 12px;
    width: 320px;
    height: 320px;
    justify-self: center;
    background-color: #72e1fc;    
    transition: ease all 1s;
    
    @media (min-width: 600px){
        width: 500px;
        height: 500px;
    }

    @media (min-width: 900px){   
        width: 300px;
        height: 300px; 
    }

    @media (min-width: 1270px){  
        width: 400px;
        height: 400px;   
    }

    @media (min-width: 1520px){
        width: 500px;
        height: 500px;
    }
`;


export const ResponsivDiv = styled.div`
    padding: 50px 80px;
    background-color: white;   
    @media (min-width: 600px){        
        padding: 50px;
    }

    @media (min-width: 900px){        
        padding: 50px;
    }

    @media (min-width: 1270px){        
        padding: 50px;
    }

    @media (min-width: 1520px){      
        padding: 50px;     
    }
`;

export const BackPokedex = styled.button`
    color: #DC143C;
    padding: 10px;
    width: 12dvh;
    height: 5dvh;
    border-radius: 10px;
    position: fixed;
    right: 15px;
    bottom: 15px;
    z-index: 1050;
    opacity: 0.8;    
    background-color: white;
`

export const StatusBar = styled.div`
    width: 100%;
    background-color: white;
    border-radius: 5px;
    height: 12px;
    margin-bottom: 5px;  
    transition: ease all 1s;

    @media (min-width: 600px){     
        border-radius: 10px;
        height: 20px;
        margin-bottom: 10px;   
    }

    @media (min-width: 900px){        
        border-radius: 6px;
        height: 10px;
        margin-bottom: 6px;  
    }

    @media (min-width: 1270px){     
        border-radius: 8px;
        height: 15px;
        margin-bottom: 8px;  
    }

    @media (min-width: 1520px){        
        border-radius: 10px;
        height: 20px;
        margin-bottom: 10px;  
    }
`

export const StatusProgressBar = styled.div`
    width: ${props=>props.percentual}%;
    background-color: #4b5d77;
    border-radius: 5px;
    height: 12px;
    margin-bottom: 5px;  
    transition: ease all 1s;

    @media (min-width: 600px){   
        border-radius: 10px;
        height: 20px;
        margin-bottom: 10px;   
    }

    @media (min-width: 900px){        
        border-radius: 6px;
        height: 10px;
        margin-bottom: 6px;  
    }

    @media (min-width: 1270px){     
        border-radius: 8px;
        height: 15px;
        margin-bottom: 8px;  
    }

    @media (min-width: 1520px){        
        border-radius: 10px;
        height: 20px;
        margin-bottom: 10px;  
    }
`

export const StatusName = styled.strong`
    font-family: 'Poppins', sans-serif;
    font-size: 20px;
    justify-self: center;

    @media (min-width: 600px){          
        font-size: 20;
    }

    @media (min-width: 900px){           
        font-size: 15px;
    }

    @media (min-width: 1270px){        
        font-size: 18px;
    }

    @media (min-width: 1520px){      
        font-size: 22px;
    }
`; 

export const StatusLabels = styled.strong`
    color: ${props=>props.textcolor};    
    margin: ${props=>props.textmargin};    
    font-family: 'Poppins', sans-serif;
    font-size: 30px;
    justify-self: center;

    @media (min-width: 600px){          
        font-size: 30px;
    }

    @media (min-width: 900px){           
        font-size: 20px;
    }

    @media (min-width: 1270px){        
        font-size: 25px;
    }

    @media (min-width: 1520px){      
        font-size: 35px;
    }
`; 

