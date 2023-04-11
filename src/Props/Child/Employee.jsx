import EmployeeCard from "./EmployeeCard"

const Employee = () => {
  return (
    <div>
      <EmployeeCard name="Aishwarya" husband="Abhishek" />
      <EmployeeCard name="Kajol" husband="Ajay">
        <button>More Details</button>
      </EmployeeCard>
      <EmployeeCard name="Katrina" husband="Vicky">
        <p>Katrina is recently married</p>
      </EmployeeCard>
    </div>
  );
};

export default Employee;
