import utility from './helpers/feature.util';
import { getCtl, postCtl } from './controllers/recipe.controller';

const routes = function() {
    return [
        {
            method: 'GET',
            path:'/solutions/{solutionId}/recipes',
            handler: getCtl.fetchRecipe,
            config: { cors: true }
        },
        {
            method: 'GET',
            path:'/solutions/{solutionId}/recipe/{config_code}',
            handler: getCtl.fetchRecipe,
            config: { cors: true }
        },
        {
            method: 'POST',
            path:'/solutions/{solutionId}/recipe',
            handler: postCtl.createRecipe,
            config: { cors: true }
        }
    ]
}();
routes.map(utility.routerPrefixer.bind({}, "/v2"));
module.exports = [...routes];