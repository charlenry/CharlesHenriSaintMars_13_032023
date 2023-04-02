import { editProfile } from "../redux/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";

const DashboardHeader = ({ firstName, lastName, token, updateProfileSuccess }) => {
  const [newFirstName, setNewFirstName] = useState("");
  const [NewLastName, setNewLastName] = useState("");
  const [isEditingName, setIsEditingName] = useState(false);
  const dispatch = useDispatch();

  const handleEditName = (e) => {
    e.preventDefault();
    setIsEditingName(!isEditingName);
  };

  const HandleSave = (e) => {
    e.preventDefault();
    dispatch(editProfile(token, newFirstName, NewLastName));
    if ({ updateProfileSuccess }) {
      setIsEditingName(!isEditingName);
    }
  };

  return (
    <>
      {!isEditingName ? (
        <div className="header">
          <h1>
            Welcome back
            <br />
            {`${firstName} ${lastName}!`} 
          </h1>
          <button onClick={handleEditName} className="edit-button">
            Edit Name
          </button>
        </div>
      ) : (
        <div className="header">
          <h1>Welcome back</h1>
          <form className="edit-name-form">
            <div className="edit-name-inputs">
              <input
                type="text"
                placeholder={firstName}
                onChange={(e) => setNewFirstName(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder={lastName}
                onChange={(e) => setNewLastName(e.target.value)}
                required
              />
            </div>
            <div className="buttons-wrapper">
              <button className="save-button" onClick={HandleSave}>
                Save
              </button>
              <button className="cancel-button" onClick={handleEditName}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default DashboardHeader;
