var Films = require('./films');

var FilmsApi = function(app){

  var films = new Films();

  app.get('/api/films', function(req, res){
    res.json({data: films});
  });

  app.get('/api/films/:id', function(req, res){
    var film = req.params.id;
    res.json({data: films[film]});
  });

  app.post('/api/films', function(req, res){
    films.push(req.body.film);
    res.json({data: films});
  });

}

module.exports = FilmsApi;