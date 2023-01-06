import React from "react";
import Feature from "../components/feature";
import Title from "../components/title";
import { MdSchool, MdPaid, MdDirectionsBus, MdRestaurant, MdBadge } from "react-icons/md";
import Card from "../components/card";
import VisualBox from "../components/visualBox";
import background from "../assets/background.png";
import Header from "../components/header";
import Section from "../components/section";
import Curriculum from "../components/curriculum";
import Footer from "../components/footer";

const test = [
  {
    title: "파이썬 환경설정(Anaconda/Miniconda, VScode설치)",
    units: ["python 변수의 개념(str, float, int, bool type의 이해)", "각 변수별 특징들"],
  },
  {
    title: "python 자료구조의 이해(dict, tuple, list, set 등)",
    units: ["사전(dictionary)자료형에 대한 이해", "List,Tuple자료형", "set자료형", "그밖의 자료형(collections)"],
  },
  {
    title: "조건문(If/elif/else)",
  },
  {
    title: "반복문",
    units: ["while-loop/for-loop", "break/continue/pass"],
  },
];

const IndexPage = () => {
  return (
    <div>
      <Header />
      <VisualBox
        title="K-Software BootCamp"
        subTitle="인하대학교에서 SW 개발에 관심있는 인재를 양성하고 현업 중심의 프로젝트를 경험할 수 있는 <2023 K-Software BootCamp>를 시작합니다"
        img={background}
      />
      <Section grayish>
        <>
          <Title>abc</Title>
          <Feature
            theme="dark"
            title="SW기술역량 교육"
            subTitle="심화"
            icon={<MdSchool style={{ color: "#ffffff", fontSize: "36px" }} />}
            description="현업에서 사용할 수 있는 기술을 배우기 위해 SW기술역량 교육은 여러가지 분야에 대한 이론 및 실습 강좌를 통해 현업 SW개발자가 되기 위한 준비를 도와줍니다."
          />
        </>
      </Section>
      <Section>
        <>
          <Title>abc</Title>
          <Card>
            <p style={{ fontWeight: "bold" }}>
              27개 참여기업(SK CC, Kakao, Nexon, 한글과컴퓨터, NeoWiz등)의 현업 멘토들과 함께 실제 기업에서 직면하는 문제를 해결하고 프로젝트를 진행하며 현업
              역량을 갖춘 SW 개발자로 거듭날 수 있습니다.
            </p>
          </Card>
        </>
      </Section>
      <Footer></Footer>
    </div>
  );
};

export default IndexPage;
