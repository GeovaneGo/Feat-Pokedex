import api from "../../api/api";

function TypesPokemons(){ 
    const pokeTypes = [{name: "All"}];
    api.get('type').then(res=>{
        res.data.results.map((item, index)=>{
            if(item.name === "unknown" || item.name === "shadow"){
                res.data.results.splice(index, 1);
                return
            }
        })
        pokeTypes.push(...res.data.results);
    })
    console.log(pokeTypes)
    return pokeTypes;
}

export default TypesPokemons;