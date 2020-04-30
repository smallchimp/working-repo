// let square = function(x) {
//     return x * x
// }

// let square = (x) => {
//     return x * x
// }

// let square = (x) => x * x

// console.log(square(2))

let event = {
    name: "Thomas's Birthday Party",
    guestList: ['Andrew', 'Jen', 'Mike'],
    printGuestList: function () {
        console.log('Guest list for ' + this.name)
        
        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)

        })
    }
}

event.printGuestList()