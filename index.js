const employee = {
    name: 'Jimmy Corndog',
    streetAddress: '123 Maple Dickway'
};

function updateEmployeeWithKeyAndValue(emp, key, val) {
    const newEmployee = {...emp};
    newEmployee[key] = val;
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(emp, key, val) {
    emp[key] = val;
    return emp;
};

function deleteFromEmployeeByKey(emp, key) {
    const newEmployee = {...emp};
    delete newEmployee[key];
    return newEmployee;
};

function destructivelyDeleteFromEmployeeByKey(emp, key) {
    delete emp[key];
    return emp;
}