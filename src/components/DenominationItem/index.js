// Write your code here
import './index.css'

const DenominationItem = prop => {
  const {eachItem, withdrawAmount} = prop
  const clickButton = () => {
    withdrawAmount(eachItem.value)
  }
  return (
    <li>
      <button className="button" type="button" onClick={clickButton}>
        {eachItem.value}
      </button>
    </li>
  )
}

export default DenominationItem
