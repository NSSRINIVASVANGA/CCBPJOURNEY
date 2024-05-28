import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {details} = props

  return (
    <div className="card">
      <div className="heading-con">
        <h1 className="heading"> {details.courseTitle} </h1>
        <div className="duration-con">
          <AiFillClockCircle />
          <p> {details.duration} </p>
        </div>
      </div>
      <p className="desc"> {details.description} </p>
      <ul className="list-con">
        {details.tagsList.map(eachTag => (
          <li className="tag" key={eachTag.id}>
            <p> {eachTag.name} </p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
