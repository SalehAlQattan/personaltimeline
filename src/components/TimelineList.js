import TimelineItem from './TimelineItem';
import timelineItems from '../data';
import { Items } from '../styles';

const TimelineList = () => {
  const items = timelineItems.map(timelineItem => {
    return (
      <TimelineItem
        year={timelineItem.year}
        description={timelineItem.description}
        img={timelineItem.img}
      />
    );
  });

  return <Items>{items}</Items>;
};

export default TimelineList;
