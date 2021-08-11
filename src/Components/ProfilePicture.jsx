import { profileImg } from '../Assets'
function ProfilePicture() {
  return (
    <figure  >
      <img className="profile-picture" src={ profileImg } alt="Leonardo" />
    </figure>
  )
}

export default ProfilePicture;
