FILES =new FilesCollection({

storagePath:"//home/karen/Documentos/files_cursos",

  downloadRoute: "/home/karen/Documentos/files_cursos/download",
  collectionName: "files",
  chunkSize: 1024 * 2048,
  /*throttle: 1024 * 512,
  permissions: 0755,*/
  allowClientCode: false  /*,
  cacheControl: 'public, max-age=31536000'*/
});
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
    }
});
Curso.attachSchema(CursoSchema);

Material = new Mongo.Collection("material");
var MaterialSchema = new SimpleSchema({
     title: {
     	type:String 
     },
      description: {
        type: String
    },
});
Material.attachSchema(MaterialSchema);
