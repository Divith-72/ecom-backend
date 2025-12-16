const userModel = require("../model/User");

exports.getUser = async(req,res)=> {
    try{
        const user = await userModel.find();
        res.json(user)
    }catch(error){
        console.error(error);
        res.status(500).json({error:'server error'});
    }
}

exports.postUser = async(req,res) => {
    const{name,email,password,address} = req.body;

    try{
        const newUser = new userModel({name,email,password,address});
        await newUser.save();
        res.status(201).json(newUser);
    }catch(error){
        console.error("error in posting");
        res.status(500).json({ error:'server error'});
    }
}

exports.deleteUser = async (req, res) => {
    const id = req.params.id;
    const deleted = await userModel.findByIdAndDelete(id);
    if (!deleted) {
        return res.status(404).json({ message: "Product not found" })
    }
    res.status(204).json({ message: "Record deleted" })
}

exports.updateUser = async(req,res) => {
    try{
        const id = req.params.id;
        const{name,email,password,address} =req.body;

        const updatednewUser = await userModel.findByIdAndUpdate(
            id,{name,email,password,address},{new:true}
        )
        if(!updated){
            return res.status(404).json({message:"User not found"})
        }
        res.json(updatednewUser)
    }catch(error){
        console.error("error in posting");
        res.status(500).json({error:'Server Error'});
    }
}