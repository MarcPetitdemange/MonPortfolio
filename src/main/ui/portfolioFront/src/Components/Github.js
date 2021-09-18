import React, {useEffect, useState} from 'react';
import {properties} from "../properties/properties";
import MyCard from "./MyCard";
import {Grid} from "@mui/material";

function Github(props) {
    const [, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    // Remarque : le tableau vide de dépendances [] indique
    // que useEffect ne s’exécutera qu’une fois, un peu comme
    // componentDidMount()
    useEffect(() => {
        fetch("https://api.github.com/users/"+properties.githubUserName+"/repos")
            .then(res => res.json())
            .then(
                (result) => {
                    debugger;
                    setIsLoaded(true);
                    setItems(result);
                },
                // Remarque : il faut gérer les erreurs ici plutôt que dans
                // un bloc catch() afin que nous n’avalions pas les exceptions
                // dues à de véritables bugs dans les composants.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if(isLoaded) {
        return (
            <Grid container spacing={12}  direction="row" style={{justifyContent:"center", alignItems:"center"}}>
                    {items.map(item => (
                        <MyCard key={item.name} commonProps={item}>
                        </MyCard>
                    ))}
            </Grid>
        );
    }else{
        return <div></div>
    }
}

export default Github;
