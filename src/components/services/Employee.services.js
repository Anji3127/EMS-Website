import { db } from "../../../config/firebase-config";
import {
  collection,
  getDocs,
  // getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

// Get the collection reference from DB...
const employeeCollectionRef = collection(db, "Employees");

// Get all the employee...
const getEmployees = () => {
  const employeeList = getDocs(employeeCollectionRef);
  return employeeList;
};

// this method is used to get single employee 
const getEmployee = (id) => {
  const employeeDoc = doc(db, "Employees", id);
  return employeeDoc;
};

// Add Employee...
const addEmployee = (newEmp) => {
  return addDoc(employeeCollectionRef, newEmp);
};

// Update Employee...
const updateEmployee = (id, updatedEmployee) => {
  // first find the employee in doc
  const employeeDoc = doc(db, "Employees", id);
  return updateDoc(employeeDoc, updatedEmployee);
};

// Delete an employee...
const deleteEmployee = (id) => {
  const employeeDoc = doc(db, "Employees", id);
  return deleteDoc(employeeDoc);
};

const CRUD_OP = {
  getEmployees,
  getEmployee,
  addEmployee,
  updateEmployee,
  deleteEmployee,
};

export default CRUD_OP;
