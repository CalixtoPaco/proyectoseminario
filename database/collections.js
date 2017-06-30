/*FILES = new FilesCollection({
	storagePath: "/home/paco/Documentos/files_proyect",
	downloadRoute: "/home/paco/Documentos/files_proyect/download",
	collectionName: "files",
	allowClient: false
});*/
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

