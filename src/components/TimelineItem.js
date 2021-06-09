const TimelineItem = props => {
  return (
    <div>
      <h1>{props.year}</h1>
      <p>{props.description}</p>
    </div>
  );
};

export default TimelineItem;
