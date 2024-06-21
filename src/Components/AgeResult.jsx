import PropTypes from 'prop-types';

const AgeResult = ({ age }) => {
  return (
    <h4 className='ageresult mt-10 underline text-2xl font-bold dark:text-white'>
      You are <span className='back-span'> {age.years}</span> years, <span className='back-span'>{age.months}</span> months, and <span className='back-span'>{age.days} </span>days old.
    </h4>
  );
};

AgeResult.propTypes = {
  age: PropTypes.shape({
    years: PropTypes.number.isRequired,
    months: PropTypes.number.isRequired,
    days: PropTypes.number.isRequired,
  }),
};

export default AgeResult;