import styled from "styled-components";

export const BtnBackToTop = styled.button`
    color: white;
    width: 18dvh;
    height: 45px;
    border-radius: 5px;
    position: fixed;
    right: 15px;
    bottom: 15px;
    z-index: 1050;
    opacity: 0.3;    
    display: ${props=>props.display};
    background-color: #DC143C;
    transition: 0.3s;
    &:hover {    
        opacity: 0.8; 
    }
`;

export const DefaultLabel = styled.strong`    
    color: #ffffff;
    font-size: 15px;
    height: 24px;
    margin-left:15px;
`; 

export const DefaultIcon = styled.img`
    width: 20px; 
    margin-top: -3px;
`;