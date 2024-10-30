import { Layout } from "../shared/Layout";
import City from "../../classes/city";
import Parking from "../../classes/Parking";

type ReadOneCityViewProps = {
    city: City;
    parkings: Array<Parking>;
};

const ReadOneCityView = ({ city, parkings }: ReadOneCityViewProps) => (
    <Layout pageTitle={`Détails de ${city.name}`}>
        <h1>{city.name}</h1>
        <h2>Liste des parkings à {city.name}</h2>
        <ul>
            {parkings.map((parking) => (
                <li key={parking.id}>{parking.name}</li>
            ))}
        </ul>
    </Layout>
);

export default ReadOneCityView;
