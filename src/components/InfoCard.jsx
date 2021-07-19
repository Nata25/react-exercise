import { Card, Box } from './material-ui'

const InfoCard = ({ item }) => {
  const { id, name, email, phone, text, date, title } = item
  return (
    <Card variant="outlined">
      <Box component="article" p={3}>
        {title && <h3>{title}</h3>}
        {name && <h4>{name}</h4>}
        {email && <p>
          <a href={`mailto:${email}`} target="blank"
            >
            {email}
          </a>
        </p>}
        {phone && <p>
          <a href={`tel:${phone}`}>
          {phone}
          </a>
        </p>}
        {text && <p>{text}</p>}
        {date && <p>{date}</p>}
        <p>(id: {id})</p>
      </Box>
    </Card>
  )
}

export default InfoCard
