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
    storagePath: '/home/paco/Documentos/files_proyect',
    downloadRoute: '/home/paco/Documentos/files_proyect/download',
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
    }
});
Material.attachSchema(MaterialSchema);
