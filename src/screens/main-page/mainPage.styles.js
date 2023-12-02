import styled from "styled-components";

export const Root = styled.div`
    min-height: 100dvh;
`

export const DefaultLabel = styled.strong`    
    color: #f1f1f1;
    font-size: ${props=>props.fontSize};
    justify-self: center;
    height: 24px;
    margin: 5px;
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
    height: 90px;
    width: auto;
    padding: 4px;
    background-color: #363738;
    text-align: center;
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
    border-radius: 5px;
    background-color: #6296a5;
    border: none;
    box-shadow: 0px 0px 2px black;
`

export const Explore = styled.label`   
    font-family: 'Poppins', sans-serif;
    color: #f1f1f1;
    font-weight: bold;
    margin-top: 12px;
`

export const DefaultIcon = styled.img`
    width: 30px; 
    margin-right: 20px;
    margin-top: -7px;
`;

export const SerchField = styled.input`
    min-width: 200px;
    border-radius: 10px;
    background-color: #f1f1f1;
    font-family: 'Poppins', sans-serif;
    color: #363738;
    font-weight: bold;
    padding: 4px 10px;
    margin-right: 10px;

    @media (min-width: 600px){             
        width: 450px;
    }

    @media (min-width: 900px){              
        width: 600px;
    }

    @media (min-width: 1270px){        
        width: 700px;
    }

    @media (min-width: 1520px){    
        min-width: 800px;
    }

`

export const ItensFound = styled.div`
    float: right; 
    font-family: 'Poppins', sans-serif;
    color: #f1f1f1;
    font-weight: bold;
    font-size: 10px;
`

export const InputSearchBtn = styled.div`
    cursor: pointer;
    background-color: orange;
    border-radius: 10px;
    width: 40px;
    height: 40px;
    justify-content: center;
    padding: 5px;
    grid-template-columns: 1fr;
`
export const ResponsivDiv = styled.div`    
    padding: 20px 0;

    @media (min-width: 600px){        
        padding: 20px 50px;
    }

    @media (min-width: 900px){        
        padding: 20px 100px;
    }

    @media (min-width: 1270px){        
        padding: 20px 200px;
    }

    @media (min-width: 1520px){      
        padding: 20px 250px;     
    }
`;