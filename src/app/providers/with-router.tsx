import {ReactNode, Suspense} from "react";
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "../../shared/store/store";

export const withRouter = (component: () => ReactNode) => () => (
    <Provider store={store}>
        <HashRouter>
            <Suspense fallback="Loading...">
                {component()}
            </Suspense>
        </HashRouter>
    </Provider>
);
