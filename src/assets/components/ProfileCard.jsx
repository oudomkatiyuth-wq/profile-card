
function ProfileCard({ name, image}) {
  return (
    <div className="card">

      <img src={image} 
      alt={name} 
      />

      <h1>{name}</h1>
<div className="abc">
  
  <p className="html">HTML & CSS</p>
  <p className="php">PHP</p>
  <p className="js">JavaScript</p>
</div>

  <button>Hire me!</button>
</div>
); }
export default ProfileCard;
