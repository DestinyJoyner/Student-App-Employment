import "./StudentCard.scss"
function StudentCard(props) {
    return (
        <div className = "studentCard">
        <div className="studentCard_image-container">
          <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/640px-SNice.svg.png" className="studentCard_image" />
        </div>
        
        <section className = "student-card-info">
          <h2 className = "student-card-name"> Ingaberg Orton </h2>
          <div className = "student-card-info-details">
            <span>Email:</span>
            <span>Company:</span>
            <span>Skill:</span>
            <span>Average: 88.75%</span>
          </div>
        </section>
      </div>
    );
}

export default StudentCard;