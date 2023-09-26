import { useParams } from 'react-router-dom'

const Info = () => {
  const { id } = useParams()

  return (
    <div>Mais Info sobre o produto { id }</div>
  )
}

export default Info