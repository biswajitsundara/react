const EmployeeCard = (props) => {
  return (
    <div>
      <h1>
        Employee Name: {props.name} husband: {props.husband}
      </h1>
      {props.children}
    </div>
  );
};

export default EmployeeCard;
