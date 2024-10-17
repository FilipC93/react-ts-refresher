import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import CourseGoalList from './components/CourseGoalList'
import NewGoal from './components/NewGoal'

export type CourseGoalProps = {
  title: string
  description: string
  id: number
}

const App = () => {
  const [courseGoals, setCourseGoals] = useState<CourseGoalProps[]>([])

  const handleGoals = (goal: string, summary: string): void => {
    setCourseGoals((prevGoals) => {
      const newGoals: CourseGoalProps = {
        title: goal,
        description: summary,
        id: Math.random()
      }
      return [...prevGoals, newGoals]
    })
  }

  const handleDeleteGoal = (id: number) => {
    setCourseGoals((prevGoal) =>
      prevGoal.filter((goalArr) => goalArr.id !== id)
    )
  }

  return (
    <>
      <Header image={{ src: viteLogo, alt: 'courseAlt' }}>
        Your course goals
      </Header>
      <NewGoal onAddingGoal={handleGoals} />
      <CourseGoalList courseGoals={courseGoals} onDelete={handleDeleteGoal} />
    </>
  )
}

export default App
