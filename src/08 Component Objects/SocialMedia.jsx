import FBTimeLine from "./FB/FBTimeLine";
import IGTimeLine from "./IG/IGTimeLine";

const SocialMedia = () => {
  return (
    <>
      <FBTimeLine.Posts />
      <FBTimeLine.Reels />
      <IGTimeLine.Posts />
      <IGTimeLine.Reels />
    </>
  );
};

export default SocialMedia;
