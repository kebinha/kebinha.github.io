import React, { useState } from "react";
import styled from "styled-components";
import { MdExpandMore, MdExpandLess } from "react-icons/md";

export interface Section {
  title: string;
  units?: string[];
}

interface CurriculumProps {
  sections: Section[];
}

interface SectionProps {
  section: Section;
}

interface SectionStyle {
  expand?: boolean;
  isUnit?: boolean;
}

const CurriculumWrapper = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const StyledTd = styled.td<SectionStyle>`
  border: 1px solid #e4e4e4;
  padding: 15px 20px;
  padding-left: ${(props) => props.isUnit && "50px"};
  background-color: ${(props) => (props.isUnit ? "#ffffff" : "#f4f4f4")};
  cursor: ${(props) => props.expand && "pointer"};
`;

const Section = (props: React.TdHTMLAttributes<never> & SectionProps & SectionStyle) => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((prev) => !prev);
  const buttonStyle: React.CSSProperties = {
    fontSize: "20px",
    float: "right",
  };
  return (
    <>
      <tr>
        <StyledTd onClick={toggle} isUnit={props.isUnit} expand={props.expand}>
          <span>{props.section.title}</span>
          {props.expand && (open ? <MdExpandLess style={buttonStyle} /> : <MdExpandMore style={buttonStyle} />)}
        </StyledTd>
      </tr>
      {open &&
        props.section.units &&
        props.section.units.map((unit) => {
          return (
            <tr key={unit}>
              <StyledTd isUnit>{unit}</StyledTd>
            </tr>
          );
        })}
    </>
  );
};

const Curriculum = (props: CurriculumProps) => {
  return (
    <CurriculumWrapper>
      <tbody>
        {props.sections.map((section) => {
          return <Section key={section.title} section={section} expand={section.units !== undefined} />;
        })}
      </tbody>
    </CurriculumWrapper>
  );
};

export default Curriculum;
