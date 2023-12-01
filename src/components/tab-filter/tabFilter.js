import { Tabs, Tab, Box } from "@mui/material";
import TypesPokemons from "../usable-arrays/typesPokemons";
import { useState } from "react";
import { TabPosition } from "./tabFilter.styled";
import BgFilter from "../../bgFilter.png"
import Colors from "../usable-arrays/colors";

export const TabFilter=()=>{
    const [tabValue, setTabValue] = useState("All");
    const [pokeTypes, setPokeTypes]= useState(TypesPokemons());
    const colors = Colors;

    const changeTabValue = (event, newValue) => {
        setTabValue(newValue);
    };

    return (
        <TabPosition bgfilter={BgFilter}>
            <Box  sx={{flexGrow: 1, maxWidth: { xs: 450, sm: 600, md: 800, lg: 1000 }}}>
                <Tabs 
                    value={tabValue} 
                    onChange={changeTabValue}   
                    variant="scrollable"
                    scrollButtons
                    allowScrollButtonsMobile
                    aria-label="scrollable tabs example"
                    >
                    {pokeTypes?.map(item=>{ 
                        return(
                                <Tab value={item.name} label={item.name} sx={{maxHeight: 30, bgcolor: colors[item.name], borderBottomLeftRadius: 50, borderBottomRightRadius: 50}}></Tab>
                        )               
                    })}
            </Tabs>
        </Box></TabPosition>
    )
}

export default TabFilter;