import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {details} = props

  return (
    <div className="card">
      <img src={details.imageUrl} alt="project" className="image" />
      <div className="heading-con">
        <h1 className="heading"> {details.projectTitle} </h1>
        <div className="duration-con">
          <AiFillCalendar />
          <p> {details.duration} </p>
        </div>
      </div>
      <p className="desc"> {details.description} </p>
      <a
        href={details.projectUrl}
        rel="noreferrer"
        target="_blank"
        className="link"
      >
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
