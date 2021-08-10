import profilePicture from '../Assets/profilePicture.jpg'
function ProfilePicture() {
  return (
    <figure  >
      <img className="profile-picture" src={ profilePicture } alt=" " />
    </figure>
  )
}

export default ProfilePicture;
