import { useEffect, useState } from "react";
import CRUD_OP from "../services/Employee.services";
import Navbar from "../navbar/Navbar";
import { useLocation, useNavigate } from "react-router-dom";

const { updateEmployee } = CRUD_OP;

export default function AddEmp() {
    const { state } = useLocation()
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState();
    const [age, setAge] = useState();
    const [address, setAddress] = useState("");
    const [dept, setDept] = useState("");
    const [empType, setEmpType] = useState("");
    const [salary, setSalary] = useState();
    const [message, setMessage] = useState({ error: false, msg: "" });

    useEffect(() => {
        if (state) {
            setName(state.name || "");
            setEmail(state.email || "");
            setPhone(state.phone || "");
            setAge(state.age || "");
            setAddress(state.address || "");
            setDept(state.dept || "");
            setEmpType(state.empType || "");
            setSalary(state.salary || "");
        }
    }, [state])

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (
            !name ||
            !email ||
            !phone ||
            !age ||
            !address ||
            !dept ||
            !empType ||
            !salary
        ) {
            setMessage({ error: true, msg: "All fields are mandatory..." });
            return;
        }
        const updatedEmp = {
            name,
            email,
            phone,
            age,
            address,
            dept,
            salary,
            empType,
        };
        setMessage("");
        // console.log(newEmp);
        try {
            await updateEmployee(state.id, updatedEmp);
            setMessage({ error: false, msg: "Employee updated successfully...,redirecting to home in 3 sec." });
            setTimeout(() => {
                navigate("/");
            }, 3000)

        } catch (err) {
            console.log(err);
            setMessage({ error: true, msg: err.message });
        }

    };

    const navigate = useNavigate();

    // console.log(name, email, age, phone, address, dept, salary, empType);

    return (
        <div className="addEmp">
            <Navbar />
            {message?.msg && (
                <div
                    className="container-fluid d-flex justify-content-between align-items-center"
                    role="alert"
                    style={{
                        fontSize: "1.4rem",
                        backgroundColor: "lightgray",
                        fontWeight: "500",
                    }}
                >
                    <p className={message?.error ? "text-danger" : "text-success"}>
                        {message?.msg}
                    </p>
                    <div className="btn-cont p-2 m-2">
                        <button
                            className="btn btn-danger"
                            onClick={() => {
                                setMessage("");
                                navigate("/");
                            }}
                        >
                            Click to remove alert.
                        </button>
                    </div>
                </div>
            )}

            <div className="container-fluid d-flex justify-content-center align-items-center mt-2">
                <form
                    className="bg-warning w-75 h-75 p-1 rounded-2 h-50"
                    onSubmit={handleSubmit}
                >
                    <h3 className="text-center">Update an Employee</h3>
                    <div className="mb-3 d-flex justify-content-space-between align-items-center">
                        <label htmlFor="exampleInputPassword1" className="form-label">
                            Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleInputPassword1"
                            name="name" value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <label htmlFor="exampleInputEmail1" className="form-label mx-2">
                            Email
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            name="email" value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">
                            Address
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleInputPassword1"
                            name="address" value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>
                    <div className="mb-3 d-flex justify-content-space-between align-items-center">
                        <label htmlFor="exampleInputPassword1" className="form-label">
                            Age
                        </label>
                        <input
                            type="text"
                            className="form-control w-25"
                            id="exampleInputPassword1"
                            name="age" value={age}
                            onChange={(e) => setAge(e.target.value)}
                        />
                        <label htmlFor="exampleInputPassword1" className=" mx-2 form-label">
                            Phone
                        </label>
                        <input
                            type="text"
                            className="form-control w-50"
                            id="exampleInputPassword1"
                            name="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <div className="mb-3 d-flex justify-content-space-between align-items-center">
                        <label htmlFor="exampleInputPassword1" className="form-label">
                            Employement Type
                        </label>
                        <input
                            type="text"
                            className="form-control w-25"
                            id="exampleInputPassword1"
                            name="empType"
                            value={empType}
                            onChange={(e) => setEmpType(e.target.value)}
                        />
                        <label htmlFor="exampleInputPassword1" className=" mx-2 form-label">
                            Dept.
                        </label>
                        <input
                            type="text"
                            className="form-control w-25"
                            id="exampleInputPassword1"
                            name="dept"
                            value={dept}
                            onChange={(e) => setDept(e.target.value)}
                        />
                        <label htmlFor="exampleInputPassword1" className=" mx-2 form-label">
                            Salary
                        </label>
                        <input
                            type="text"
                            className="form-control w-25"
                            id="exampleInputPassword1"
                            name="salary"
                            value={salary}
                            onChange={(e) => setSalary(e.target.value)}
                        />
                    </div>
                    <div className="submit-btn-cont d-flex flex-column justify-content-center align-items-center">
                        <button type="submit" className="btn btn-primary w-50">
                            Submit
                        </button>
                        <p className="mt-2">
                            Go to
                            <a href="/">home</a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}
