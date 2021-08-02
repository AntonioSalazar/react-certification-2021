import React from 'react'
import {shallow} from 'enzyme'
import 'jest-styled-components'
import renderer from 'react-test-renderer'
import Home from '../../../pages/Home/Home.page';

describe('Tests of the < HomePage/> component', () => {
    
    const wrapper = shallow(< Home/>)
    let data = [
        {
            "kind": "youtube#searchResult",
            "etag": "_PVKwNJf_qw9nukFeRFOtQ837o0",
            "id": {
              "kind": "youtube#channel",
              "videoId": "UCPGzT4wecuWM0BH9mPiulXg"
            },
            "snippet": {
              "publishedAt": "2014-09-27T01:39:18Z",
              "channelId": "UCPGzT4wecuWM0BH9mPiulXg",
              "title": "Wizeline",
              "description": "Wizeline transforms how teams build technology. Its customers accelerate the delivery of innovative products with proven solutions, which combine Wizeline's ...",
              "thumbnails": {
                "default": {
                  "url": "https://yt3.ggpht.com/ytc/AAUvwnighSReQlmHl_S_vSfvnWBAG5Cw4A0YxtE0tm5OpQ=s88-c-k-c0xffffffff-no-rj-mo"
                },
                "medium": {
                  "url": "https://yt3.ggpht.com/ytc/AAUvwnighSReQlmHl_S_vSfvnWBAG5Cw4A0YxtE0tm5OpQ=s240-c-k-c0xffffffff-no-rj-mo"
                },
                "high": {
                  "url": "https://yt3.ggpht.com/ytc/AAUvwnighSReQlmHl_S_vSfvnWBAG5Cw4A0YxtE0tm5OpQ=s800-c-k-c0xffffffff-no-rj-mo"
                }
              },
              "channelTitle": "Wizeline",
              "liveBroadcastContent": "upcoming",
              "publishTime": "2014-09-27T01:39:18Z"
            }
          }
    ]

    test('should show the < HomePage/> component correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('should contain the SectionContainer styled component', () => {
        expect(wrapper.find('SectionContainer').length).toEqual(1);
    })
    

    test('should contain the VideoListContainer styled component', () => {
        expect(wrapper.find('VideoListContainer').length).toEqual(1);

    })
})
