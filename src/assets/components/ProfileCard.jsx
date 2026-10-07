function ProfileCard( ) {
  const skills =[
    {id:1,name:"Html",color:"red"},
    {id:1,name:"Php",color:"blue"},
    {id:1,name:"javascrip",color:"green"},
  ]
 
  return (
    <div className="card">
      <img src="/profile.jpg" alt="" />
      
      <h1>Anissa W. Glenn</h1>

      <div className="abc">
   
          {
            skills.map((s)=>(<span 
              key={s.id} 
              className="skill"
              style={{backgroundColor:s.color}}>{s.name}</span>))
         
          }
    
      </div>

      <button>Hire me!</button>
    </div>
  );
}
export default ProfileCard;
