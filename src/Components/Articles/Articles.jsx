import PageBanner from "../Shared/PageBanner/PageBanner";
import image from '../../assets/banner/article_banner.jpg'
import { useEffect, useState } from "react";

const Articles = () => {
    const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
//   const apiKey = 'dd40d2f709fe45e79f380ea6d4d12ec8'; 
const apiKey = import.meta.env.VITE_APP_NEWS_API_KEY;

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(`https://newsapi.org/v2/everything?q=climate&apiKey=${apiKey}`);
        if (!response.ok) throw new Error('Failed to fetch articles');

        const data = await response.json();
        setArticles(data.articles.slice(1, 50)); // Store the articles in state
      } catch (err) {
        setError(err.message);
      }
    };

    fetchArticles();
  }, []);

  if (error) return <p className="text-red-500">Error: {error}</p>;
    return (
        <div>
        <PageBanner 
        image={image}
        pageName={"Articles"}
        />
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto '>

{articles.map((article, index) => (
  <div key={index} className="bg-white rounded-lg shadow-md p-4">
    <img src={article.urlToImage} alt={article.title} className="w-full h-40 object-cover rounded-t-lg" />
    <div className="p-4">
      <h3 className="text-xl font-semibold">{article.title}</h3>
      <p className="text-sm text-gray-500">{new Date(article.publishedAt).toLocaleDateString()}</p>
      <p className="text-gray-700 my-2">{article.description ? article.description.slice(0, 80) + '...' : ''}</p>
      {/* <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline font-semibold"
      >
        Read More
      </a> */}
      {/* Base */}

<a
  className="group inline-block rounded bg-gradient-to-r from-[#214D5B]  to-[#C8E264] p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
  href={article.url}
        target="_blank"
>
  <span className="block rounded-sm bg-white px-8 py-3 text-sm font-medium group-hover:bg-transparent">
    Read More
  </span>
</a>


    </div>
  </div>
))}
</div> 
        </div>
    );
};

export default Articles;