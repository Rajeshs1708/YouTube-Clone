import { TuneOutlined } from '@mui/icons-material';
import React from 'react';
import './searchPage.css';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

function SearchPage() {
    return (
        <div className='searchPage'>
            <div className='searchPage__filter'>
                <TuneOutlined />
                <h2>FILTER</h2>
            </div>
            <hr />

            <ChannelRow
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF_FEAilnGbsTynsXvcDTIsjWyb302TDTJFQ&usqp=CAU"
                channel="Dream Drawings"
                verified
                subs="660k"
                noOfVideos={382}
                description="You can find awasome drawing videos here! also expect drawing tips and tricks that will take your drawing skill to the..."
            />
            <hr />

            <VideoRow
                views="1.4M"
                subs="659k"
                description="Do you want a FREE one hour training..."
                timestamp="59 seconds ago"
                channel="Dream Drawings"
                title="Lets draw a tree using Acrylic paints"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRND0ytQ_nenvFfz4L7RfL5r9KEPFmUVAe8xw&usqp=CAU&reload=on"
            />
            <VideoRow
                views="1.4M"
                subs="659k"
                description="Do you want a FREE one hour training..."
                timestamp="59 seconds ago"
                channel="Dream Drawings"
                title="Lets draw a tree using Acrylic paints"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRND0ytQ_nenvFfz4L7RfL5r9KEPFmUVAe8xw&usqp=CAU&reload=on"
            />
            <VideoRow
                views="1.4M"
                subs="659k"
                description="Do you want a FREE one hour training..."
                timestamp="59 seconds ago"
                channel="Dream Drawings"
                title="Lets draw a tree using Acrylic paints"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRND0ytQ_nenvFfz4L7RfL5r9KEPFmUVAe8xw&usqp=CAU&reload=on"
            />
            <VideoRow
                views="1.4M"
                subs="659k"
                description="Do you want a FREE one hour training..."
                timestamp="59 seconds ago"
                channel="Dream Drawings"
                title="Lets draw a tree using Acrylic paints"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRND0ytQ_nenvFfz4L7RfL5r9KEPFmUVAe8xw&usqp=CAU&reload=on"
            />
            <VideoRow
                views="1.4M"
                subs="659k"
                description="Do you want a FREE one hour training..."
                timestamp="59 seconds ago"
                channel="Dream Drawings"
                title="Lets draw a tree using Acrylic paints"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRND0ytQ_nenvFfz4L7RfL5r9KEPFmUVAe8xw&usqp=CAU&reload=on"
            />
            <VideoRow
                views="1.4M"
                subs="659k"
                description="Do you want a FREE one hour training..."
                timestamp="59 seconds ago"
                channel="Dream Drawings"
                title="Lets draw a tree using Acrylic paints"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRND0ytQ_nenvFfz4L7RfL5r9KEPFmUVAe8xw&usqp=CAU&reload=on"
            />
        </div>
    )
}

export default SearchPage
