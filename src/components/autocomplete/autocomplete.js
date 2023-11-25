import { useEffect, useState } from 'react';
import  searchIcon from '../../input-search-bg.png'
import { SearchButton } from './autocomplete.styled';
import Autocomplete from '@mui/material/Autocomplete';
import { TextField } from '@mui/material';

export const SearchAutocomplete =({dataValue})=>{    
    const [value, setValue] = useState('');
    const [items, setItems] = useState([]);

    function setAutocomplete(){
        console.log(dataValue)
        setItems(dataValue);
    }

    useEffect(()=>{
        if(items.length <= 0){
          setAutocomplete();
        }
      },[])

    return (
        <div>
            <Autocomplete
                disablePortal
                options={items}
                sx={{ width: 300 }}
                filterOptions={(key) => key}
                renderInput={(params) => <TextField {...params} label="Movie" />}
            />  
            <SearchButton>
                <img src={searchIcon}/>
            </SearchButton>
        </div>
    )
}

export default SearchAutocomplete;