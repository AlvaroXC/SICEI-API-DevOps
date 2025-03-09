const getAll = (req, res) =>{
    const students = [
        {
            nombre: "Alvaro",
            matricula: 21216382
        }, 
        {
            nombre: "David",
            matricula: 21216383
        }, 
        {
            nombre: "Paulina",
            matricula: 21216384
        }, 
        {
            nombre: "Andrea",
            matricula: 21216385
        }, 
        {
            nombre: "Daniel",
            matricula: 21216386
        }, 
    ]

    return res.json(students)
}

export default getAll; 