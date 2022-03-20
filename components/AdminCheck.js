const AdminCheck = (props) => {
  const admins = ["austin@kibler.dev"];
  console.log(props.email);
  if (admins.includes(props.email)) {
    console.log("Admin 😎");
    return true;
  }
  console.log("Not Admin 😞");
  return false;
};

export default AdminCheck;
