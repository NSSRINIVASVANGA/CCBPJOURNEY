import {Chrono} from 'react-chrono'
import {Component} from 'react'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

const theme = {
  primary: '#0967d2',
  secondary: '#ffffff',
}

class TimelineView extends Component {
  render() {
    const {timelineItemsList} = this.props
    return (
      <div className="container">
        <h1 className="main-heading">
          {' '}
          MY JOURNEY OF <span>CCBP 4.0</span>{' '}
        </h1>
        <Chrono
          mode="VERTICAL_ALTERNATING"
          items={timelineItemsList}
          theme={theme}
        >
          {timelineItemsList.map(eachList => {
            if (eachList.categoryId === 'COURSE') {
              return <CourseTimelineCard details={eachList} key={eachList.id} />
            }
            return <ProjectTimelineCard details={eachList} key={eachList.id} />
          })}
        </Chrono>
      </div>
    )
  }
}

export default TimelineView
