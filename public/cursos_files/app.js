var require = meteorInstall({"client":{"cursos":{"template.cursodiseño.js":function(){

/////////////////////////////////////////////////////////////////////////////////
//                                                                             //
// client/cursos/template.cursodiseño.js                                       //
//                                                                             //
/////////////////////////////////////////////////////////////////////////////////
                                                                               //
                                                                               // 1
Template.__checkName("cursodisenio");                                          // 2
Template["cursodisenio"] = new Template("Template.cursodisenio", (function() {
  var view = this;                                                             // 4
  return HTML.Raw('<div class="row">\n        <div class="col s6 m7">\n            <p>Ordenado por:</p>\n        </div>\n        <div class="input-field col s6 m5">\n          <input id="pregunta" type="text" class="validate">\n          <label for="pregunta">Escribe tu pregunta</label>     \n        </div>\n    </div>\n    <div class="row">\n        <div class="col s6 m7">\n            <a class="waves-effect waves-light btn">Prioridad</a>\n            <a class="waves-effect waves-light btn">Nuevos</a>\n        </div>\n        <div class="col s6 m5">\n            <a class="waves-effect waves-light btn">Mensajes</a>\n            <a class="waves-effect waves-light btn">Nuevos</a>\n            <a class="waves-effect waves-light btn">No resueltas</a>\n\n        </div>\n    </div>\n    \n    <div class="row">\n        <div class="col s6 m7">\n            <div class="card blue-grey darken-1">\n            <div class="card horizontal">\n                <div class="card-image">\n                    <img src="http://lorempixel.com/100/190/nature/6">\n                </div>\n                <div class="card-stacked">\n                    <div class="card-content">\n                        <p><h1>Material 1</h1></p>\n                        <a href="#">Archivos del curso</a>I\n                        <a href="#">Chat</a>\n                        <p>Aprenda Python con Django</p>\n                    </div>\n                </div>\n            </div>\n            </div>\n        </div>\n        <div class="col s6 m5">\n            <div class="card blue-grey darken-1">\n            <div class="card horizontal">\n                \n                <div class="card-stacked">\n                    <div class="card-content">\n                        <p>Seria genialsi pusieran los pasos para la</p>\n                        <a href="#">2 Respuestas</a>\n                    </div>\n                </div>\n                <div class="card-image">\n                    <img src="anonimo.png" height="150" width="150">\n                </div>\n            </div>\n            </div>\n        </div>\n    </div>\n\n    <div class="row">\n        <div class="col s6 m7">\n            <div class="card blue-grey darken-1">\n            <div class="card horizontal">\n                <div class="card-image">\n                    <img src="http://lorempixel.com/100/190/nature/6">\n                </div>\n                <div class="card-stacked">\n                    <div class="card-content">\n                        <p><h1>Material 1</h1></p>\n                        <a href="#">Archivos del curso</a>I\n                        <a href="#">Chat</a>\n                        <p>Aprenda Python con Django</p>\n                    </div>\n                </div>\n            </div>\n            </div>\n        </div>\n        <div class="col s6 m5">\n            <div class="card blue-grey darken-1">\n            <div class="card horizontal">\n                \n                <div class="card-stacked">\n                    <div class="card-content">\n                        <p>Seria genialsi pusieran los pasos para la</p>\n                        <a href="#">2 Respuestas</a>\n                    </div>\n                </div>\n                <div class="card-image">\n                    <img src="anonimo.png" height="150" width="150">\n                </div>\n            </div>\n            </div>\n        </div>\n    </div>\n\n    <div class="row">\n        <div class="col s6 m7">\n            <div class="card blue-grey darken-1">\n            <div class="card horizontal">\n                <div class="card-image">\n                    <img src="http://lorempixel.com/100/190/nature/6">\n                </div>\n                <div class="card-stacked">\n                    <div class="card-content">\n                        <p><h1>Material 1</h1></p>\n                        <a href="#">Archivos del curso</a>I\n                        <a href="#">Chat</a>\n                        <p>Aprenda Python con Django</p>\n                    </div>\n                </div>\n            </div>\n            </div>\n        </div>\n        <div class="col s6 m5">\n            <div class="card blue-grey darken-1">\n            <div class="card horizontal">\n                \n                <div class="card-stacked">\n                    <div class="card-content">\n                        <p>Seria genialsi pusieran los pasos para la</p>\n                        <a href="#">2 Respuestas</a>\n                    </div>\n                </div>\n                <div class="card-image">\n                    <img src="anonimo.png" height="150" width="150">\n                </div>\n            </div>\n            </div>\n        </div>\n    </div>');
}));                                                                           // 6
                                                                               // 7
/////////////////////////////////////////////////////////////////////////////////

}},"template.principal.js":function(){

/////////////////////////////////////////////////////////////////////////////////
//                                                                             //
// client/template.principal.js                                                //
//                                                                             //
/////////////////////////////////////////////////////////////////////////////////
                                                                               //
                                                                               // 1
Template.__checkName("contenido");                                             // 2
Template["contenido"] = new Template("Template.contenido", (function() {       // 3
  var view = this;                                                             // 4
  return HTML.Raw('<div class="col s12 m10 ">\n    <h2 class="header">CURSO DE DISEÑO Y DESARROLLO</h2>\n    <div class="card medium horizontal">\n      <div class="card-image">\n        <img src="disenio.jpg" width="100" height="200">\n      </div>\n      <div class="card-stacked">\n        <div class="card-content">\n          <p>I am a very simple card. I am good at containing small bits of information.</p>\n        </div>\n        <div class="card-action">\n          <a href="/cursos">click aqui para ver el curso</a>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n  <div class="parallax-container valign-wrapper">\n    <div class="section no-pad-bot">\n      <div class="container">\n        <div class="row center">\n          \n        </div>\n      </div>\n    </div>\n    <div class="parallax"><img src="background2.jpg" alt="Unsplashed background img 2"></div>\n  </div>\n\n   <div class="col s12 m10">\n    <h2 class="header">CURSO DE HTML 5</h2>\n    <div class="card horizontal medium">\n      <div class="card-image">\n        <img src="html5.jpg">\n      </div>\n      <div class="card-stacked">\n        <div class="card-content">\n          <p>I am a very simple card. I am good at containing small bits of information.</p>\n        </div>\n        <div class="card-action">\n          <a href="/">click aqui para ver el curso</a>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n  <div class="parallax-container valign-wrapper">\n    <div class="section no-pad-bot">\n      <div class="container">\n        <div class="row center">\n          <h5 class="header col s12 light">A modern responsive front-end framework based on Material Design</h5>\n        </div>\n      </div>\n    </div>\n    <div class="parallax"><img src="background3.jpg" alt="Unsplashed background img 3"></div>\n  </div>\n\n  <div class="col s12 m10 ">\n    <h2 class="header">CURSO DE NODE JS</h2>\n    <div class="card medium horizontal">\n      <div class="card-image">\n        <img src="node.jpg">\n      </div>\n      <div class="card-stacked">\n        <div class="card-content">\n          <p>I am a very simple card. I am good at containing small bits of information.</p>\n        </div>\n        <div class="card-action">\n          <a href="#">click aqui para ver el curso</a>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class="parallax-container valign-wrapper">\n    <div class="section no-pad-bot">\n      <div class="container">\n        <div class="row center">\n          <h5 class="header col s12 light">A modern responsive front-end framework based on Material Design</h5>\n        </div>\n      </div>\n    </div>\n    <div class="parallax"><img src="background3.jpg" alt="Unsplashed background img 3"></div>\n  </div>');
}));                                                                           // 6
                                                                               // 7
/////////////////////////////////////////////////////////////////////////////////

},"template.main.js":function(){

/////////////////////////////////////////////////////////////////////////////////
//                                                                             //
// client/template.main.js                                                     //
//                                                                             //
/////////////////////////////////////////////////////////////////////////////////
                                                                               //
                                                                               // 1
Template.__checkName("info");                                                  // 2
Template["info"] = new Template("Template.info", (function() {                 // 3
  var view = this;                                                             // 4
  return [ HTML.Raw('<nav class="white teal lighten-2" role="navigation ">\n    <div class="nav-wrapper container">\n      <a id="logo-container" href="#" class="brand-logo">Logo</a>\n      <ul class="right hide-on-med-and-down">\n        <li><a href="#"><i class="material-icons left">home</i>Home</a></li>\n        <li><a href="#"><i class="material-icons left">search</i>Buscar</a></li>\n      </ul>\n\n      <ul id="nav-mobile" class="side-nav">\n        <li><a href="#">Entrar</a></li>\n      </ul>\n      <a href="#" data-activates="nav-mobile" class="button-collapse"><i class="material-icons">menu</i></a>\n    </div>\n  </nav>\n\n  <div id="index-banner " class="parallax-container">\n    <div class="section no-pad-bot">\n      <div class="container">\n        <br><br>\n        <h1 class="header center teal-text text-lighten-2">SEMINARIO DE SISTEMAS</h1>\n        <div class="row center">\n          <h5 class="header col s12 light">es una moderma pagina utilizando materialize</h5>\n        </div>\n        <div class="row center">\n          <a href="" id="download-button" class="btn-large waves-effect waves-light teal lighten-1">Inicio</a>\n        </div>\n        <br><br>\n\n      </div>\n    </div>\n    <div class="parallax"><img src="/background1.jpg" alt="Unsplashed background img 1"></div>\n  </div>\n\n\n  '), Blaze._TemplateWith(function() {
    return {                                                                   // 6
      template: Spacebars.call(view.lookup("content"))                         // 7
    };                                                                         // 8
  }, function() {                                                              // 9
    return Spacebars.include(function() {                                      // 10
      return Spacebars.call(Template.__dynamic);                               // 11
    });                                                                        // 12
  }), HTML.Raw('\n\n\n  <footer class="page-footer teal">\n    <div class="container">\n      <div class="row">\n        <div class="col l6 s12">\n          <h5 class="white-text">Company Bio</h5>\n          <p class="grey-text text-lighten-4">We are a team of college students working on this project like it\'s our full time job. Any amount would help support and continue development on this project and is greatly appreciated.</p>\n\n\n        </div>\n        <div class="col l3 s12">\n          <h5 class="white-text">Settings</h5>\n          <ul>\n            <li><a class="white-text" href="#!">Link 1</a></li>\n            <li><a class="white-text" href="#!">Link 2</a></li>\n          </ul>\n        </div>\n        <div class="col l3 s12">\n          <h5 class="white-text">Connect</h5>\n          <ul>\n            <li><a class="white-text" href="#!">Link 1</a></li>\n            <li><a class="white-text" href="#!">Link 2</a></li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <div class="blue footer-copyright">\n      <div class="container">\n      © Copy-right 2017 <a class="brown-text text-lighten-3" href="http://materializecss.com">Materialize</a>\n      </div>\n    </div>\n  </footer>\n\n'), HTML.SCRIPT({
    type: "text/javascript",                                                   // 14
    src: "https://code.jquery.com/jquery-2.1.1.main.js"                        // 15
  }), "\n", HTML.SCRIPT({                                                      // 16
    type: "text/javascript",                                                   // 17
    src: "main.js"                                                             // 18
  }) ];                                                                        // 19
}));                                                                           // 20
                                                                               // 21
/////////////////////////////////////////////////////////////////////////////////

},"main.js":function(){

/////////////////////////////////////////////////////////////////////////////////
//                                                                             //
// client/main.js                                                              //
//                                                                             //
/////////////////////////////////////////////////////////////////////////////////
                                                                               //
(function ($) {                                                                // 1
    $(function () {                                                            // 2
        $('.button-collapse').sideNav();                                       // 4
        $('.parallax').parallax();                                             // 5
    }); // end of document ready                                               // 7
})(jQuery); // end of jQuery name space                                        // 8
                                                                               //
                                                                               //
Template.info.onRendered(function () {                                         // 10
    $('.button-collapse').sideNav();                                           // 11
    $('.parallax').parallax();                                                 // 12
});                                                                            // 13
var chip = {                                                                   // 17
    tag: 'chip content',                                                       // 18
    image: '',                                                                 // 19
    //optional                                                                 // 19
    id: 1                                                                      // 20
};                                                                             // 17
$('.chips-initial').material_chip({                                            // 24
    data: [{                                                                   // 25
        tag: 'Apple'                                                           // 26
    }, {                                                                       // 25
        tag: 'Microsoft'                                                       // 28
    }, {                                                                       // 27
        tag: 'Google'                                                          // 30
    }]                                                                         // 29
});                                                                            // 24
$('.chips-placeholder').material_chip({                                        // 33
    placeholder: 'Enter a tag',                                                // 34
    secondaryPlaceholder: '+Tag'                                               // 35
});                                                                            // 33
$('.chips-autocomplete').material_chip({                                       // 37
    autocompleteOptions: {                                                     // 38
        data: {                                                                // 39
            'Apple': null,                                                     // 40
            'Microsoft': null,                                                 // 41
            'Google': null                                                     // 42
        },                                                                     // 39
        limit: Infinity,                                                       // 44
        minLength: 1                                                           // 45
    }                                                                          // 38
});                                                                            // 37
/////////////////////////////////////////////////////////////////////////////////

}},"lib":{"routes.js":function(){

/////////////////////////////////////////////////////////////////////////////////
//                                                                             //
// lib/routes.js                                                               //
//                                                                             //
/////////////////////////////////////////////////////////////////////////////////
                                                                               //
FlowRouter.route('/', {                                                        // 1
    action: function (params, queryParams) {                                   // 2
        BlazeLayout.render("info", {                                           // 3
            content: "contenido"                                               // 3
        });                                                                    // 3
    }                                                                          // 4
});                                                                            // 1
FlowRouter.route('/cursos/', {                                                 // 6
    action: function (params, queryParams) {                                   // 7
        BlazeLayout.render("info", {                                           // 8
            content: "cursodisenio"                                            // 8
        });                                                                    // 8
    }                                                                          // 9
});                                                                            // 6
var chip = {                                                                   // 12
    tag: 'chip content',                                                       // 13
    image: '',                                                                 // 14
    //optional                                                                 // 14
    id: 1                                                                      // 15
};                                                                             // 12
/////////////////////////////////////////////////////////////////////////////////

}}},{"extensions":[".js",".json",".html",".css"]});
require("./client/cursos/template.cursodiseño.js");
require("./client/template.principal.js");
require("./client/template.main.js");
require("./lib/routes.js");
require("./client/main.js");