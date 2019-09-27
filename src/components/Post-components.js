import React, { Component } from 'react'
import styled from 'styled-components';
const PostWrapper = styled.div`
    color:black;
    min-height:40vh;
    text-align:center;
    transform:translateY(-15%);
    margin:0px 60px;  
    background:#fff;  
    -webkit-box-shadow: 0 3px 2px #777;
	-moz-box-shadow: 0 3px 2px #777;
	box-shadow: 0 3px 2px #777;
    @media(max-width:800px) {
        margin:0px;
        box-shadow:0px 0px 0px;
        transform:translateY(0%);
    }
`;



export default class PostComponents extends Component {
    render() {
        return (
            <>

                    <PostWrapper>
                <h2 style={{
                    fontWeight:"300"
                }}>
                    Aktualności...
                </h2>
                    </PostWrapper>
            </>
        )
    }
}
