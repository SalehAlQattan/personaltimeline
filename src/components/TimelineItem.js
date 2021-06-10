import { Item } from '../styles';

const TimelineItem = props => {
  return (
    <Item>
      <h1>{props.year}</h1>
      <p>{props.description}</p>
      <img src={props.img} alt={props.name} />
    </Item>
  );
};

export default TimelineItem;
