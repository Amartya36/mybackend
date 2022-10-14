const express = require('express');
const router = express.Router();///test-you
//importing a custom module
const xyz = require('../logger/logger')
const helper = require('../util/helper')
const validator = require('../validator/formatter')
const lodash = require('lodash')
//importing external package
const underscore = require('underscore')

router.get('/test-me', function (req, res) {console.log(xyz.Name())
    console.log(helper.day())
    console.log(helper.month())

    console.log("batch detals: ",helper.batchinfo()) 
    console.log("trim :" ,validator.trim())
    console.log("lowercase :", validator.LowerCase())
    console.log("uppercase :", validator.UpperCase())
    let arr =['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec']
    let array=lodash.chunk(arr,3)
    console.log(array)
    let no=[1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
    let nob=lodash.tail(no)
    console.log(nob)
    let unik =lodash.union([1,4],[4,5],[2,3],[8,1],[4,2])
   
    console.log(unik)
    let abc=lodash.fromPairs ([["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]])
    console.log(abc)
    //Calling the components of a different custom module
    // console.log("Calling my function ",xyz.myFunction())
    // console.log("The value of the constant is ",xyz.myUrl)
    // //Trying to use an external package called underscore
    // let myArray = ['Akash', 'Pritesh', 'Sabiha']
    // let result = underscore.first(myArray)
    // console.log("The result of underscores examples api is : ", result)
    
    res.send('My first ever api!')

    //To be tried what happens if we send multiple response
    //res.send('My second api!')
});

module.exports = router;

