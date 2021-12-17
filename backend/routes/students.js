const router= require("express").Router();
let Student = require("../models/student");


//create

router.route("/add").post((req,res)=>{

    const name = req.body.name;
    const age = Number(req.body.age);
    const gender = req.body.gender;

    const newStudent = new Student({
        name,
        age,
        gender
    })

    newStudent.save().then(()=>{
        
        res.json("Student Added")

    }).catch((err)=>{
       
        console.log(err);

    })

})

//GET
router.route("/").get((req,res)=>{

    Student.find().then((students)=>{
        res.json(students)
    }).catch((err)=>{
        console.log(err);
    })

})


//PUT
router.route("/update/:id").put(async (req,res)=>{
    let userId = req.params.id;
    //dre structure
    const {name,age,gender} = req.body;
    
    const updateStudent ={
        name,
        age,
        gender
    }
    const update = await Student.findByIdAndUpdate(userId, updateStudent)
    .then(()=>{
        res.status(200).send({status:"User updated"})
    }).catch((err)=>{
        res.status(500).send({status:"Error with updating data"});
    })
})

//Delete
 router.route("/delete/:id").delete(async (req,res)=>{
        let userId = req.params.id;

      await Student.findByIdAndDelete(userId).then(()=>{
            res.json("user deleted")
        }).catch((err) => {
            console.log(err);
        })
 })

 //One user

router.route("/get/:id").get(async (req,res)=>{
    let userId = req.params.id;
    
    const user =  await Student.findById(userId)
    .then((student)=>{
        res.status(200).send({status: "User fetched",student})
    }).catch((err)=>{
        console.log(err.message);
    })
})




module.exports = router;