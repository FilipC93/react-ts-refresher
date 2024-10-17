import { useRef, type FormEvent } from 'react'

interface newGoalProps {
  onAddingGoal: (goal: string, summary: string) => void
}

const NewGoal = ({ onAddingGoal }: newGoalProps) => {
  const goalRef = useRef<HTMLInputElement>(null)
  const summaryRef = useRef<HTMLInputElement>(null)
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    const enteredGoal = goalRef.current!.value
    const enteredSummary = summaryRef.current!.value
    onAddingGoal(enteredGoal, enteredSummary)
  }

  const inputKeys = [
    { label: 'Your goal', id: 'goal', type: 'text', ref: goalRef },
    { label: 'Short summary', id: 'summary', type: 'text', ref: summaryRef }
  ]

  return (
    <form onSubmit={handleSubmit}>
      {inputKeys.map((element, index) => (
        <p key={index} style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor={element.id} style={{ marginBottom: '0.5rem' }}>
            {element.label}
          </label>
          <input id={element.id} type={element.type} ref={element.ref} />
        </p>
      ))}
      <button
        type="submit"
        style={{ backgroundColor: 'blue', color: 'whitesmoke' }}
      >
        Add goal
      </button>
    </form>
  )
}

export default NewGoal
