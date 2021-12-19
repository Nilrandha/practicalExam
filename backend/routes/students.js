const router= require("express").Router();
let Student = require("../models/student");


//create

router.route("/add").post((req,res)=>{

    const name = req.body.name;
    const id = Number(req.body.id);
    const des = req.body.des;
    const role = req.body.role;
    const parent_card = Number(req.body.parent_card);
    const time_duration = req.body.time_duration;
    const details = req.body.details;
    //const mobile = req.body.mobile;
    

    const newStudent = new Student({
        name,
        id,
        des,
        role,
        parent_card,
        time_duration,
        details
        //description
        
       
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
router.route("/update/:idd").put(async (req,res)=>{
    let userId = req.params.idd;
    //dre structure
    const {name,id,des,role,parent_card,time_duration,details} = req.body;
    
    const updateStudent ={
        name,
        id,
        des,
        role,
        parent_card,
        time_duration,
        details
       // description
    }
    const update = await Student.findByIdAndUpdate(userId, updateStudent)
    .then(()=>{
        res.status(200).send({status:"User updated"})
    }).catch((err)=>{
        res.status(500).send({status:"Error with updating data"});
    })
})

//Delete
 router.route("/:id").delete(async (req,res)=>{
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