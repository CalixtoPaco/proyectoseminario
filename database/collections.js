Curso = new Mongo.Collection("curso");
var CursoSchema = new SimpleSchema({
    titulo: {
        type: String
    },
    descripcion: {
        type: String
    },
    fecha: {
        type: String
    },
    idpro:{
    	type: String
    },
    imgcur:{
      type: String
    }
});
Curso.attachSchema(CursoSchema);

imgCurso = new FilesCollection({
    collectionName: 'imgCurso',
    allowClientCode: false,
    storagePath: '/home/karen/Documentos/files_proyect',
    //downloadRoute: '/home/paco/Documentos/files_proyect/download',

    permissions: 0755,
    cacheControl: 'public, max-age=3153600'
});

Material = new Mongo.Collection("material");
var MaterialSchema = new SimpleSchema({
     title: {
     	type:String 
     },
      description: {
        type: String
    },
    video:{
        type: String
    },
    archivo:{
        type: String
    },
    idcurso: {
        type: String
    }
});
Material.attachSchema(MaterialSchema);


Pregunta = new Mongo.Collection("pregunta");
var PreguntaSchema = new SimpleSchema({
   id_user: {
        type: String
    },
  text: {
    type: String
  },
  date2: {
    type: Date
  }/*,
  idUs: {
    type: String,
    autoValue: function(){
        return Accounts.user()._id;
    } 
  }*/
});
Pregunta.attachSchema(PreguntaSchema);

Respuesta = new Mongo.Collection("respuesta");
 var RespuestaSchema = new SimpleSchema({
   mensaje: {
     type:String
   },
   date3: {
     type:Date
   }

 });
Respuesta.attachSchema(RespuestaSchema);
CHAT = new  Mongo.Collection("chat");
var chatSchema = new SimpleSchema({
  idSource: {
      type:String
  },
  idDestination: {
      type:String
  },
  date: {
      type:Date
  },
  message: {
      type:String
  }
});
CHAT.attachSchema(chatSchema)