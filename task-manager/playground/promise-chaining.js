require('../src/db/mongoose');
const User = require('../src/models/user');

// 5ea13aa95bcc702fbce8bc66

// User.findByIdAndUpdate('5ea1dba34312fd5af874502f', { age: 21 }).then((user) => {
//     console.log(user)
//     return User.countDocuments({age: 21})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount("5ea13932a8942f41848ffc48", 18).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})