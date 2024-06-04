import PropTypes from 'prop-types'

export const ProfileLocationIcon = ({ width, height }) => {
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M19.3612 17C20.1072 17.4561 20.5 17.9734 20.5 18.5C20.5 19.0266 20.1072 19.5439 19.3612 20C18.6152 20.4561 17.5422 20.8348 16.25 21.0981C14.9578 21.3614 13.4921 21.5 12 21.5C10.5079 21.5 9.04216 21.3614 7.75 21.0981C6.45784 20.8348 5.38482 20.4561 4.63878 20C3.89275 19.5439 3.5 19.0266 3.5 18.5C3.5 17.9734 3.89275 17.4561 4.63878 17"
                stroke="#72859A"
                strokeLinecap="round"
            />
            <path
                d="M19.5 10C19.5 15.018 14.0117 18.4027 12.4249 19.2764C12.1568 19.424 11.8432 19.424 11.5751 19.2764C9.98831 18.4027 4.5 15.018 4.5 10C4.5 5.5 8.13401 2.5 12 2.5C16 2.5 19.5 5.5 19.5 10Z"
                stroke="#72859A"
            />
            <circle cx="12" cy="10" r="3.5" stroke="#72859A" />
        </svg>
    )
}

ProfileLocationIcon.propTypes = {
    height: PropTypes.number,
    width: PropTypes.number,
}
