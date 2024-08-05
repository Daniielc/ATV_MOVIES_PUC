import { Link } from "react-router-dom";
import { MoviesService } from "../api/MoviesService";

export const MovieItem = ({ title, id }) => (
    <li>
        <Link to={`movie/${id}`}>{title}</Link>
    </li>
);