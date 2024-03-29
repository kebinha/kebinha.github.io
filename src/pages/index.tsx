import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { MdBadge, MdPaid, MdRestaurant, MdSchool } from "react-icons/md";
import background from "../assets/background.png";
import Card from "../components/card";
import Feature from "../components/feature";
import { Col2, Col3 } from "../components/grid";
import Layout from "../components/layout";
import Section from "../components/section";
import Seo from "../components/seo";
import Title from "../components/title";
import VisualBox from "../components/visualBox";

const IndexPage = () => {
    return (
        <Layout>
            <VisualBox
                title="K-Software Empowerment BootCamp"
                subTitle="인하대학교에서 SW 개발에 관심있는 인재를 양성하고 현업 중심의 프로젝트를 경험할 수 있는 <2024 K-Software Empowerment BootCamp>를 시작합니다"
                img={background}
            />

            <Section>
                <Title>프로그램 소개</Title>
                <p>
                    본 프로그램은 총 640시간으로 구성되어 있으며 240시간은 대학 연합으로 프로그래밍, SW 기술에 대한
                    교육으로 400시간은 참여기업 주관의 프로젝트 심화 과목으로 구성되어 있습니다.
                </p>
                <p>
                    2024년도부터는 교육생들에게 보다 더 전문적인 교육을 제공하고자 WebOS특화교육으로 구성하였습니다.
                    또한 비전공자 학생들을 위하여 인공지능에 대해 보다 더 세분화하여 교육예정입니다.
                </p>
                <StaticImage src="../assets/abstract-2024.png" alt="abstract" />

                <iframe
                    width="100%"
                    height="500px"
                    src="https://www.youtube.com/embed/0A9Xy1k5r4A?si=cnjpUnzzDC1IUj7Z"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
            </Section>
            <Section grayish>
                <Title>대학연합 개설과목</Title>
                <p>
                    3개 소프트웨어 선도 대학(인하대, 성균관대, 경기대 - 소프트웨어 중심대학)에서 개설하는 실습 중심의
                    강좌를 통해, 프로그래밍 기술과 SW전반에 대한 지식을 쌓을 수 있습니다.
                </p>
                <p>
                    대학 연합에서 주관하는 SW 강좌는 크게 대학기초프로그램(기초) , 기업집중교육(심화) 으로 총
                    240시간으로 구성되어 있으며 하부 강좌들이 존재합니다.
                </p>
                <p>
                    각 강좌 내 세부 강좌들은 선택적으로 수강할 수 있는 구조를 통해, 개인의 개발 목적에 맞는 유연한 강의
                    수강이 가능합니다.
                </p>
                <Col2>
                    <Feature title="대학기초프로그램" subTitle="240시간" arrowAfter>
                        <p>
                            SW개발에 입문하는 과정으로 SW개발에 사용되는 여러가지 언어들 중 가장 많이 사용되는 언어들에
                            대한 강의로 구성되어 있습니다.
                            <br />
                            <br />
                            SW이론교육에서는 여러가지 응용문제들을 해결하는 능력을 기르고 데이터를 다루는 세부적인
                            방법에 대해 배울 수 있습니다.
                        </p>
                    </Feature>
                    <Feature title="기업집중교육" subTitle="400시간">
                        <p>
                            현업에서 사용할 수 있는 기술을 배우기 위해 SW기술역량 교육은 여러가지 분야에 대한 이론 및
                            실습 강좌를 통해 현업 SW개발자가 되기 위한 준비를 도와줍니다.
                        </p>
                    </Feature>
                </Col2>
            </Section>
            <Section>
                <Title>참여기업 프로젝트</Title>
                <Card grayish>
                    <p style={{ fontWeight: "bold" }}>
                        27개 참여기업(SK C&C, Kakao, Nexon, 한글과컴퓨터, NeoWiz, 오비고, 포스트시뮬레이션,
                        네오드림등)의 현업 멘토들과 함께 실제 기업에서 직면하는 문제를 해결하고 프로젝트를 진행하며 현업
                        역량을 갖춘 SW 개발자로 거듭날 수 있습니다.
                    </p>
                </Card>
                <p>
                    프로젝트는 크게 스마트 팩토리 헬스케어 게임 로 구성되어 있으며 각 주제 아래 세부 주제들의 프로젝트가
                    존재합니다.
                </p>
                <p>
                    팀 구성별 난이도에 따라 2~3개의 프로젝트를 선택하여 수행하며, 각 프로젝트당 60~90시간 정도가
                    소요됩니다.
                </p>
                <Col3>
                    <Feature dark title="스마트 팩토리">
                        <p>
                            제조 산업을 주제로 SW개발을 수행하는 프로젝트로 하드웨어 기반, 소프트웨어 기반, 디지털 트윈
                            기반 의 프로젝트를 경험하고 현업 기술을 기를 수 있습니다.
                        </p>
                    </Feature>
                    <Feature dark title="헬스 케어">
                        <p>
                            의료 산업 및 헬스케어 분야에서 요구되는 SW개발 기술을 배울 수 있으며, 임베디드 기반,
                            클라우드 기반 , 모바일 기반 개인 서비스 등의 프로젝트를 경험할 수 있습니다.
                        </p>
                    </Feature>
                    <Feature dark title="게임">
                        <p>
                            게임산업에서 많이 사용되는 프로그램의 실습과 사용을 통해 현업 역량을 양성할 수 있으며, 슈팅
                            게임, 아케이드 게임, RPG 게임, 퍼즐 게임, 플랫폼 등의 프로젝트를 경험할 수 있습니다.
                        </p>
                    </Feature>
                    <Feature dark title="자율주행">
                        <p>
                            자율주행의 핵심 인공지능 기술과 시스템에 대한 역량을 양성할 수 있으며 어떻게 인공지능이
                            자율주행의 모든 기능을 구현하고 있는지 어떻게 더 발전할 것인지를 이해할 수 있습니다.
                        </p>
                    </Feature>
                    <Feature dark title="인공지능 서비스">
                        <p>
                            자연어 처리, 머신 러닝 및 데이터 분석 등의 프로젝트를 경험할 수 있습니다. 이런 역량을
                            활용하여 실제 인공지능 서비스를 개발하고 문제 해결에 기여할 수 있습니다.
                        </p>
                    </Feature>
                </Col3>
            </Section>
            <Section grayish>
                <Title>참여 혜택</Title>
                <Col3>
                    <Feature title="학점인정" icon={<MdSchool style={{ color: "#202c3c", fontSize: "36px" }} />}>
                        <p>
                            일반 교양 학점으로 9학점{" "}
                            <a href="https://www.inha.ac.kr/kr/1834/subview.do" target="_blank">
                                [ 마이크로 전공 (미래차공학) ]
                            </a>{" "}
                            인정
                        </p>
                    </Feature>
                    <Feature title="교육지원금" icon={<MdPaid style={{ color: "#202c3c", fontSize: "36px" }} />}>
                        <p>
                            교육 지원금을 제공하여 비용 걱정 없이 학습에만 집중할 수 있도록 최선의 지원을 아끼지
                            않습니다 (금액 미정)
                        </p>
                    </Feature>
                    <Feature title="중/석식비" icon={<MdRestaurant style={{ color: "#202c3c", fontSize: "36px" }} />}>
                        <p>교육 수강자 전부에게 중/석식비를 제공 (예정, 변경가능)</p>
                    </Feature>
                    <Feature title="인턴/서류면제" icon={<MdBadge style={{ color: "#202c3c", fontSize: "36px" }} />}>
                        <p>
                            수료 성적 상위 10% SK, MDS 등 기업 채용형 인턴 확정, 수료인원에 한해서는 서류 면제 협의중.
                        </p>
                    </Feature>
                </Col3>
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
                {/* <StaticImage src="../assets/plan.png" alt="plan" style={{ alignSelf: "center" }} /> */}
            </Section>
        </Layout>
    );
};

export default IndexPage;
export const Head = () => {
    return <Seo title="K-Software Empowerment BootCamp" />;
};
