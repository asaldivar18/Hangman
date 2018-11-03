const express = require('express');
const router = express.Router();

const User = require('../../public/schemas/User')


router.get('/', (req, res) => {
    User.find()
        .then(items => {
            console.log(res.json(items))
        })
})

router.post('/', (req, res) => {
        console.log(req);
        if (req.body.email &&
            req.body.username &&
            req.body.password) {
            var userData = {
                    email: req.body.email,
                    username: req.body.username,
                    password: req.body.password,
                    passwordConf: req.body.passwordConf,
                }
                //use schema.create to insert data into the db
            User.create(userData, function(err, user) {
                if (err) {
                    return next(err)
                } else {
                    return res.redirect('/');
                }
            });
        }
    })
    // // @route GET api/quizzes
    // router.get('/', (req, res) => {
    //     Quiz.find()
    //         .then(items => {
    //             console.log(res.json(items))
    //         })
    // })

// // @route POST api/quizzes
// router.post('/', (req, res) => {
//     Quiz.deleteMany({}).then(() => {
//         req.body.forEach(obj => {
//             var newQuiz = new Quiz(obj)
//             newQuiz.save(); //
//         });
//     }).catch(err => { console.log(err) })
// })


// router.delete('/:id', (req, res) => {
//     Quiz.findById(req.params.id)
//         .then(quiz => quiz.remove().then(() => res.json({ success: true }))).catch(err => res.status(404).json({ success: false }))
// })


module.exports = router;