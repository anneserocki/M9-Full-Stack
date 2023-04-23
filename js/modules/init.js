// GET DATA FROM EMPLOYEES THROUGH API
async function fetchEmployees() {
    try {
        const response = await fetch('../data/employees.json'); 
        const employees = await response.json();
        return employees;        
    } 
    catch (error) {
        console.error(error);
    };
};
fetchEmployees();

// EXPORT fetchEmployees()
export {fetchEmployees};