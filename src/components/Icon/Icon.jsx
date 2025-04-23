import PropTypes from 'prop-types'

const Icon = ({ name, size = 24, color = 'currentColor' }) => (
  <svg width={size} height={size} color={color}>
    <use xlinkHref={`/sprite.svg#${name}`} />
  </svg>
)

export default Icon

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string
}
