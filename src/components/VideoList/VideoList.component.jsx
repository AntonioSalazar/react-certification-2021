import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {
  VideoCardDivLight,
  VideoCardDivDark,
  VideoImageDiv,
  TitleSpan,
  DescriptionSpan,
} from './styledComponents';
import Context from '../../providers/Theme/Theme.provider';

const VideoList = ({ video }) => {
  const { snippet } = video;
  const { thumbnails, title, description } = snippet;
  const { id } = video;
  const { videoId } = id;
  const { state } = useContext(Context);
  console.log(state);
  return (
    <Link to={`/video/${videoId}`} style={{ textDecoration: 'none', color: '#000' }}>
      {state.isDark ? (
        <VideoCardDivLight>
          <VideoImageDiv
            style={{
              backgroundImage: `url(${thumbnails.medium.url})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              borderTopRightRadius: '0.4rem',
              borderTopLeftRadius: '0.4rem',
            }}
          ></VideoImageDiv>
          <TitleSpan>{title}</TitleSpan>
          <DescriptionSpan>
            {description ? description : 'watch video...'}
          </DescriptionSpan>
        </VideoCardDivLight>
      ) : (
        <VideoCardDivDark>
          <VideoImageDiv
            style={{
              backgroundImage: `url(${thumbnails.medium.url})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              borderTopRightRadius: '0.4rem',
              borderTopLeftRadius: '0.4rem',
            }}
          ></VideoImageDiv>
          <TitleSpan>{title}</TitleSpan>
          <DescriptionSpan>
            {description ? description : 'watch video...'}
          </DescriptionSpan>
        </VideoCardDivDark>
      )}
    </Link>
  );
};

export default VideoList;
