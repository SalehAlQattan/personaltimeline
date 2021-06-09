import TimelineItem from './TimelineItem';
import timelineItems from '../data';

const TimelineList = () => {
  const items = timelineItems.map(timelineItem => {
    return (
      <TimelineItem
        year={timelineItem.year}
        description={timelineItem.description}
      />
    );
  });

  return <div>{items}</div>;
};

export default TimelineList;
