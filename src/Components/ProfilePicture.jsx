import profilePicture from '../Data/profilePicture.jpg'
function ProfilePicture() {
  return (
    <figure  >
      <img className="profile-picture" src={ profilePicture } alt=" " />
    </figure>
  )
}

export default ProfilePicture;
