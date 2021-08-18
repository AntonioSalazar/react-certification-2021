import React, { useContext } from 'react';
import { useParams } from 'react-router';
import { useFetch } from '../../utils/hooks/useFetch';
import './VideoDetails.styles.css';
import { TitleSpan, DescriptionSpan, ReactionBtn } from './styledComponents';
import RecommendedVideos from '../RecommendedVideos';
import { useAuth } from '../../providers/Auth/Auth.provider';
import Swal from 'sweetalert2';
import { VideoListContext } from '../../providers/VideoList/VideoList.provider';

const VideoDetails = () => {
  const { id } = useParams();
  const { singleVideo } = useFetch(id);
  const { authenticated } = useAuth();
  const { addToFavorites, videosState } = useContext(VideoListContext);
  const { posts } = videosState;

  return (
    <div className="video-details-container">
      <div className="video-details-selected-video">
        <iframe
          src={`https://www.youtube.com/embed/${id}`}
          frameBorder="0"
          allowFullScreen
          title="test"
        ></iframe>
        {singleVideo.length > 0 && (
          <div className="video-details-selected-video__text">
            <div className="title_like_btns">
              <TitleSpan>{singleVideo[0].snippet.title}</TitleSpan>
              {authenticated ? (
                <div className="reaction-btns">
                  {/* <ReactionBtn
                    type="button"
                    onClick={() => console.log('should be removed')}
                  >
                    <i className="fas fa-thumbs-down" />
                  </ReactionBtn> */}
                  <ReactionBtn
                    type="button"
                    onClick={() => addToFavorites(singleVideo[0])}
                  >
                    <i className="fas fa-thumbs-up" />
                  </ReactionBtn>
                </div>
              ) : (
                <ReactionBtn
                  type="button"
                  onClick={() =>
                    Swal.fire({
                      title: 'Oops...',
                      text: 'Log In if you want to add this video to your favorites',
                    })
                  }
                >
                  <i className="fas fa-thumbs-up" style={{ marginRight: '1rem' }} />
                  Like
                </ReactionBtn>
              )}
            </div>
            <DescriptionSpan>{singleVideo[0].snippet.description}</DescriptionSpan>
          </div>
        )}
      </div>
      <div className="video-details-similar-videos">
        <RecommendedVideos videos={posts} />
      </div>
    </div>
  );
};

export default VideoDetails;
