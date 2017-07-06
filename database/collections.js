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
