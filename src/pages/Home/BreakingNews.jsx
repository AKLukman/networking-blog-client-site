import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className="flex bg-[#F3F3F3] p-6 rounded-lg">
      <button className="btn bg-[#D72050] text-white">Breaking news</button>
      <Marquee pauseOnHover={true} speed={200}>
        <Link to="/">
          I can be a React component, multiple React components, or just some
          text............
        </Link>
        <Link to="/">
          I can be a React component, multiple React components, or just some
          text............
        </Link>
        <Link to="/">
          I can be a React component, multiple React components, or just some
          text............
        </Link>
        <Link to="/">
          I can be a React component, multiple React components, or just some
          text............
        </Link>
        <Link to="/">
          I can be a React component, multiple React components, or just some
          text............
        </Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
