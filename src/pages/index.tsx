import React from "react";
import Feature from "../components/feature";
import Title from "../components/title";
import { MdSchool, MdPaid, MdDirectionsBus, MdRestaurant, MdBadge } from "react-icons/md";
import Card from "../components/card";
import VisualBox from "../components/visualBox";
import background from "../assets/background.png";
import Section from "../components/section";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import { Col3 } from "../components/grid";

const IndexPage = () => {
  return (
    <Layout>
      <VisualBox
        title="K-Software BootCamp"
        subTitle="인하대학교에서 SW 개발에 관심있는 인재를 양성하고 현업 중심의 프로젝트를 경험할 수 있는 <2023 K-Software BootCamp>를 시작합니다"
        img={background}
      />
      <Section>
        <Title>프로그램 소개</Title>
        <p>
          본 프로그램은 총 640시간으로 구성되어 있으며 280시간은 대학 연합으로 프로그래밍, SW 기술에 대한 교육으로 360시간은 참여기업 주관의 프로젝트 심화
          과목으로 구성되어 있습니다.
        </p>
        <p>
          2023년도부터는 교육생들에게 보다 더 전문적인 교육을 해주고자 인공지능 특화교육으로 구성하였습니다. 비전공자 학생들을 인공지능에 대하여 보다 더
          세분화하여 교육예정입니다.
        </p>
        <StaticImage src="../assets/abstract.png" alt="abstract" />
      </Section>
      <Section grayish>
        <Title>대학연합 개설과목</Title>
        <p>
          3개 소프트웨어 선도 대학(인하대, 성균관대, 경기대 - 소프트웨어 중심대학)에서 개설하는 실습 중심의 강좌를 통해, 프로그래밍 기술과 SW전반에 대한 지식을
          쌓을 수 있습니다.
        </p>
        <p>
          대학 연합에서 주관하는 SW 강좌는 크게 프로그래밍(기초),SW이론교육(기초) , SW기술역량교육(심화) 으로 총 280시간으로 구성되어 있으며 하부 강좌들이
          존재합니다.
        </p>
        <p>각 강좌 내 세부 강좌들은 선택적으로 수강할 수 있는 구조를 통해, 개인의 개발 목적에 맞는 유연한 강의 수강이 가능합니다.</p>
        <Col3>
          <Feature
            title="프로그래밍 기초"
            subTitle="100시간"
            description="SW개발에 입문하는 과정으로 SW개발에 사용되는 여러가지 언어들 중 가장 많이 사용되는 언어들에 대한 강의로 구성되어 있습니다."
          />
          <Feature
            title="SW이론교육"
            subTitle="60시간"
            description="SW이론교육에서는 여러가지 응용문제들을 해결하는 능력을 기르고 데이터를 다루는 세부적인 방법에 대해 배울 수 있습니다."
          />
          <Feature
            title="SW기술역량 교육"
            subTitle="심화"
            description="현업에서 사용할 수 있는 기술을 배우기 위해 SW기술역량 교육은 여러가지 분야에 대한 이론 및 실습 강좌를 통해 현업 SW개발자가 되기 위한 준비를 도와줍니다."
          />
        </Col3>
      </Section>
      <Section>
        <Title>참여기업 프로젝트</Title>
        <Card grayish>
          <p style={{ fontWeight: "bold" }}>
            27개 참여기업(SK CC, Kakao, Nexon, 한글과컴퓨터, NeoWiz등)의 현업 멘토들과 함께 실제 기업에서 직면하는 문제를 해결하고 프로젝트를 진행하며 현업
            역량을 갖춘 SW 개발자로 거듭날 수 있습니다.
          </p>
        </Card>
        <p>프로젝트는 크게 스마트 팩토리 헬스케어 게임 로 구성되어 있으며 각 주제 아래 세부 주제들의 프로젝트가 존재합니다.</p>
        <p>팀 구성별 난이도에 따라 2~3개의 프로젝트를 선택하여 수행하며, 각 프로젝트당 60~90시간 정도가 소요됩니다.</p>
        <Col3>
          <Feature
            dark
            title="스마트 팩토리"
            description="제조 산업을 주제로 SW개발을 수행하는 프로젝트로 하드웨어 기반, 소프트웨어 기반, 디지털 트윈 기반 의 프로젝트를 경험하고 현업 기술을 기를 수 있습니다."
          />
          <Feature
            dark
            title="헬스 케어"
            description="의료 산업 및 헬스케어 분야에서 요구되는 SW개발 기술을 배울 수 있으며, 임베디드 기반, 클라우드 기반 , 모바일 기반 개인 서비스 등의 프로젝트를 경험할 수 있습니다."
          />
          <Feature
            dark
            title="게임"
            description="게임산업에서 많이 사용되는 프로그램의 실습과 사용을 통해 현업 역량을 양성할 수 있으며, 슈팅 게임, 아케이드 게임, RPG 게임, 퍼즐 게임, 플랫폼 등의 프로젝트를 경험할 수 있습니다."
          />
        </Col3>
      </Section>
      <Section grayish>
        <Title>참여 혜택</Title>
        <Col3>
          <Feature
            title="학점인정"
            icon={<MdSchool style={{ color: "#202c3c", fontSize: "36px" }} />}
            description="일반(교양)학점으로 마이크로 전공 (미래차공학) 추진중"
          />
          <Feature
            title="교육지원금"
            icon={<MdPaid style={{ color: "#202c3c", fontSize: "36px" }} />}
            description="교육 지원금을 제공하여 비용 걱정 없이 학습에만 집중할 수 있도록 최선의 지원을 아끼지 않습니다."
          />
          <Feature
            title="교통"
            icon={<MdDirectionsBus style={{ color: "#202c3c", fontSize: "36px" }} />}
            description="판교 교육장까지의 거리가 먼 경우를 위해 무료 셔틀버스 운행을 운행합니다."
          />
          <Feature
            title="중/석식비"
            icon={<MdRestaurant style={{ color: "#202c3c", fontSize: "36px" }} />}
            description="교육 수강자 전부에게 중/석식비를 제공"
          />
          <Feature
            title="인턴/서류면제"
            icon={<MdBadge style={{ color: "#202c3c", fontSize: "36px" }} />}
            description="수료 성적 상위 10% SK, MDS 등 기업 채용형 인턴 확정, 수료인원에 한해서는 서류 면제 협의중."
          />
        </Col3>
      </Section>
      <Section>
        <Title>교육 일정</Title>
        <Card grayish ma="0 0 20px 0">
          <h3>기초 교육</h3>
          <ul>
            <li>기간: 1~2월(주 5일)</li>
            <li>수업시간: 10:00시작 수업 6시간, 4시간 실습 및 질문 (조교 항시상주), 280시간</li>
            <li>수업방식: 오프라인</li>
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
          <h3>대학별 프로젝트</h3>
          <ul>
            <li>기간: 6월~9월</li>
            <li>수업시간: 총 360시간</li>
            <li>수업방식: 온라인</li>
          </ul>
        </Card>
        <StaticImage src="../assets/plan.png" alt="plan" style={{ alignSelf: "center" }} />
      </Section>
    </Layout>
  );
};

export default IndexPage;
