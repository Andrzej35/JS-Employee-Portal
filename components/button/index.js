import PropTypes from 'prop-types'

const ButtonMore = (props) => <button type="button" onClick={(e) => props.showModal()} className="btn btn-info">More <i className="fas fa-caret-down"></i></button>

ButtonMore.propTypes = {
    showModal: PropTypes.func
}

export default ButtonMore
