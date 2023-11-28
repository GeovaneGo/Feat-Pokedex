import { useState } from "react";
import { Container, Content } from "./skeletonLoading.styled";

export const Skeleton =({props})=>{
    const [lines, setLines]=useState(10); 
    const [height, setHeight]=useState('335px'); 
    const [gap, setGap]=useState('10px'); 
    const [width, setWidth]=useState('225px')
    return (
        <Container gap={gap}>
            {[...Array(lines)].map((_, index)=> (
                <Content key={index} height={height} width={width}>
                    
                </Content>
            ))}
        </Container>
        
    )

}

export default Skeleton;