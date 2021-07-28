import profilePicture from '../Data/profilePicture.jpg'
function ProfilePicture() {
  return (
    <figure className="profile-picture" >
      <img src={ profilePicture } alt=" " />
    </figure>
  )
}

export default ProfilePicture;
