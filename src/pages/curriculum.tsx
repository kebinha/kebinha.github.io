import React, { useState } from "react";
import Layout from "../components/layout";
import VisualBox from "../components/visualBox";
import background from "../assets/background.png";
import Section from "../components/section";
import Title from "../components/title";
import { Col3 } from "../components/grid";
import Feature from "../components/feature";
import Card from "../components/card";
import curriculum, { CurriculumItemType } from "../constants/curriculum";
import Curriculum from "../components/curriculum";

const Subject = (props: { subject: CurriculumItemType }) => {
  return (
    <div>
      <h3>{props.subject.title}</h3>
      <p>{props.subject.description}</p>
      {props.subject.curriculum && <Curriculum sections={props.subject.curriculum} />}
    </div>
  );
};

const CurriculumTable = (props: { idx: number }) => {
  const data = curriculum[props.idx];
  return (
    <div>
      <h2>{data.title}</h2>
      <p>{data.description}</p>
      {data.items.map((item) => (
        <Subject subject={item} />
      ))}
    </div>
  );
};

const CurriculumPage = () => {
  const [idx, setIdx] = useState(0);
  return (
    <Layout>
      <VisualBox title="교육과정" img={background} />
      <Section>
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
            dark
            title="프로그래밍 기초"
            subTitle="100시간"
            description="SW개발에 입문하는 과정으로 SW개발에 사용되는 여러가지 언어들 중 가장 많이 사용되는 언어들에 대한 강의로 구성되어 있습니다."
            onClick={() => setIdx(0)}
          />
          <Feature
            dark
            title="SW이론교육"
            subTitle="60시간"
            description="SW이론교육에서는 여러가지 응용문제들을 해결하는 능력을 기르고 데이터를 다루는 세부적인 방법에 대해 배울 수 있습니다."
            onClick={() => setIdx(1)}
          />
          <Feature
            dark
            title="SW기술역량 교육"
            subTitle="심화"
            description="현업에서 사용할 수 있는 기술을 배우기 위해 SW기술역량 교육은 여러가지 분야에 대한 이론 및 실습 강좌를 통해 현업 SW개발자가 되기 위한 준비를 도와줍니다."
            onClick={() => setIdx(2)}
          />
        </Col3>
        <Card grayish ma="20px 0 0 0">
          <p style={{ fontWeight: "bold" }}>각 강좌를 클릭해 자세한 교육과정을 확인하세요</p>
        </Card>
        <CurriculumTable idx={idx} />
      </Section>
      <Section grayish>
        <Title>참여기업 프로젝트</Title>
        <Card>
          <p style={{ fontWeight: "bold" }}>
            27개 참여기업(SK CC, Kakao, Nexon, 한글과컴퓨터, NeoWiz, 오비고, 포스트시뮬레이션, 네오드림등)의 현업 멘토들과 함께 실제 기업에서 직면하는 문제를
            해결하고 프로젝트를 진행하며 현업 역량을 갖춘 SW 개발자로 거듭날 수 있습니다.
          </p>
        </Card>
        <p>프로젝트는 크게 스마트 팩토리 헬스케어 게임 로 구성되어 있으며 각 주제 아래 세부 주제들의 프로젝트가 존재합니다.</p>
        <p>팀 구성별 난이도에 따라 2~3개의 프로젝트를 선택하여 수행하며, 각 프로젝트당 60~90시간 정도가 소요됩니다.</p>
        <Col3>
          <Feature
            title="스마트 팩토리"
            description="제조 산업을 주제로 SW개발을 수행하는 프로젝트로 하드웨어 기반, 소프트웨어 기반, 디지털 트윈 기반 의 프로젝트를 경험하고 현업 기술을 기를 수 있습니다."
          />
          <Feature
            title="헬스 케어"
            description="의료 산업 및 헬스케어 분야에서 요구되는 SW개발 기술을 배울 수 있으며, 임베디드 기반, 클라우드 기반 , 모바일 기반 개인 서비스 등의 프로젝트를 경험할 수 있습니다."
          />
          <Feature
            title="게임"
            description="게임산업에서 많이 사용되는 프로그램의 실습과 사용을 통해 현업 역량을 양성할 수 있으며, 슈팅 게임, 아케이드 게임, RPG 게임, 퍼즐 게임, 플랫폼 등의 프로젝트를 경험할 수 있습니다."
          />
          <Feature
            title="자율주행"
            description="자율주행의 핵심 인공지능 기술과 시스템에 대한 역량을 양성할 수 있으며 어떻게 인공지능이 자율주행의 모든 기능을 구현하고 있는지 어떻게 더 발전할 것인지를 이해할 수 있습니다."
          />
        </Col3>
      </Section>
    </Layout>
  );
};

export default CurriculumPage;
