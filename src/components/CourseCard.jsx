import { Link } from "react-router-dom";
import Button from "./Button";

const CourseCard = ({
  title,
  description,
  price,
  duration,
  targetAudience,
  outcomes = [],
  plans = [],
  className = "",
}) => {
  return (
    <div
      className={`bg-white border-l-4 border-secondary-500 hover:border-accent-500 transition-all duration-200 overflow-hidden ${className}`}
    >
      <div className="p-6 border border-gray-200">
        <h3 className="text-xl font-bold text-primary-900 mb-3 tracking-tight">
          {title}
        </h3>
        <p className="text-gray-700 mb-4 leading-relaxed text-sm">
          {description}
        </p>

        {/* Course details */}
        <div className="space-y-2 mb-4 bg-gray-50 p-3 border border-gray-200">
          {price && (
            <div className="flex items-center text-sm">
              <span className="font-semibold text-primary-900 w-16">價格</span>
              <span className="text-secondary-600 font-bold">{price}</span>
            </div>
          )}
          {duration && (
            <div className="flex items-center text-sm">
              <span className="font-semibold text-primary-900 w-16">時長</span>
              <span className="text-gray-700">{duration}</span>
            </div>
          )}
          {targetAudience && (
            <div className="flex items-center text-sm">
              <span className="font-semibold text-primary-900 w-16">對象</span>
              <span className="text-gray-700">{targetAudience}</span>
            </div>
          )}
        </div>

        {/* Learning outcomes */}
        {outcomes.length > 0 && (
          <div className="mb-4">
            <h4 className="font-semibold text-primary-900 mb-2 text-sm tracking-wide">
              學習成果
            </h4>
            <ul className="space-y-1.5">
              {outcomes.map((outcome, index) => (
                <li
                  key={index}
                  className="text-sm text-gray-700 flex items-start leading-snug"
                >
                  <span className="text-secondary-500 mr-2 font-bold">■</span>
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Course plans */}
        {plans.length > 0 && (
          <div className="mb-4">
            <h4 className="font-semibold text-primary-900 mb-2 text-sm tracking-wide">
              方案選擇
            </h4>
            <div className="space-y-2">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-3 border-l-2 border-primary-500"
                >
                  <div className="font-medium text-primary-900 text-sm">
                    {plan.name}
                  </div>
                  <div className="text-xs text-gray-600 mt-0.5">
                    {plan.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mt-6 pt-4 border-t border-gray-200">
          <Button variant="primary" to="/contact" className="flex-1">
            報名課程
          </Button>
          <Button variant="outline" className="flex-1">
            課程大綱
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
