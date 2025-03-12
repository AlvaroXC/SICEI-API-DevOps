const getAll = (req, res) =>{
    const students = [
        {
            name: "Alvaro Xool Canul",
            enrollmente: 21216382
        }, 
        {
            name: "David Perez Cruz",
            enrollmente: 21216383
        }, 
        {
            name: "Paulina Perera Bastarrachea",
            enrollmente: 21216384
        }, 
        {
            name: "Andrea Torres Perez",
            enrollmente: 21216385
        }, 
        {
            name: "Daniel Rosado Rodriguez",
            enrollmente: 21216386
        }, 
    ]

    return res.json(students)
}

export default getAll; 