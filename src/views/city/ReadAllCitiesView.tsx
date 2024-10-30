import City from "../../classes/city";
import { Layout } from "../shared/Layout";

type ReadAllCitiesViewProps = {
    cities: Array<City>;
};

const renderCityLink = (city: City) => `
    <li>
        <a href="/cities/${city.slug}">${city.name}</a>
    </li>
`;

const renderCitiesList = (cities: City[]) => `
    <ul>
        ${cities.map(renderCityLink).join('')}
    </ul>
`;

const ReadAllCitiesView = ({ cities }: ReadAllCitiesViewProps) => (
    <Layout pageTitle="Liste des Villes">
        <h1>Liste des Villes</h1>
        <div dangerouslySetInnerHTML={{ __html: renderCitiesList(cities) }} />
    </Layout>
);

export default ReadAllCitiesView;
