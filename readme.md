# React Router OMDB Search Example
This application show how to integrate `react-router` into your application
to show different components at different paths of your application.

This application includes a component that uses the new JS `fetch` API to
execute AJAX requests against the OMDB Movie Search API.

AJAX results are displayed on the same search page, and each result includes
a link to a parameterized route leading to a MovieDetailPage component that
extracts the `imdbID` parameter out of the route and uses another `fetch`
request to retrieve more details about the one movie.

## Licensing
All content is licensed under a CC­BY­NC­SA 4.0 license.
All software code is licensed under GNU GPLv3. For commercial use or alternative licensing, please contact legal@ga.co.

