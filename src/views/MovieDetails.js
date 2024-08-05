import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MoviesService } from "../api/MoviesService";

export const MovieDetail = () => {
    const { id } = useParams();
    const [deatil, setDeatil] = useState({});

    const fetchDetail = async () => {
        const { data } = await MoviesService.getMovieById(id);
        setDeatil(data);
    }

    useEffect(() => {
        fetchDetail();
    }, [])

    return (
        <>
            <h1>{deatil.title}</h1>
            <article>{deatil.overview}</article>
        </>
    );
};