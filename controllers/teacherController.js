const getAll = (req, res) => {
    const teachers = [
        {
            nombre: "Victor Hugo",
            num_empleado: 12345 
        },
        {
            nombre: "Antonio Aguileta",
            num_empleado: 123456
        }, 
        {
            nombre: "Luis Basto",
            num_empleado: 1234567
        },
        {
            nombre: "Julio Cesar",
            num_empleado: 12345678
        }
    ]

    return res.json(teachers)
}

export default getAll