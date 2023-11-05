import React from "react";
import background from "../assets/background.png";
import Card from "../components/card";
import Feature from "../components/feature";
import { Col5 } from "../components/grid";
import Layout from "../components/layout";
import Section from "../components/section";
import Seo from "../components/seo";
import Title from "../components/title";
import VisualBox from "../components/visualBox";

const CurriculumPage = () => {
    return (
        <Layout>
            <VisualBox title="교육일정" img={background} />
            <Section grayish>
                <Title>모집 계획</Title>
                <Card ma="0 0 20px 0">
                    <h3>모집인원</h3>
                    <ul>
                        <li>50명</li>
                    </ul>
                    <h3>선발절차</h3>
                    <ul>
                        <li>서류평가</li>
                        <li>적성 테스트</li>
                        <li>인성면접 (오프라인)</li>
                    </ul>
                </Card>
                <Col5>
                    <Feature title="모집기간" subTitle="01" dark arrowAfter scheduleTheme>
                        <p>2023-11-07 ~ 2023-12-25</p>
                    </Feature>
                    <Feature title="선발" subTitle="02" dark arrowAfter scheduleTheme>
                        <p>2023-12-26 ~ 2023-12-31</p>
                    </Feature>
                    <Feature title="기초교육" subTitle="03" dark arrowAfter scheduleTheme>
                        <p>
                            2024-01-12 ~ 2024-02-28
                            <br />
                            2024-03-13 ~ 2024-06-02
                        </p>
                    </Feature>
                    <Feature title="이론/실습교육" subTitle="04" dark arrowAfter scheduleTheme>
                        <p>2024-06-05 ~ 2024-06-30</p>
                    </Feature>
                    <Feature title="프로젝트교육" subTitle="05" dark scheduleTheme>
                        <p>2024-07-03 ~ 2024-09-01</p>
                    </Feature>
                </Col5>
            </Section>
            <Section>
                <Title>교육 일정</Title>
                <Card grayish ma="0 0 20px 0">
                    <h3>대학 기초 교육</h3>
                    <ul>
                        <li>기간: 1~2월(주 5일)</li>
                        <li>수업시간: 10:00시작 수업 6시간, 4시간 실습 및 질문 (조교 항시상주), 240시간</li>
                        <li>수업방식: 온라인/오프라인</li>
                        <li>위치: 60주년기념관 808호(수업), 1401A호(실습)</li>
                    </ul>
                </Card>
                <Card grayish ma="0 0 20px 0">
                    <h3>조별 프로젝트</h3>
                    <ul>
                        <li>기간: 3월~ 6월</li>
                        <li>수업시간: 45시간</li>
                        <li>수업방식: 온라인 및 온프라인, 주 1~2회 조별상의하에 정기모임</li>
                        <li>참고: 교육생분들의 정규수업 일정에 맞추어 피해가 가지 않도록 구성 예정입니다.</li>
                    </ul>
                </Card>
                <Card grayish ma="0 0 30px 0">
                    <h3>대학별 집체교육 프로젝트</h3>
                    <ul>
                        <li>기간: 6월~9월</li>
                        <li>수업시간: 총 400시간</li>
                        <li>수업방식: 온라인/오프라인</li>
                    </ul>
                </Card>
            </Section>
        </Layout>
    );
};

export default CurriculumPage;
export const Head = () => {
    return <Seo title="교육일정" />;
};
