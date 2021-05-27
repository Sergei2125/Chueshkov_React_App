import "./styles.scss";

const UserCard = ({ userName, userAge, userLastname }) => {
  return (
    <div className="wrapper">
      <p>Name: {userName}</p>
      <p>Lastname: {userLastname}</p>
      <p>Age: {userAge}</p>
    </div>
  );
};

export default UserCard;
