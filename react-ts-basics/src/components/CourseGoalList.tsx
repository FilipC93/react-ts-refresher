import { CourseGoalProps } from '../App'
import CourseGoal from './CourseGoal'

interface GoalListProps {
  courseGoals: CourseGoalProps[]
  onDelete: (id: number) => void
}

const CourseGoalList = ({ courseGoals, onDelete }: GoalListProps) => {
  return (
    <ul>
      {courseGoals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal
            title={goal.title}
            description={goal.description}
            id={goal.id}
            onDelete={onDelete}
          />
        </li>
      ))}
    </ul>
  )
}

export default CourseGoalList
