// IMPORT fetchEmployees()
import {fetchEmployees} from './modules/init.js';

// GET DOM ELEMENTS
let empTable    = document.querySelector('#employees')
let empCount    = document.querySelector('#empCount')

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
buildGrid(employees)

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        // CONFIRM THE DELETE
        if (confirm('Are you sure you want to delete this employee?')) {
            // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
            let rowIndex = e.target.parentNode.parentNode.rowIndex
            // REMOVE EMPLOYEE FROM ARRAY
            empTable.deleteRow(rowIndex)
        }
    }
})

// BUILD THE EMPLOYEES GRID
async function buildGrid(employees) {
    const tableData = await fetchEmployees();    
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    empTable.lastElementChild.remove()
    // REBUILD THE TBODY FROM SCRATCH
    let tbody = document.createElement('tbody')
    // DUPDATE THE TBODY WITH THE DATA
    // REBUILDING THE ROW STRUCTURE
    tableData.forEach(item => {
        // CREATE ROW
        const row = document.createElement('tr');
        // CREATE COLUMN
        row.innerHTML = `        
          <td>${item.id}</td>
          <td>${item.name}</td>
          <td>${item.extention}</td>
          <td>${item.email}</td>
          <td>${item.department}</td>
          <td><button class="btn btn-sm btn-danger delete">X</button></td>
        `;
        // APPEND ROW TO TBODY
        tbody.appendChild(row);
      });          
   
    // BIND THE TBODY TO THE EMPLOYEE TABLE
    empTable.appendChild(tbody)
   
    // GET THE TOTAL NUMBER OF RECORDS
    const totalRecords = tableData.length;
    // SHOW THE TOTAL NUMBER ON THE PAGE
    empCount.value = `(${totalRecords})`;
};