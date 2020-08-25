const createEmployee = (employee = []) => {
    return employee.map(item => {
        const {id, employee_name, employee_salary, employee_age, profile_image, base} = item;
        return {id, employee_name, employee_salary, employee_age, profile_image, ...base}
    })
}

export default createEmployee;