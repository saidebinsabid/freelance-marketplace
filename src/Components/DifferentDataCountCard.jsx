import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import totalFreelancer from "../assets/c1.png";
import totalJobs from "../assets/c2.png";
import totalReview from "../assets/c3.png";
import totalCompletedTask from "../assets/c4.png";

const DifferentDataCountCard = () => {
  const [ref1, inView1] = useInView({ triggerOnce: false, threshold: 0.3 });
  const [ref2, inView2] = useInView({ triggerOnce: false, threshold: 0.3 });
  const [ref3, inView3] = useInView({ triggerOnce: false, threshold: 0.3 });
  const [ref4, inView4] = useInView({ triggerOnce: false, threshold: 0.3 });
  return (
    <>
      {/* Card 1 */}
      <div ref={ref1} className="p-8 bg-gradient-to-tr from-[#a8b2c1] via-[#dce3ea] to-[#bfc9d6] hover:shadow-xl rounded-2xl space-y-6 text-center">
        <img className="mx-auto w-26 h-26 rounded-full object-contain" src={totalJobs} alt="total-doctor-icon" />
        {inView1 && (
          <span className="text-5xl font-bold">
            <CountUp start={0} end={937} duration={2} />M
          </span>
        )}
        <p className="pt-4 text-gray-500">Total Jobs</p>
      </div>

      {/* Card 2 */}
      <div ref={ref2} className="p-8 bg-gradient-to-tr from-[#a8b2c1] via-[#dce3ea] to-[#bfc9d6] hover:shadow-xl rounded-2xl space-y-6 text-center">
        <img className="mx-auto w-26 h-26 rounded-full object-contain" src={totalReview} alt="total-review-icon" />
        {inView2 && (
          <span className="text-5xl font-bold">
            <CountUp start={0} end={640} duration={2} />K
          </span>
        )}
        <p className="pt-4 text-gray-500">Total Reviews</p>
      </div>

      {/* Card 3 */}
      <div ref={ref3} className="p-8 bg-gradient-to-tr from-[#a8b2c1] via-[#dce3ea] to-[#bfc9d6] hover:shadow-xl rounded-2xl space-y-6 text-center">
        <img className="mx-auto w-26 h-26 rounded-full object-contain" src={totalCompletedTask} alt="patients-icon" />
        {inView3 && (
          <span className="text-5xl font-bold">
            <CountUp start={0} end={549} duration={2} separator="" />M
          </span>
        )}
        <p className="pt-4 text-gray-500">Completed Tasks</p>
      </div>

      {/* Card 4 */}
      <div ref={ref4} className="p-8 bg-gradient-to-tr from-[#a8b2c1] via-[#dce3ea] to-[#bfc9d6] hover:shadow-xl rounded-2xl space-y-6 text-center">
        <img className="mx-auto w-26 h-26 rounded-full object-contain" src={totalFreelancer} alt="stuffs-icon" />
        {inView4 && (
          <span className="text-5xl font-bold">
            <CountUp start={0} end={765} duration={2} />k
          </span>
        )}
        <p className="pt-4 text-gray-500">Freelancers Served</p>
      </div>
    </>
  );
};

export default DifferentDataCountCard;
