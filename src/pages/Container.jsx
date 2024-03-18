import React,{useEffect, useContext} from "react";
import Contextpage from '../Contextpage'
import Movies from "../components/Movies";
import Searchbar from "../components/Searchbar";
import { useParams } from 'react-router-dom'
import Search from "../pages/Search"
import { statsig } from 'statsig-react';
import { useFlags } from 'launchdarkly-react-client-sdk';
import { StatsigProvider } from "statsig-react";
import { useStatsig } from "statsig-react";

function Container() {
    const { setMovies } = useContext(Contextpage);
    const { query } = useParams()
    //const statsig = useStatsig();

   // statsig.logEvent('USerLanded');

    return (
        <section>
        <Searchbar />
        {query ? <Search query={query} /> : <Movies />}
        </section>
       
        

    )
}

export default Container;