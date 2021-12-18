const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentDetailsSchema= new Schema({

    mobileNumber: Number,
    landLineNumber: Number,
    address: String

});

const studentSchema= new Schema({

        name:{
            type : String,
            required :true
        },
        id:{
            type : Number,
            required : true
        },
        des:{
            type : String,
            required : true
        },
        role:{
            type : String,
            required : true
        },
        parent_card:{
            type : Number,
            required : true
        },
        time_duration:{
            type: String,
            required:true
        },

        details:[studentDetailsSchema]


        // mobile:[{
        //     type: String,
        //     required: true
        // },{
        //     type: String,
        //     required: true
        // } ]
        // date:{
        //     type :Date,
        //     required:true
        // },
        // role:{
        //     type: String,
        //     required: true
        // }

});

const Student = mongoose.model("Student",studentSchema);

module.exports= Student;