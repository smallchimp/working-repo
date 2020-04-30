require('../src/db/mongoose');
const Task = require('../src/models/task');

// Task.findByIdAndDelete("5ea13cc030ff8e5740dbd04b").then((task)=>{
//     console.log(task)
//     return Task.countDocuments({completion: false})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// });

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completion: false})
    return count
}

deleteTaskAndCount("5ea13cb533cfaa2e4ce01fed").then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})