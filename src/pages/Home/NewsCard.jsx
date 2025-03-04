import { CiShare2 } from "react-icons/ci";
import { VscSaveAll } from "react-icons/vsc";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { title, thumbnail_url, author, details, image_url, _id } = news;

  return (
    <div>
      <div className="card  bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="flex justify-between bg-[#F3F3F3] p-4">
            <div className="flex items-center">
              <img src={author.img} alt="" className="w-[40px] rounded-full" />

              <div className="ml-4">
                <h4 className="font-semibold">{author.name}</h4>
                <p className="text-sm text-[#706F6F]">
                  {author.published_date}
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <VscSaveAll className="text-[24px] mr-4 " />
              <CiShare2 className="text-[24px]" />
            </div>
          </div>
          <figure>
            <img src={image_url} alt="Shoes" className="w-full" />
          </figure>
          <h2 className="card-title">{title}</h2>
          {details.length > 200 ? (
            <p>
              {details.slice(0, 200)}{" "}
              <Link to={`/news/${_id}`} className="text-blue-700 font-bold">
                Read more
              </Link>
            </p>
          ) : (
            <p>{details}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
