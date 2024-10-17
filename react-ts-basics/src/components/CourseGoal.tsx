import { CourseGoalProps } from '../App'

interface CourseGoalTypes extends CourseGoalProps {
  onDelete: (id: number) => void
}

const CourseGoal = ({ title, description, id, onDelete }: CourseGoalTypes) => {
  return (
    <div>
      <h2>{title}</h2>
      <h3>{description}</h3>
      <button onClick={() => onDelete(id)}>Delete goal</button>
    </div>
  )
}
export default CourseGoal
