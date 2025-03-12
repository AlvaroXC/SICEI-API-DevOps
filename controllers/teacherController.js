const getAll = (req, res) => {
    const teachers = [
        {
            name: "Victor Hugo",
            employee_number: 12345 
        },
        {
            name: "Antonio Aguileta",
            employee_number: 123456
        }, 
        {
            name: "Luis Basto",
            employee_number: 1234567
        },
        {
            name: "Julio Cesar",
            employee_number: 12345678
        },
        {
            name: "Francisco Moo",
            employee_number: 123456789
        }
    ]

    return res.json(teachers)
}

export default getAll