const express = require('express');
const app = express();

let downloadCount = 0;

app.set('port', process.env.PORT || 5000);

app.use(express.static(__dirname + '/public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

app.get('/', function(request, response) {
  response.render('index');
});

app.post('/json', function(request, response) {
  response.render('index');
});

app.listen(app.get('port'), function() {
  console.log('App is running on port: ', app.get('port'));
});

function submitButtonAction() {
  const textArea = document.getElementById('main_area');
  const input = textArea.innerHTML;
}
