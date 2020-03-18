const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const User = require("../models/User");

exports.avik = (req, res) => {
    res.json({cdfg: "avik is calling"});
};

exports.test = (req, res) => {
    res.json({msg: "hello"});
}

exports.insertRecord = (req, res) => {
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        mobile: req.body.mobile,
        address: req.body.address
    });
    newUser.save().then(res => {}).catch(err => console.log(err));
    res.json({msg: "inserted successfully"});
}

exports.insertManyRecord = (req, res) => {
    const users = req.body;
    User.insertMany(users, {ordered: false}).then(response => res.json(response)).catch(err => console.log(err));
}

exports.getAllUsers = (req, res) => {
    // inefficient query
    User.find({}, {_id: 0, name: 1, email: 1, mobile: 1}).sort({name: 1}).skip(3).limit(3).then(response => res.json(response)).catch(err => console.log(err));
    
    // efficient query
    // User.aggregate(
    //     [
    //         { $match: {} },
    //         { 
    //             $project: {
    //                 _id: 0,
    //                 name: 1,
    //                 email: 1
    //             }
    //         }
    //     ],
    //     (err, response) => {
    //         if(err) {
    //             res.status(400);
    //             res.send(err);
    //         } else {
    //             res.status(200);
    //             res.send(response);
    //         }
    //     }
    // );
}

exports.getOneUserById = (req, res) => {
    const id = mongoose.Types.ObjectId(req.params.id);
    User.findOne({"_id": id}).then(response => res.json(response)).catch(err => console.log(err));
}

exports.updateUser = (req, res) => {
    const id = mongoose.Types.ObjectId(req.params.id);
    User.updateOne({_id: id}, {$set: req.body}, {upsert: true}).then(response => res.json(response)).catch(err => console.log(err));
}

exports.updateManyUsers = (req, res) => {
    User.updateMany({}, {$set: {"city": "Bengaluru"}}).then(response => res.json(response)).catch(err => console.log(err));
}

exports.deleteUser = (req, res) => {
    const id = mongoose.Types.ObjectId(req.params.id);
    User.deleteOne({_id: id}).then(response => res.json(response)).catch(err => console.log(err));
}

exports.deleteManyUsers = (req, res) => {
    User.deleteMany({}).then(response => res.json(response)).catch(err => console.log(err));
}