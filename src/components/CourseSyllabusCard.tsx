import { cn } from '@/lib/utils';
import { CourseSyllabusCardProps } from '@/types';
import { Icon } from './ui/icon';

const CourseSyllabusCard = ({
  className,
  syllabus,
  number,
  ...props
}: CourseSyllabusCardProps) => {
  return (
    <div
      className={cn(className, 'p-3 md:p-5 lg:p-7 bg-gray-50 rounded-md')}
      {...props}
    >
      <Icon variant="square" className="font-bold text-xl">
        {number}
      </Icon>
      <h3 className="mt-6 md:mt-8 lg:mt-10 font-semibold text-xl md:text-2xl">
        {syllabus.title}
      </h3>
      <ul className="list-disc space-y-2 md:space-y-3 mt-4 md:mt-6 text-gray-600 list-inside">
        {typeof syllabus.points == 'string' ? (
          <li>{syllabus.points}</li>
        ) : (
          syllabus.points.map((point, key) => <li key={key}>{point}</li>)
        )}
      </ul>
    </div>
  );
};

export default CourseSyllabusCard;
