import React, { useRef } from 'react'
import {
    FirstText,
    Image,
    ImageDiv,
    LableText,
    LableDiv
} from './styled_mainPage'
import {
    Animator,
    ScrollContainer,
    ScrollPage,
    batch,
    Fade,
    FadeIn,
    FadeOut,
    Move,
    MoveIn,
    MoveOut,
    Sticky,
    StickyIn,
    StickyOut,
    Zoom,
    ZoomIn,
    ZoomOut
} from "react-scroll-motion";
import Before from '../assets/image/Before.jpg'
import After from '../assets/image/After.jpg'
function MainPage() {
    const ZoomInScrollOut = batch(StickyOut(), Fade());
    const FadeUp = batch(Fade(), Move(), StickyOut(),);
    return (
        <ScrollContainer >
            <ScrollPage>
                <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -130))}>
                    <FirstText>Ai Farm 으로 오신것을 환영합니다. 😃</FirstText>
                </Animator>
            </ScrollPage>
            <ScrollPage>
                <Animator animation={FadeUp}>
                    <FirstText>Instance Segmentation <br />학습 결과 입니다.</FirstText>
                    <ImageDiv>
                        <LableDiv>
                            <LableText>Before</LableText>
                            <Image src={Before} />
                        </LableDiv>
                        <LableDiv>
                            <LableText>After</LableText>
                            <Image src={After} />
                        </LableDiv>
                    </ImageDiv>

                </Animator>

            </ScrollPage>
            {/* <ScrollPage>
                <Animator animation={FadeUp}>
                    <span style={{ fontSize: "40px" }}>I'm FadeUp ⛅️</span>
                </Animator>
            </ScrollPage>
            <ScrollPage>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }} >
                    <span style={{ fontSize: "40px" }}>
                        <Animator animation={MoveIn(-1000, 0)}>Hello Guys 👋🏻</Animator>
                        <Animator animation={MoveIn(1000, 0)}>Nice to meet you 🙋🏻‍♀️</Animator>
                        - I'm Dante Chun -
                        <Animator animation={MoveOut(1000, 0)}>Good bye ✋🏻</Animator>
                        <Animator animation={MoveOut(-1000, 0)}>See you 💛</Animator>
                    </span>
                </div>
            </ScrollPage>
            <ScrollPage>
                <Animator animation={batch(Fade(), Sticky())}>
                    <span style={{ fontSize: "40px" }}>Done</span>
                    <br />
                    <span style={{ fontSize: "30px" }}>
                        There's FadeAnimation, MoveAnimation, StickyAnimation, ZoomAnimation
                    </span>
                </Animator>
            </ScrollPage> */}
        </ScrollContainer>
    )
}

export default MainPage