import range from '/src/utils/range';

export const StarRating = (props) => {
  const { rating } = props;

  return range(rating).map((star) => {
    return (
      <span key={crypto.randomUUID()}>
        <img
          alt="star"
          className="star"
          src="/star.svg"
          style={{
            width: '1rem',
            height: '1rem',
            filter:
              'brightness(0) saturate(100%) invert(81%) sepia(42%) saturate(837%) hue-rotate(341deg) brightness(104%) contrast(101%)',
          }}
        />{' '}
      </span>
    );
  });
};
