const app = require('./app')
require('./database')

app.listen(app.get('port'), () => {
    console.log('listening on http://localhost:' + app.get('port')); 
});
