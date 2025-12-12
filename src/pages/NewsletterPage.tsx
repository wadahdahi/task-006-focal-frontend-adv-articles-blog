import NewsLetterSection from "../components/NewsLetterSection";
import NewstellerArticles from "../components/NewstellerArticles";

const NewsletterPage = () => {
  return (
    <div className="flex flex-col p-8 md:p-28">
      <NewsLetterSection />
      <NewstellerArticles />
    </div>
  );
};

export default NewsletterPage;
