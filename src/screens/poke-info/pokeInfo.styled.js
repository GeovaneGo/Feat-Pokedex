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
    display: grid;   
    height: 80px;
    width: auto;
    padding: 4px;
    background: url(${props=>props.bgimage});
    text-align: center;
    transform: rotate(${props=>props.rotate}deg);
    margin-top: ${props=>props.margintop};
`
export const DefaultLabel = styled.strong`
    color: ${props=>props.textcolor};    
    margin: ${props=>props.textmargin};    
    font-family: 'Poppins', sans-serif;
    font-size: 38px;
    justify-self: center;
    height: 24px;
    cursor: default;
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
    width: 300px;
    margin: auto;
    transition: ease all 0.5s;

    @media (min-width: 600px){
        width: 480px;
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
    transition: ease all 0.5s;

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
    background-color: #b0cfcb;    
    transition: ease all 0.5s;
    text-align: cent;
    
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
    transition: ease all 0.5s;

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
    transition: ease all 0.5s;

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
    font-size: 18px;
    justify-self: center;
    cursor: default;

    @media (min-width: 600px){          
        font-size: 25px;
    }

    @media (min-width: 900px){           
        font-size: 15px;
    }

    @media (min-width: 1270px){        
        font-size: 22px;
    }

    @media (min-width: 1520px){      
        font-size: 26px;
    }
`; 

export const StatusLabels = styled.strong`
    color: ${props=>props.textcolor};    
    margin: ${props=>props.textmargin};    
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    font-size: 20px;
    justify-self: center;
    cursor: default;

    @media (min-width: 600px){          
        font-size: 35px;
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

export const EvoInfos = styled.div`
    display: grid;
    width:  84%;
    justify-items: center;
    gap: 20px;
    min-height: 400px;
    background-color: #b0cfcb;
    border-radius: 10px;
    margin-bottom: 50px;    
    grid-template-columns: 1fr;
    transition: ease all 0.5s;
    margin: auto;
    padding: 20px;
    margin-bottom: 30px;
    
    @media (min-width: 600px){
        grid-template-columns: 1fr;
    }

    @media (min-width: 900px){   
        grid-template-columns: 1fr 1f;
    }

    @media (min-width: 1270px){  
        grid-template-columns: 1fr 1fr;  
    }

    @media (min-width: 1520px){
        grid-template-columns: 1fr 1fr 1fr; 
    }
`

export const EvoContainer = styled.div`
    display: grid;

    @media (min-width: 600px){       
        padding: 0 50px;       
    }

    @media (min-width: 900px){        
        padding: 0 100px;
    }

    @media (min-width: 1270px){        
        padding: 0 200px;
    }

    @media (min-width: 1520px){      
        padding: 0 250px;     
    }
`;

export const DivNext = styled.div` 
    padding: 20px 0 0 10px;   

    @media (min-width: 600px){    
        padding: 20px 0 0 70px;
    }

    @media (min-width: 900px){    
        padding: 20px 0 0 40px;
    }

    @media (min-width: 1270px){    
        padding: 20px 0 0 60px;
    }

    @media (min-width: 1520px){  
        padding: 20px 0 0 50px;  
    }
`;

export const DivPrev = styled.div`
    padding: 20px 10px 0 0;     

    @media (min-width: 600px){       
        padding: 20px 70px 0 0;     
    }

    @media (min-width: 900px){        
        padding: 20px 40px 0 0;   
    }

    @media (min-width: 1270px){        
        padding: 20px 60px 0 0;   
    }

    @media (min-width: 1520px){      
        padding: 20px 50px 0 0;       
    }

`; 


export const NextPrev = styled.a`
    float: ${props=>props.setfloat};   
    font-family: 'Poppins', sans-serif;
    text-align: center;
    font-size: 14px;
    font-weight:bold; 
    border-radius: 10PX;
    padding: 2px;
    transition: color .2s,background-color .2s;
    width: 160px;
    height: 25px;
    color: black;
    cursor: Pointer;
      
    &:link{
        text-decoration: none;
    }

    &:hover{
       background-color: #e8edee;
    }
`; 

export const PokeNav = styled.nav`  
    
    @media (min-width: 900px){        
        padding: 0 130px;
    }

    @media (min-width: 1270px){        
        padding: 0 150px;
    }

    @media (min-width: 1520px){      
        padding: 0 220px;     
    }
`

export const GridContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 20px;
    min-height: 350px;
    min-width: 240px;
    max-width: 300px;
    margin: auto;
`;

