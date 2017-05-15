import { IndexRoute, Route, Redirect } from 'vitaminjs/react-router';
import App from "./containers/App";
import BlogHome from "./containers/BlogHome";
import BlogPost from "./containers/BlogPost";

export default (
    <Route path="/" component={App}>
        <IndexRoute component={BlogHome} />
        <Redirect from="*" to="/" />
    </Route>
);
