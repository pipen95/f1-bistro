import { TwitterTimelineEmbed } from 'react-twitter-embed';

function News() {
  return (
    <div className="News">
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="f1"
        options={{ height: 650 }}
      />
    </div>
  );
}
export default News;
