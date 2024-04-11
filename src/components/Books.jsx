import { StarRating } from '/src/components/StarRating';

function Books({ lists }) {
  const TOTAL = 5;

  return (
    <>
      <section>
        {lists.map((list) => {
          return (
            <div
              key={list.id}
              style={{
                border: '1px solid green',
                margin: '1rem',
                padding: '0.8rem',
              }}
            >
              <h2>{list.name}</h2>
              <p>
                Rating: {list.rating} / {TOTAL}
              </p>
              <StarRating rating={list.rating} TOTAL={TOTAL}/>
            </div>
          );
        })}
      </section>
    </>
  );
}

export default Books;
